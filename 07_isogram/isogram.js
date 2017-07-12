module.exports = function(word) {
  this.wordArray = word.toLowerCase()
                       .replace(/[-_ ]/g, '')
                       .split('')
                       .sort();

  this.isIsogram = function() {
    for (var i = 0; i < this.wordArray.length - 1; i++) {
      if (this.wordArray[i + 1] == this.wordArray[i]) {
        return false;
      }
    }
    return true;
  }
}