function gensymf(symbol) {
  let i = 1;
  return function () {
    function* symb() {
      while (true) {
        yield i++;
      }
    }
    const fn = symb();
    const rs = fn.next().value;
    return `${symbol}${rs}`;
  };
}
const genG = gensymf('G');
const genH = gensymf('H');
console.log(genG()); // G1
console.log(genG()); // G2
console.log(genH()); // H1
console.log(genH()); // H2
module.exports = gensymf;
