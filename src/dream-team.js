const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
  if (!Array.isArray(array)) {
    return false;
  } 
  let name = '';
  array = array.filter((elem) => typeof elem == "string").map((elem) => {
    return elem = elem.trim().toUpperCase()
  }).sort().forEach((elem) => {
    name += elem[0]
  })
  return name.toUpperCase()
}

module.exports = {
  createDreamTeam
};
