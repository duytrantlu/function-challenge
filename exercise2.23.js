function fibonaccif(a, b) {
  function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  return function () {
    function* fibo() {
      while (true) {
        yield fibonacci(a++);
      }
    }
    const f = fibo();
    const rs = f.next().value;
    return rs;
  };
}

const fib = fibonaccif(0, 1); // must by fibonaccif(0, 1)
console.log(fib()); // 0
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
module.exports = fibonaccif;
