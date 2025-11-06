const pi = 3.14;
// pi = Math.PI;

console.log(pi);

function valorPI() {
  const pi = Math.PI;
  console.log(pi.toFixed(2));
}

valorPI();
const numeros = [20, 55, 67, 34, 24, 8, 100];
console.log(Math.max(20, 55, 67, 34, 24, 8, 100));
console.log(Math.max(...numeros));
console.log(Math.min(...numeros));
