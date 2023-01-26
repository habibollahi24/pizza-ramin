import React, { useState } from "react";
import { HiSearch, HiFilter } from "react-icons/hi";
import Product from "./../products/Product";
import Loading from "./../layout/Loading";
import { useRouter } from "next/router";

const FilterProducts = ({
   products,
   categories,
   loading,
   onSearch,
   onCategory,
   onSort,
}) => {
   const [searchValue, setSearchValue] = useState("");
   const [categoryId, setcategoryId] = useState(null);
   //in mobile menu
   const [filter, setFilter] = useState(false);
   const router = useRouter();

   const categoryHandler = (id) => {
      setcategoryId(id);
   };

   return (
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
                     value={searchValue}
                     onChange={(e) => {
                        setSearchValue(e.target.value);
                        // searchValue && onSearch({ search: e.target.value });
                        
                     }}
                  />
                  <button
                     onClick={() =>
                        searchValue.trim() &&
                        onSearch({ search: searchValue.trim() })
                     }
                     className="bg-gray-800 p-2 rounded-md"
                  >
                     <HiSearch className="text-gray-500 text-xl" />
                  </button>
               </div>
               <div className="mb-4">
                  <p className="my-3 text-red-100 font-semibold ">دسته بندی</p>
                  {categories?.map((cat) => {
                     return (
                        <li
                           key={cat.id}
                           onClick={() => {
                              categoryHandler(cat.id);
                              onCategory({ category: cat.id });
                           }}
                           className={`cursor-pointer mb-1 font-extralight ${
                              categoryId === cat.id ||
                              (router.query.hasOwnProperty("category") &&
                                 router.query.category == cat.id)
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
                  <p className="my-3 text-red-100 font-semibold ">مرتب سازی </p>
                  <div className="flex items-center mb-1 gap-x-3 font-extralight ">
                     <input
                        className="cursor-pointer"
                        type="radio"
                        name="sort"
                        id="max"
                        onChange={() => onSort({ sortBy: "max" })}
                        checked={
                           router.query.hasOwnProperty("sortBy") &&
                           router.query.sortBy == "max"
                        }
                     />
                     <label className="cursor-pointer" htmlFor="max">
                        بیشترین قیمت
                     </label>
                  </div>
                  <div className="flex items-center mb-1 gap-x-3 font-extralight ">
                     <input
                        className="cursor-pointer"
                        type="radio"
                        name="sort"
                        id="min"
                        onChange={() => onSort({ sortBy: "min" })}
                        checked={
                           router.query.hasOwnProperty("sortBy") &&
                           router.query.sortBy == "min"
                        }
                     />
                     <label className="cursor-pointer" htmlFor="min">
                        کمترین قیمت
                     </label>
                  </div>
                  <div className="flex items-center mb-1 gap-x-3 font-extralight ">
                     <input
                        className="cursor-pointer"
                        type="radio"
                        name="sort"
                        id="most"
                        onChange={() => onSort({ sortBy: "bestseller" })}
                        checked={
                           router.query.hasOwnProperty("sortBy") &&
                           router.query.sortBy == "bestseller"
                        }
                     />
                     <label className="cursor-pointer" htmlFor="most">
                        پر فروش ترین
                     </label>
                  </div>
                  <div className="flex items-center mb-1 gap-x-3 font-extralight ">
                     <input
                        className="cursor-pointer"
                        type="radio"
                        name="sort"
                        id="sale"
                        onChange={() => onSort({ sortBy: "sale" })}
                        checked={
                           router.query.hasOwnProperty("sortBy") &&
                           router.query.sortBy == "sale"
                        }
                     />
                     <label className="cursor-pointer" htmlFor="sale">
                        با تخفیف
                     </label>
                  </div>
               </div>
            </div>
         </aside>

         {products?.length > 0 ? (
            <main className=" md:col-span-9 ">
               {loading ? (
                  <div className="flex justify-center h-full items-center ">
                     <Loading position="relative" />
                  </div>
               ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2  gap-7 h-max">
                     {products?.map((product) => {
                        return <Product key={product.id} product={product} />;
                     })}
                  </div>
               )}
            </main>
         ) : (
            <main className=" md:col-span-9 ">
               <div className="flex justify-center h-full items-center ">
                  محصولی یافت نشد:(
               </div>
            </main>
         )}
      </section>
   );
};

export default FilterProducts;
