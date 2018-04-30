// 1.1 EvaEvalutate the following code:
// function empty(o) {
//     o = null;
//   }

// var x = [];
// empty(x);
//   console.log(x); // []
// 1.2 Evalutate the following code:
function swap(a, b) {
  [a, b] = [b, a];
}

const x = 1;
const y = 2;

swap(x, y);
console.log(x); // 1
// 1.3 Recall unary function, binary function
// console.log(empty(x));
console.log(swap(x, y));
