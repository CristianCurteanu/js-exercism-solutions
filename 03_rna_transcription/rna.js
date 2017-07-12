var DNA = (function() {
  var dictionary = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  }

  return {
    toRna: function(nucleotide) {
      var result = '';
      for (i = 0; i < nucleotide.length; i++) {
        if (dictionary.hasOwnProperty(nucleotide[i])) {
          result += dictionary[nucleotide[i]]
        } else {
          throw new Error('Invalid input')
        }
      }
      return result;
    }
  }
})

module.exports = DNA;
