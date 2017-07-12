var Pangram = function(phrase) {
  this.phrase = phrase || '';
  this.alphabet = 'zqxjkvbpygfwmucldrhsnioate';
}

Pangram.prototype.isPangram = function() {
    this.phrase = this.phrase.toLowerCase().replace(/[^a-z]/g,'')
    for (var i = 0; i < this.alphabet.length; i++)
        if (this.phrase.indexOf(this.alphabet[i]) < 0) {
          return false
        }
    return true;
};

module.exports = Pangram