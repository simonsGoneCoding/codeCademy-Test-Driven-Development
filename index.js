const Calculate = {
  sum(inputArray) {
    if (Array.isArray(inputArray)) {
      return inputArray.reduce((a, b) => a + b);
    }
    return null;
  },
};

module.exports = Calculate;
