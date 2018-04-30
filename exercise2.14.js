const from = require('./exercise2.13');

const to = (fn, params) => {
  let variable = fn();
  function* toFrom() {
    while (variable < params) {
      yield variable++;
    }
  }
  const rs = toFrom();
  return function () {
    return rs.next().value;
  };
};
const index = to(from(1), 3);
// console.log(index()); //1
// console.log(index()); //2
// console.log(index()); //undefined
// console.log(index()); //undefined
module.exports = to;
