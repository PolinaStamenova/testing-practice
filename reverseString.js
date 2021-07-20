function reverseString(string) {
  let reverseString = string.split("").reverse().join("");
  return reverseString;
}

module.exports = reverseString;
