function sumOfOther(currentArray) {
  const arresult = [];
  const reducer = (accumulator, value) => accumulator + value;
  currentArray.forEach((elem, index, arr) => arresult[index] = arr.filter( (e,i) => i !==index ).reduce(reducer));
  return arresult;
}

module.exports = sumOfOther;