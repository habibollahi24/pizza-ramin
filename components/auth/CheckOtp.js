import React, { useState } from "react";
import { useAuth } from "./../../context/AuthContext";
import { toast } from "react-toastify";

const CheckOtp = () => {
   const [otpCode, setOtpCode] = useState("");
   const { checkOtp } = useAuth();

   const handleOtp = () => {
      //validation
      if (otpCode.trim() === "") {
         toast.error("کد وارد بفرمایید.");
         return;
      }
      const pattern = /^[0-9]{6}$/;
      if (!pattern.test(otpCode)) {
         toast.error("کد صحیح نیست.");
         return;
      }

      checkOtp(otpCode);
   };

   return (
      <div className=" w-80 rounded-md py-16 px-10 text-center ">
         <div>
            <input
               className="outline-none w-1/2 px-4 py-1 border-b border-gray-100 bg-transparent mb-8 "
               placeholder="123456"
               type="text"
               dir="ltr"
               value={otpCode}
               onChange={(e) => setOtpCode(e.target.value)}
            />
            <button onClick={handleOtp} className="btn-primary">
               ارسال کد تایید
            </button>
         </div>
      </div>
   );
};

export default CheckOtp;
