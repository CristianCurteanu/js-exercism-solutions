module.exports = function(date) {
  this.initialTime = date.getTime();

  this.date = function() {
    return new Date(this.initialTime + 1000000000000)
  }
}