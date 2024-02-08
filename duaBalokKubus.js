//
// function jumlaVolumeDuaKubus(a, b) {
//   let volumeA;
//   let volumeB;
//   let total;

//   volumeA = a * a * a;
//   volumeB = b * b * b;

//   total = volumeA + volumeB;

//   return total;
// }

// console.log(jumlaVolumeDuaKubus(8, 3));
// console.log(jumlaVolumeDuaKubus(10, 5));

// Refactoring
function jumlaVolumeDuaKubus(a, b) {
  return a ** 3 + b ** 3;
}

console.log(jumlaVolumeDuaKubus(8, 3));
