var Romanator = require('./../js/romanator.js').romanatorModule;


describe('Romanator', function() {

  it('returns a roman numberal of 35', function() {
    var number = new Romanator(['']);
    expect(number.toRoman(['3', '5'])).toEqual('XXXV');
  });


  it('returns a roman numberal of 999', function() {
    var number = new Romanator(['']);
    expect(number.toRoman(['9', '9', '9'])).toEqual('CMXCIX');
  });
});
