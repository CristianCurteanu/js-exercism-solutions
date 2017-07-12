var Bob = (function(){
  var interaction = [
    {
      condition: function(question) {
        return question.toUpperCase() === question && /[A-Z]/.test(question)
      },
      answer: 'Whoa, chill out!'
    },
    {
      condition: function(question) {
        return /\?\s*$/.test(question)
      },
      answer: 'Sure.'
    },
    {
      condition: function(question) {
        return /^\s*$/.test(question)
      },
      answer: 'Fine. Be that way!'
    }
  ]

  return {
    hey: function(affirmation) {
      for (var i = 0; i < interaction.length; i++) {
        if (interaction[i].condition(affirmation)) {
          return interaction[i].answer;
        }
      }
      return 'Whatever.';
    }
  }
})

module.exports = Bob