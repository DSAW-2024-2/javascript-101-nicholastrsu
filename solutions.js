// Sum of Two Numbers
function sum(a, b) {
if(!Number(a)||!Number(b)){
  console.error("Los datos no corresponden, se necesita agregar números");
  return;
}
return a+b;

}


// Factorial of a Number
function factorial(n) {
  if (!Number(n)||n<0){
    console.error("Los datos no corresponden, se necesita agregar un número positivo");
    return;
  }
  return n === 0 ? 1 : n * factorial(n - 1);
}

// Find the Largest Number
function findLargest(arr) {
if (!Array.isArray(arr) || arr.some(el => typeof el !== 'number')) {
   console.error("Los datos de entrada no corresponden"); 
   return;
 }
    return arr.reduce((max, current) => (current > max ? current : max), -Infinity);
}

// Count Vowels in a String
function countVowels(str) {
  if (!isString(str)){
    console.error("Los datos no corresponden, agregue una cadena");
    return;
  }
  const Vowels = new Set (["a","e","i","o","u","A","E","I","O","U"]);
  return [str].filter(char=> vowels.has(char)).length;
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
