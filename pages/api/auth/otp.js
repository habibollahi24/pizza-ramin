import callApi from "../../../server/callApi";
import cookie from "cookie";
import { ValidationsErrorFields } from "./../../../server/callApi";
export default async function handler(req, res) {
   if (req.method === "POST") {
      if (!req.cookies.login_token) {
         //یعنی بدون اینکه توکن اولی رو بگیره بره سراغ توکن دومی
         res.status(403).json({ message: "ورود ناموفق " });
         return;
      }
      try {
         const response = await callApi().post("/auth/check-otp", {
            otp: req.body.otp,
            login_token: req.cookies.login_token,
         });

         res.setHeader("Set-Cookie", [
            cookie.serialize("login_token", "", {
               httpOnly: true,
               secure: process.env.NODE_ENV !== "development",
               maxAge: new Date(0),
               path: "/",
            }),
            cookie.serialize("token", "", {
               httpOnly: true,
               secure: process.env.NODE_ENV !== "development",
               maxAge: 60 * 60 * 24 * 7, // 1 week
               path: "/",
            }),
         ]);
         res.status(200).json({ user: response.data.data.user });
      } catch (error) {
         if (error instanceof ValidationsErrorFields) {
            res.status(422).json({ message: error.errorMessages });
         }
      }
   }
}
