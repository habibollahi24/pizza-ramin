import { useState } from "react";
import { toast } from "react-toastify";
import { contactusData } from "../../server/contactusData";
import { ValidationsErrorFields } from "./../../server/callApi";

const ContactUsForm = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [subject, setSubject] = useState("");
   const [text, setText] = useState("");
   const [loading, setLoading] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      if (!name || !email || !subject || !text) {
         toast.error("پر کردن موارد الزامیست.");
         setLoading(false);
         return;
      }

      try {
         await contactusData({ name, email, text, subject });
         toast.success("پیغامتان ارسال شد");
         setName("");
         setEmail("");
         setSubject("");
         setText("");
      } catch (error) {
         if (error instanceof ValidationsErrorFields) {
            Object.values(error.errorMessages).map((val) => {
               val.map((err) => {
                  toast.error(err);
               });
            });
         }
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className="md:p-4 order-3 md:order-1">
         <div className="text-title mb-10 text-center  ">
            با ما در ارتباط باشید.
         </div>
         <form onSubmit={handleSubmit} className="space-y-4">
            <input
               className="primary-field"
               type="text"
               name="name"
               placeholder="نام"
               value={name}
               onChange={(e) => setName(e.target.value)}
            />

            <input
               className="primary-field"
               type="text"
               name="email"
               placeholder="ایمیل"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />

            <input
               className="primary-field"
               type="text"
               name="subject"
               placeholder="موضوع پیام"
               value={subject}
               onChange={(e) => setSubject(e.target.value)}
            />

            <textarea
               className="primary-field h-24"
               name="text"
               placeholder="متن پیام"
               value={text}
               onChange={(e) => setText(e.target.value)}
            ></textarea>

            <button
               className={`submit-form-btn w-full md:w-auto ${
                  loading ? "opacity-25" : ""
               } `}
               type="submit"
            >
               ارسال پیغام
            </button>
         </form>
      </div>
   );
};

export default ContactUsForm;
