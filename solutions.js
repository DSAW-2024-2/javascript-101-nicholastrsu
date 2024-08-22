// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Los datos no corresponden, agregue dos números");
    return;
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
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


// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr) || arr.some(el => typeof el !== "number")) {
    console.log("Los datos no corresponden, agregue un arreglo de números");
    return;
  }
  return Math.max(arr);
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== "string") {
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
  if (typeof n !== "number" || n <= 1) {
    console.error("Los datos no corresponden, agregue un número mayor a 1");
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
