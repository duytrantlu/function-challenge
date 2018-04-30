const mul = args => args.reduce((e, r) => e * r);
const sae = [mul, 5, 11];
function exp(params) {
  const newArr = [];
  if (Array.isArray(params)) {
    params.filter((e) => {
      if (typeof e === 'number') {
        newArr.push(e);
      }
    });
    const rs = params[0](newArr);
    return rs;
  }
  return params;
}
// console.log(exp(sae)); // 55
// console.log(exp(42)); // 42
module.exports = { mul, exp };
