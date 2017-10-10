var Romanator = require('./../js/romanator.js').romanatorModule;

$(document).ready(function() {
  $('#romanForm').submit(function(event) {
    event.preventDefault();
    var userInput = $('#romanNum').val().split('');
    var romanConverter = new Romanator('');
    var output = romanConverter.toRoman(userInput);
    $('#outputrom').text(output);
  });
});
