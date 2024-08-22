// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !== "número" || typeof b !== "número") {
    console.log("Los datos no corresponden, agregue dos números");
    return;
  }
  return a + b;

}


// Factorial of a Number
function factorial(n) {
  if (typeof n !== "número" || n < 0 || !Number.isInteger(n)) {
    console.log("Los datos no corresponden, agregue un número positivo");
    return;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== "String") {
    console.log("Los datos no corresponden");
    return;
  }
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  if(!Number(n)||n<=1){
    console.error("Los datos no corresponden, agregue un número que sea mayor a 1");
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}


module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
