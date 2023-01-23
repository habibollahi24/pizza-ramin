import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      console.log("salam");
      setLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      console.log("Bye");
      setLoading(false);
    });
  }, [router.events]);

  return (
    <>
      {loading && <Loading />}
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
