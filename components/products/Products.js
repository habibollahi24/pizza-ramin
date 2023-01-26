import React, { useState } from "react";
import Product from "./Product";
import { HiOutlinePencilAlt } from "react-icons/hi";

const Products = ({ productsCategory, productTab }) => {
   const [currentTab, setCurrentTab] = useState(1);
   return (
      <div className="">
         <div className="flex justify-center gap-x-2 items-center mt-16 md:mt-28 text-title w-max mx-auto">
            <div className="">
               <HiOutlinePencilAlt />
            </div>
            <h2 className="  ">منو محصولات</h2>
         </div>
         <ProductsTab
            productTab={productTab}
            setCurrentTab={setCurrentTab}
            currentTab={currentTab}
         />
         <div className="my-container">
            {productsCategory.map((category, index) => {
               return (
                  <div key={index}>
                     <div className="grid grid-cols-1 md:grid-cols-3 md:px-0 gap-5">
                        {category.map((product) => {
                           if (product.category_id === currentTab)
                              return (
                                 <Product product={product} key={product.id} />
                              );
                        })}
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

const ProductsTab = ({ productTab, currentTab, setCurrentTab }) => {
   return (
      <div className="my-container md:sticky top-0 z-50 bg-slate-800">
         <div>
            <ul className=" flex flex-col md:flex-row justify-center md:max-w-screen-sm md:mx-auto gap-3 my-2">
               {productTab.map((tab, index) => {
                  return (
                     <li
                        onClick={() => {
                           console.log(tab, index);
                           setCurrentTab(index + 1);
                        }}
                        className={`rounded-md text-xl md:text-base  text-white  py-8 md:py-2  px-4 font-semibold text-center flex-grow cursor-pointer transition-all duration-300  ${
                           currentTab === index + 1
                              ? "bg-red-900 text-white  ring-2 ring-red-400"
                              : "bg-slate-900 hover:opacity-70"
                        }  `}
                        key={index}
                     >
                        {tab}
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
};

export default Products;
