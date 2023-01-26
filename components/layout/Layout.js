import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";

const Layout = ({ children, title }) => {
   return (
      <>
         <Head>
            <title>{`Pizza-Ramin| ${title}`} </title>
         </Head>
         <Header />
         {children}
         <Footer />
      </>
   );
};

export default Layout;
