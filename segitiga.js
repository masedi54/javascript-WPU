// To create
// *****
// let s = "";
// for (let i = 0; i < 5; i++) {
//   s += "*";
// }
// console.log(s);

// To create
// *
// *
// *
// *
// *
// let s = "";
// for (let i = 0; i < 5; i++) {
//   s += "*";
//   s += "\n";
// }
// console.log(s);

// To create
// ******
// ******
// ******
// ******
// ******
// let s = "";
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= 5; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// To create
// *
// **
// ***
// ****
// *****
// let s = "";
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// To create
// *****
// ****
// ***
// **
// *
// let s = '';
// for (let i = 5; i > 0; i--) {
//   for (let j = 0; j < i; j++) {
//     s += '*';
//   }
//   s += '\n';
// }
// console.log(s);

// To create
// *****
//  ****
//   ***
//    **
//     *
// let s = "";
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < i; j++) {
//     s += " ";
//   }
//   for (let k = i; k < 5; k++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// To create
//     *
//    **
//   ***
//  ****
// *****
// let s = "";
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5 - i - 1; j++) {
//     s += " ";
//   }
//   for (let k = 0; k <= i; k++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// To create
// **********
// *         *
// *         *
// *         *
// **********
// let s = "";
// for (let i = 0; i < 6; i++) {
//   for (let j = 0; j < 10; j++) {
//     if (i === 0 || i === 5 || j === 0 || j === 9) {
//       s += "*";
//     } else {
//       s += " ";
//     }
//   }
//   s += "\n";
// }
// console.log(s);

// To create
// *
// **
// ***
// ****
// *****
// ******
// *****
// ****
// ***
// **
// *
// let s = "";
// for (let i = 0; i < 6; i++) {
//   for (let j = 0; j <= i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// for (let i = 4; i >= 0; i--) {
//   for (let j = 0; j <= i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// To create
//     *
//    ***
//   *****
//  *******
// *********
// let s = '';
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5 - i - 1; j++) {
//     s += ' ';
//   }
//   for (let k = 0; k <= i * 2; k++) {
//     s += '*';
//   }
//   s += '\n';
// }
// console.log(s);

// To create
// *********
//  *******
//   *****
//    ***
//     *
// let s = '';
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < i; j++) {
//     s += ' ';
//   }
//   for (let k = 0; k < (5 - i) * 2 - 1; k++) {
//     s += '*';
//   }
//   s += '\n';
// }
// console.log(s);

// To create
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// let s = "";
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5 - i - 1; j++) {
//     s += " ";
//   }
//   for (let k = 0; k <= i * 2; k++) {
//     s += "*";
//   }
//   s += "\n";
// }
// for (let i = 3; i >= 0; i--) {
//   for (let j = 0; j < 5 - i - 1; j++) {
//     s += " ";
//   }
//   for (let k = 0; k <= i * 2; k++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// To create
// # # # # #
//   # # # # #
// # # # # #
//   # # # # #
// # # # # #
//   # # # # #
// # # # # #
//   # # # # #
// # # # # #
// let s = "";
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     if ((i + j) % 2 === 0) {
//       s += "#";
//     } else {
//       s += " ";
//     }
//   }
//   s += "\n";
// }
// console.log(s);

// To create
// Triangle pascal
//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1
let numRows = 5;
let pascalTriangle = [];

for (let i = 0; i < numRows; i++) {
  pascalTriangle[i] = [];
  pascalTriangle[i][0] = 1;

  for (let j = 1; j < i; j++) {
    pascalTriangle[i][j] =
      pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
  }

  pascalTriangle[i][i] = 1;
}

let s = "";
for (let i = 0; i < numRows; i++) {
  for (let j = 0; j < numRows - i - 1; j++) {
    s += " ";
  }
  for (let j = 0; j <= i; j++) {
    s += pascalTriangle[i][j] + " ";
  }
  s += "\n";
}

console.log(s);
