interface Payment{
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}
const totalPrice = ({
  price,
  discount,
  isInstallment,
  months,
}: Payment): number => {
  const discountPrice: number = price - (price / 100) * discount;

  if (isInstallment) {
    return discountPrice / months;
  } else {
    return discountPrice;
  }
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(price); // 6250
