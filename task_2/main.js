function calcNum(num) {
  let product = 1;
  let i = 1;

  while (i <= num) {
    product *= i;
    i++;
  }

  return product;
}
// console.log(calcNum(9)); // Output: 362880

console.log(calcNum(prompt('Istalgan raqamingizni kiriting :')));