var assert = require('assert'); //link in assertion library

var tested = require("../linearPoint.js")

describe('Tests for function one', () => {
    describe('Test Case 1 #fnOne()',() => {
        it('should return 6 with expected inputs', () => {
            assert.equal(tested(2,1,4), 6);
        });
    });

    describe('Test Case #fnOne()', () => {
        it('should return 4 with a zero value', () => {
            assert.equal(tested(2,0,4), 4);
        });
    });

    describe('Test Case #fnOne()', () => {
        it('should return 2 with a negative value', () => {
            assert.equal(tested(2,-1,4), 2);
        });
    });
});