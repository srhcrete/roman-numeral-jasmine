$(document).ready(function() {
  $('#romanForm').submit(function(event) {
    event.preventDefault();
    var userInput = $('#romanNum').val();
    var userNum = userInput.split('');
    toRoman(userNum);
  });
});
var matrix = [
  ['M', 'MM', 'MMM'],
  ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
  ['X', 'XX', 'XXX', 'XV', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
  ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
];

function toRoman(arr) {
  var result = '';
  if (arr.length === 4) {
    result += matrix[0] [arr[0]-1];
    if (arr[1] != '0') {
      result += matrix[1] [arr[1]-1];
    }
    if (arr[2] != '0') {
      result += matrix[2] [arr[2]-1];
    }
    if (arr[3] != '0') {
      result += matrix[3] [arr[3]-1];
    }
  } else if (arr.length === 3) {
    result += matrix[1] [arr[0]-1];
    if (arr[1] != '0') {
      result += matrix[2] [arr[1]-1];
    }
    if (arr[2] != '0') {
      result += matrix[3] [arr[2]-1];
    }
  } else if (arr.length === 2) {
    result += matrix[2] [arr[0]-1];
    if (arr[1] != '0') {
      result += matrix[3] [arr[1]-1];
    }
  } else if (arr.length === 1) {
    result += matrix[3] [arr[0]-1];
  }
  alert(result);
}
