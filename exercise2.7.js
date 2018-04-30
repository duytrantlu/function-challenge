const { add, sub, mul } = require('./exercise2.2');

const inc = x => add(1, x);
const inc1 = fn => add(1, fn);
console.log(inc(5)); // 6
console.log(inc1(inc(5))); // 7
module.exports = { inc, inc1 };
