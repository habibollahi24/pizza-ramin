import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { contactusData } from "../../server/contactusData";
import { useState } from "react";

const ContactUsForm = () => {
  const onSubmit = async (values, { resetForm }) => {
    try {
      const { data } = await contactusData(values);
      toast.success("پیغامتان ارسال شد", { position: "bottom-right" });
      resetForm({ values: "" });
      resetForm({ errors: "" });
    } catch (err) {
      resetForm({ values: "" });
      resetForm({ errors: "" });
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      text: "",
    },
    validateOnMount: true,
    onSubmit,

    validationSchema: yup.object({
      name: yup.string().required("لطفا نام خود را وارد کنید"),
      email: yup.string().required("لطفا ایمیل خود را وارد کنید").email("فرمت ایمیل نادرست است"),
      subject: yup.string().required("لطفا موضوع خود را وارد کنید"),
      text: yup.string().required("لطفا متن خود را وارد کنید"),
    }),
  });

  return (
    <div className="md:p-4 order-3 md:order-1">
      <div className="text-title mb-10 text-center  ">با ما در ارتباط باشید.</div>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <input
          className="primary-field"
          type="text"
          name="name"
          {...formik.getFieldProps("name")}
          placeholder="نام"
        />
        {formik.errors.name && formik.touched.name && <p className="error">{formik.errors.name}</p>}
        <input
          className="primary-field"
          type="text"
          name="email"
          {...formik.getFieldProps("email")}
          placeholder="ایمیل"
        />
        {formik.errors.email && formik.touched.email && (
          <p className="error">{formik.errors.email}</p>
        )}
        <input
          className="primary-field"
          type="text"
          name="subject"
          {...formik.getFieldProps("subject")}
          placeholder="موضوع پیام"
        />
        {formik.errors.subject && formik.touched.subject && (
          <p className="error">{formik.errors.subject}</p>
        )}
        <textarea
          className="primary-field h-24"
          name="text"
          {...formik.getFieldProps("text")}
          placeholder="متن پیام"
        ></textarea>
        {formik.errors.text && formik.touched.text && <p className="error">{formik.errors.text}</p>}
        <button
          disabled={!(formik.isValid && formik.dirty)}
          className="submit-form-btn w-full md:w-auto"
          type="submit"
        >
          ارسال پیغام
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
