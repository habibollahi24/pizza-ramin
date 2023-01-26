import React, { useState } from "react";
import Layout from "../components/layout/Layout";

import { getCategories } from "./../server/getCategories";
import { getMenu } from "../server/getMenu";

import Pagination from "../components/menu/Pagination";
import FilterProducts from "../components/menu/FilterProducts";
import { pageQuery } from "../server/pageQuery";
import { useRouter } from "next/router";

const Menu = ({ categories, productsData }) => {
   const { products, meta } = productsData;

   const [productList, setProductList] = useState(products);

   const [loading, setLoading] = useState(false);
   const router = useRouter();

   const handleQuery = async (value) => {
      setLoading(true);
      const allQuery = { ...router.query, ...value };
      if (!value.hasOwnProperty("page")) {
         delete allQuery.page;
      }

      const parsedObject = new URLSearchParams(allQuery).toString();
      const { data } = await pageQuery(parsedObject);

      setProductList(data.data.products);

      router.push(`/menu?${parsedObject}`, undefined, { shallow: true });

      setLoading(false);
   };
   return (
      <>
         <Layout title="menu">
            <div className="my-container mt-20 md:mt-8 ">
               <FilterProducts
                  products={productList}
                  categories={categories}
                  loading={loading}
                  onSearch={handleQuery}
                  onCategory={handleQuery}
                  onSort={handleQuery}
               />
               <Pagination meta={meta} onPage={handleQuery} />
            </div>
         </Layout>
      </>
   );
};

export async function getServerSideProps({ resolvedUrl }) {
   const { data } = await getCategories();
   //{data} = list of categories
   const res = await getMenu(resolvedUrl);
   const productsData = res.data.data;
   //productsData = {products (6تا محصول ب ازای هر صفحه) , links , meta:{links}}
   return {
      props: { categories: data.data, productsData },
   };
}

export default Menu;
