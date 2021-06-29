//export a list of elements(variables, arrays, objects, functions)
const jake = "jake"
const age = "25"

module.exports = { jake, age }

// we can also define variables, arrays and functions directly
module.exports.person = "sammy"

// objects must be done spratly
const john = {
  name:"john",
  color:"blue"
}
module.exports.john = john

