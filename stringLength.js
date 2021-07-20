function stringLength(string) {
  if (string.length < 1 || string.length > 10) {
    return false;
  } else if (string.length > 1 || string.length <= 10) {
    return true;
  }
}

module.exports = stringLength;
