import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Product from "./../components/products/Product";

import { getCategories } from "./../server/getCategories";
import { getMenu } from "../server/getMenu";

import { HiSearch, HiFilter } from "react-icons/hi";

const Menu = ({ categories, productsData }) => {
   const [categoryId, setcategoryId] = useState(null);
   const [filter, setFilter] = useState(false);
   const { products, meta } = productsData;
   const categoryHandler = (id) => {
      setcategoryId(id);
   };

   return (
      <>
         <Layout title="menu">
            <div className="my-container mt-20 md:mt-8 ">
               <section className="grid grid-cols-1 md:grid-cols-12 gap-5 py-4 ">
                  <aside className=" md:col-span-3  ">
                     <button
                        className="md:hidden px-2 text-3xl align-middle "
                        onClick={() => setFilter(!filter)}
                     >
                        <HiFilter />
                     </button>
                     <div
                        className={`bg-slate-700  py-2 px-5 rounded-md sticky top-8 hidden md:block ${
                           filter ? "!block mt-4" : ""
                        }`}
                     >
                        <div className="flex items-center mb-4 border-b-2 border-gray-500">
                           <input
                              type="text"
                              className="secondary-field"
                              placeholder="جستجو"
                           />
                           <button>
                              <HiSearch className="text-gray-500 text-xl" />
                           </button>
                        </div>
                        <div className="mb-4">
                           <p className="my-3 text-red-100 font-semibold ">
                              دسته بندی
                           </p>
                           {categories?.map((cat) => {
                              return (
                                 <li
                                    key={cat.id}
                                    onClick={() => categoryHandler(cat.id)}
                                    className={`cursor-pointer mb-1 font-extralight ${
                                       categoryId === cat.id
                                          ? "text-red-400"
                                          : ""
                                    } `}
                                 >
                                    {cat.name}
                                 </li>
                              );
                           })}
                        </div>
                        <div>
                           <p className="my-3 text-red-100 font-semibold ">
                              مرتب سازی{" "}
                           </p>
                           <div className="flex items-center mb-1 gap-x-3 font-extralight">
                              <input type="radio" name="sort" id="" />
                              <label htmlFor="">بیشترین قیمت</label>
                           </div>
                           <div className="flex items-center mb-1 gap-x-3 font-extralight">
                              <input type="radio" name="sort" id="" />
                              <label htmlFor="">کمترین قیمت</label>
                           </div>
                           <div className="flex items-center mb-1 gap-x-3 font-extralight">
                              <input type="radio" name="sort" id="" />
                              <label htmlFor="">پر فروش ترین</label>
                           </div>
                           <div className="flex items-center mb-1 gap-x-3 font-extralight">
                              <input type="radio" name="sort" id="" />
                              <label htmlFor="">با تخفیف</label>
                           </div>
                        </div>
                     </div>
                  </aside>
                  <main className=" md:col-span-9 ">
                     <div className="grid grid-cols-1 md:grid-cols-2  gap-7 h-max">
                        {products?.map((product) => {
                           return (
                              <Product key={product.id} product={product} />
                           );
                        })}
                     </div>
                  </main>
               </section>
               <div className="text-left my-12 flex items-center gap-x-2 justify-center">
                  {meta.links.slice(1, -1).map((link, index) => {
                     return (
                        <button
                           key={index}
                           className={`bg-gray-600 rounded-md w-8 h-8 font-bold ${
                              link.active &&
                              "!bg-red-100 border-0 text-gray-800"
                           }`}
                        >
                           {link.label}
                        </button>
                     );
                  })}
               </div>
            </div>
         </Layout>
      </>
   );
};

export async function getServerSideProps(context) {
   const { data } = await getCategories();
   const res = await getMenu();
   const productsData = res.data.data;
   return {
      props: { categories: data.data, productsData },
   };
}

export default Menu;
