import Greeting from "../Greetings";
import assert from "assert";
describe('Greeting class', () => {
    let greeting;
  
    beforeEach(() => {
      greeting = new Greeting();
    });
  
    describe('inputString method', () => {
      it('should return a trimmed and lowercase string', () => {
        assert.equal(greeting.inputString('  John  '), 'john');
      });
  
      it('should return an empty string for invalid input', () => {
        assert.equal(greeting.inputString(''), '');
        assert.equal(greeting.inputString(123), '');
        assert.equal(greeting.inputString(null), '');
      });
    });
  
    describe('greetedFunction method', () => {
      it('should return false for a new name', () => {
        assert.equal(greeting.greetedFunction('John'), false);
      });
  
      it('should return true for an already greeted name', () => {
        greeting.greetedFunction('John');
        assert.equal(greeting.greetedFunction('John'), true);
      });
    });
  
    describe('greetFunction method', () => {
      it('should return a greeting in the specified language', () => {
        assert.equal(greeting.greetFunction('John', 'English'), 'Hello john');
        assert.equal(greeting.greetFunction('John', 'Swati'), 'Sawubona john');
        assert.equal(greeting.greetFunction('John', 'Sotho'), 'Dumela john');
      });
  
      it('should return an empty string for invalid language', () => {
        assert.equal(greeting.greetFunction('John', 'Invalid'), '');
      });
    });
  
    describe('getCounter method', () => {
      it('should return the number of greetings', () => {
        assert.equal(greeting.getCounter(), 0);
        greeting.greetFunction('John', 'English');
        assert.equal(greeting.getCounter(), 1);
      });
    });
  
    describe('reset method', () => {
      it('should reset the counter and already greeted names', () => {
        greeting.greetFunction('John', 'English');
        greeting.reset();
        assert.equal(greeting.getCounter(), 0);
        assert.equal(greeting.greetedFunction('John'), false);
      });
    });
  });