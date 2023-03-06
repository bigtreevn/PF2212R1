/**
 * Viết hàm isPrimeNumber() nhận vào một tham số number và cho biết number có phải là số nguyên tố hay không. ví dụ:
 * isPrimeNumber(17)
 * Output:
 * true
 * isPrimeNumber(18)
 * output: 
 * false
 */
function isPrimeNumber(number) {
   if (number <= 1) {
    return false;
  }
  if (number === 2 || number === 3) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrimeNumber(17));
console.log(isPrimeNumber(18));