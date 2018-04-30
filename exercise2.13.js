const from = (params) => {
  function* fr() {
    while (true) {
      yield params++;
    }
  }
  const result = fr();
  return function () {
    return result.next().value;
  };
};
const index = from(0);
// console.log(index()); //0
// console.log(index()); //1
// console.log(index()); //2

module.exports = from;
