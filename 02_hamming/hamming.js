var Hamming = function(main, comparable) {
  this.main = main || null;
  this.comparable = comparable || null;
}

Hamming.prototype.compute = function(main, comparable) {
  if (main.length != comparable.length) {
    throw new Error('DNA strands must be of equal length.')
  }
  var counter = 0,
      nucleoLength = main.length,
      i = 0;
  for (i = 0; i < nucleoLength; i++) {
    if (main[i] != comparable[i]) {
      counter = counter + 1;
    }
  }
  return counter;
}

module.exports = Hamming