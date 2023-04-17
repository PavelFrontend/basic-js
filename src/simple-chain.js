const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],

  getLength() {
    return this.array.length
  },
  addLink( value ) {
    if (value === "") {
      this.array.push("")
    } else {
      this.array.push("" + value)
    }
    return this
  },
  removeLink( position ) {
    if (typeof position != "number" || position < 1 || position > this.array.length) {
      this.array = []
      throw new Error("You can't remove incorrect link!")
    }
    this.array.splice(position-1,1)
    return this
  },
  reverseChain() {
    this.array = this.array.reverse()
    return this
  },
  finishChain() {
    let string
    this.array.forEach((val,index) => {
      if (index < this.array.length-1) {
        string += `( ${val} )~~`
      } else {
        string += `( ${val} )`
      }
    },"")

    this.array = []
    return string.replace("undefined","")
  }
};

module.exports = {
  chainMaker
};
