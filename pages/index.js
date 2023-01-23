import Aboutus from "../components/about-us/Aboutus";
import ContactUs from "../components/contact-us/ContactUs";
import Hero from "../components/home-page/Hero";
import Layout from "../components/layout/Layout";
import Products from "../components/products/Products";
import Features from "./../components/home-page/Features";

import { getProductsTab } from "../server/getProductsTab";

export default function Home({ productTab, productsCategory }) {
   return (
      <>
         <Layout title="home">
            <Hero />
            <Features />
            <Products
               productsCategory={productsCategory && productsCategory}
               productTab={productTab && productTab}
            />
            <Aboutus />
            <ContactUs />
         </Layout>
      </>
   );
}

export async function getServerSideProps() {
   const { data } = await getProductsTab();

   return {
      props: {
         productTab: data.data.tabList,
         productsCategory: data.data.tabPanel,
      },
   };
}
