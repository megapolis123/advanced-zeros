module.exports = function getZerosCount(number, base) {
  // your implementation
  var result = [];
  let factor;
  let count;
  for (let i = 2; i <= base || base > 1; i++)
    if (base % i == 0) {
      base /= i;
      div = 1;
      while (base % i == 0) {
        base /= i;
        div++;
      }
      count = 0;
      factor = number;
      while (factor > 0) {
        factor = Math.floor(factor / i);
        count += factor;
      }
      result.push(Math.floor(count / div));
    }
  return Math.min(...result);
}