import Aboutus from "../components/Aboutus";
import ContactUs from "../components/contact-us/ContactUs";
import Feachers from "../components/Feachers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/products/Products";
import { getProductsTab } from "../server/getProductsTab";

export default function Home({ productTab, productsCategory }) {
  return (
    <>
      <Header />
      <Feachers />
      <Products
        productsCategory={productsCategory && productsCategory}
        productTab={productTab && productTab}
      />
      <Aboutus />
      <ContactUs />
      <Footer />
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
