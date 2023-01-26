import { useState } from "react";
import CheckOtp from "../../components/auth/CheckOtp";
import PhoneLogin from "../../components/auth/PhoneLogin";
import Layout from "./../../components/layout/Layout";
const LoginPage = () => {
   const [step, setStep] = useState(1);
   return (
      <Layout title="login">
         <div className="min-h-[70vh]">
            <div className="my-container my-10 flex justify-center items-center h-full ">
               {step === 1 && <PhoneLogin setStep={setStep} />}
               {step === 2 && <CheckOtp />}
            </div>
         </div>
      </Layout>
   );
};
export default LoginPage;
