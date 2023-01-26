import React, { useState } from "react";
import { useRouter } from "next/router";

const Pagination = ({ meta, onPage }) => {
   const [activePageIndex, setActivePageIndex] = useState(1);
   const router = useRouter();
   return (
      <div className="text-left my-12 flex items-center gap-x-2 justify-center  ">
         {meta.links.slice(1, -1).map((link, index) => {
            return (
               <button
                  key={index}
                  onClick={() => {
                     onPage({ page: link.label });
                     setActivePageIndex(link.label);
                  }}
                  className={`bg-gray-600 rounded-md w-8 h-8 font-bold flex justify-center items-center  hover:opacity-70 ${
                     !router.query.page &&
                     "first:!bg-red-100 border-0 text-gray-800"
                  } ${
                     router.query.hasOwnProperty("page") &&
                     router.query.page == link.label &&
                     "!bg-red-100 border-0 text-gray-800"
                  }`}
               >
                  {link.label}
               </button>
            );
         })}
      </div>
   );
};

export default Pagination;
