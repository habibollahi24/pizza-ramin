import Image from "next/image";

import { priceFormat } from "../../util/helper";

const Product = ({ product }) => {
   const {
      name,
      description,
      price,
      primary_image,
      is_sale,
      sale_price,
      primary_image_blurDataURL,
   } = product;
   return (
      <div className="  bg-slate-700  rounded-2xl shadow overflow-hidden relative">
         <div className="  overflow-hidden relative w-full h-[240px]">
            <Image
               className="transition-all duration-300 hover:scale-110  object-cover  "
               src={primary_image}
               alt={name}
               //   width={366}
               //   height={244}
               layout="fill"
               //   layout="responsive"
               placeholder="blur"
               blurDataURL={primary_image_blurDataURL}
            />
         </div>
         <div className=" text-gray-300 p-4 ">
            <div className="font-semibold text-2xl mt-2 p-2 text-red-200">
               {name}
            </div>
            <div className="text-sm text-red-100 leading-relaxed p-2 mb-6">
               {description}.
            </div>
            <div className="flex justify-between items-center p-1">
               <button className=" flex transition-all duration-300 justify-center items-center text-lg font-semibold btn-primary py-1 px-10        ">
                  {/* <HiShoppingCart /> */}
                  سفارش
               </button>
               <div className="font-semibold">
                  {is_sale ? (
                     <div>
                        <div className="line-through">
                           {priceFormat(price)} تومان
                        </div>
                        <div>{priceFormat(sale_price)} تومان</div>
                     </div>
                  ) : (
                     <div>{priceFormat(price)} تومان</div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Product;
