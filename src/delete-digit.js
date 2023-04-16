const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let array = []
  n = n.toString()

  for(let i = 0; i < n.length; i++) {
    array[i] = n
    array[i] = array[i].split("")
    array[i].splice(i,1)
    array[i] = array[i].join("")
  }

  array = array.map((el) => Number(el))

  return Math.max(...array)
}

module.exports = {
  deleteDigit
};
