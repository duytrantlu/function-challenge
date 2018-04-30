const gensymff = (unary, seed) =>
  function (symbol) {
    let index = seed;
    return function () {
      index = unary(index);
      return `${symbol}${index}`;
    };
  };
const unary = (num) => {
  function* inc() {
    while (true) {
      yield num++;
    }
  }
  const rs = inc();
  rs.next().value;
  return rs.next().value;
};
const gensymf = gensymff(unary, 0);
const genG = gensymf('G');
const genH = gensymf('H');
console.log(genG()); // G1
console.log(genG()); // G2
console.log(genH()); // H1
console.log(genH()); // H2
module.exports = { gensymff, unary };
