import React, { useState } from "react";
import { useAuth } from "./../../context/AuthContext";
import { toast } from "react-toastify";

const PhoneLogin = ({ setStep }) => {
   const [cellPhone, setCellPhone] = useState("");
   const { login } = useAuth();

   const handleLogin = async () => {
      //validation
      if (cellPhone.trim() === "") {
         toast.error("شماره وارد بفرمایید.");
         return;
      }
      const pattern = /^(\+98|0)?9\d{9}$/;
      if (!pattern.test(cellPhone)) {
         toast.error("شماره صحیح نیست.");
         return;
      }

      await login(cellPhone);
      setStep(2);
   };

   return (
      <div className=" w-80 rounded-md py-16 px-10 text-center ">
         <div>
            <input
               className="outline-none px-4 py-1 border-b border-gray-100 bg-transparent mb-8 "
               placeholder="+98"
               type="text"
               dir="ltr"
               value={cellPhone}
               onChange={(e) => setCellPhone(e.target.value)}
            />
            <button onClick={handleLogin} className="btn-primary">
               ارسال پیامک
            </button>
         </div>
      </div>
   );
};

export default PhoneLogin;
