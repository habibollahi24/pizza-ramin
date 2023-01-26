import callApi from "../../../server/callApi";
import cookie from "cookie";
import { ValidationsErrorFields } from "./../../../server/callApi";

export default async function handler(req, res) {
   if (req.method === "POST") {
      try {
         const response = await callApi().post("/auth/login", {
            cellphone: req.body.cellphone,
         });

         res.setHeader(
            "Set-Cookie",
            cookie.serialize("login_token", response.data.data.login_token, {
               httpOnly: true,
               secure: process.env.NODE_ENV !== "development",
               maxAge: 60 * 60 * 24 * 7, // 1 week
               path: "/",
            })
         );
         res.status(200).json({ message: "کد ارسال شد." });
      } catch (error) {
         if (error instanceof ValidationsErrorFields) {
            res.status(422).json({ message: error.errorMessages });
         }
      }
   }
}
