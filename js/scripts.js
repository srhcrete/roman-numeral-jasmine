$(document).ready(function() {
  $('#romanForm').submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('#romanNum').val());
    numToSym(userInput);
  })
})
var result = '';
var romans = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
var decimal = ['1000', '500', '100', '50', '10', '5', '1']
function numToSym(num) {
  for (var i=0; i < romans.length; i++){
    while (num >= decimal[i]) {
      num -= decimal[i];
      result += romans[i];
    }
  }
  alert(result);
}
