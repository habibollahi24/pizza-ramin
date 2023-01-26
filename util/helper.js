export const priceFormat = (price) => {
   // سه رقه سه رقم جدا میکنه
   return new Intl.NumberFormat().format(price);
};
