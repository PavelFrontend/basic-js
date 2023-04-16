const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  if (options.separator == undefined) {
    options.separator = "+"
  }
  if (options.additionSeparator == undefined) {
    options.additionSeparator = "|"
  }

  let separator = "";
  separator = options.addition

  for(let i = 2; i <= options.additionRepeatTimes; i++) {
    separator += options.additionSeparator + options.addition
  }
  if (separator == undefined) {
    separator = ""
  }
 
  let string = str + separator;

  for(let i = 2; i <= options.repeatTimes; i++) {
    string += options.separator + str + separator
  }

  return string
}

module.exports = {
  repeater
};
