import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../components/layout/Loading";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/globals.css";
import AuthContext from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
   const [loading, setLoading] = useState(false);
   const router = useRouter();

   useEffect(() => {
      router.events.on("routeChangeStart", () => {
         setLoading(true);
      });
      router.events.on("routeChangeComplete", () => {
         setLoading(false);
      });
   }, [router.events]);

   return (
      <AuthContext>
         {loading && <Loading position="absolute" />}
         <Component {...pageProps} />
         <ToastContainer position="bottom-center" />
      </AuthContext>
   );
}

export default MyApp;
