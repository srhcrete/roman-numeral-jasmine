$(document).ready(function() {
  $('#romanForm').submit(function(event) {
    event.preventDefault();
    var userInput = $('#romanNum').val();
    var userNum = userInput.split('');
    var parsed = parseUserNum(userNum);
    alert(parsed);
  })
})
var result = '';
var matrix = [
  ['M', 'MM', 'MMM'],
  ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
  ['X', 'XX', 'XXX', 'XV', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
  ['I', 'II', 'III', 'IV', 'VI', 'VII', 'VIII', 'IX']
];

function parseUserNum(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
  }
  return arr;
}














// var romans = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
// var decimal = ['1000', '500', '100', '50', '10', '5', '1']
// function numToSym(num) {
//   for (var i=0; i < romans.length; i++){
//     while (num >= decimal[i]) {
//       num -= decimal[i];
//       result += romans[i];
//     }
//   }
//   alert(result);
// }
