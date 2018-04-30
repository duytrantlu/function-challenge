function identifyf(agrs) {
  return function () {
    return agrs;
  };
}

const four = identifyf(4);
console.log(four()); // 4
module.exports = identifyf;
