const Calculate = {
  sum(inputArray) {
    if (Array.isArray(inputArray)) {
      if (inputArray.length === 0) {
        return 0;
      }
      return inputArray.reduce((a, b) => a + b);
    }
    return null;
  },
};

module.exports = Calculate;
