const expect = require('chai').expect;
const fib = require('../fib');

describe('Fib function', function(){
    it('fib() should return 1 if index is less than 2', function(){
        expect(fib.fib(0)).to.equal(1);
    })
    it('fib() should return 1 if index is less than 2', function(){
        expect(fib.fib(1)).to.equal(1);
    })
    it('fib() should return 5 if index is 4', function(){
        expect(fib.fib(4)).to.equal(5);
    })
    it('fib() should return 21 if index is 7', function(){
        expect(fib.fib(7)).to.equal(21);
    })
})