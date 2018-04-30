const fromTo = (start, end) => {
  function* frT() {
    while (start < end) {
      yield start++;
    }
  }
  const rs = frT();
  return function () {
    return rs.next().value;
  };
};
const index = fromTo(0, 3);
// console.log(index()); //0
// console.log(index()); //1
// console.log(index()); //2
// console.log(index()); //undefined
module.exports = fromTo;
