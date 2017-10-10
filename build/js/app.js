(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Romanator(number) {
  this.number = number;
}

var matrix = [
  ['M', 'MM', 'MMM'],
  ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
  ['X', 'XX', 'XXX', 'XV', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
  ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
];

Romanator.prototype.toRoman = function(arr) {
  var result = '';
  if (arr.length === 4) {
    result += matrix[0] [arr[0]-1];
    if (arr[1] != 0) {
      result += matrix[1] [arr[1]-1];
    }
    if (arr[2] != 0) {
      result += matrix[2] [arr[2]-1];
    }
    if (arr[3] != 0) {
      result += matrix[3] [arr[3]-1];
    }
  } else if (arr.length === 3) {
    result += matrix[1] [arr[0]-1];
    if (arr[1] != 0) {
      result += matrix[2] [arr[1]-1];
    }
    if (arr[2] != 0) {
      result += matrix[3] [arr[2]-1];
    }
  } else if (arr.length === 2) {
    result += matrix[2] [arr[0]-1];
    if (arr[1] != 0) {
      result += matrix[3] [arr[1]-1];
    }
  } else if (arr.length === 1) {
    result += matrix[3] [arr[0]-1];
  }
  return result;
};

exports.romanatorModule = Romanator;

},{}],2:[function(require,module,exports){
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

},{"./../js/romanator.js":1}]},{},[2]);
