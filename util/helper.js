export const priceFormat = (price) => {
  return new Intl.NumberFormat().format(price);
};
