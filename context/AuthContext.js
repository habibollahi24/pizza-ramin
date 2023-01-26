import React, { createContext, useContext, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Auth = createContext();

const AuthContext = ({ children }) => {
   const [user, setUser] = useState(null);
   const router = useRouter();

   const login = async (cellphone) => {
      try {
         const res = await axios.post("http://localhost:3000/api/auth/login", {
            cellphone,
         });

         toast.success(res.data.message);
      } catch (error) {
         console.log(error);
         console.log("kirede");

         Object.values(error.response.data.message).map((val) => {
            val.map((err) => {
               toast.error(err);
            });
         });
      }
   };
   const checkOtp = async (otp) => {
      try {
         const res = await axios.post("http://localhost:3000/api/auth/otp", {
            otp,
         });
         setUser(res.data.user);
         //redirect to home page
         router.push("/");
      } catch (error) {
         Object.values(error.response.data.message).map((val) => {
            val.map((err) => {
               toast.error(err);
            });
         });
      }
   };

   return (
      <Auth.Provider value={{ login, checkOtp, user }}>
         {children}
      </Auth.Provider>
   );
};

export const useAuth = () => useContext(Auth);

export default AuthContext;
