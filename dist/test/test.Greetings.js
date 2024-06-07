"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Greetings_1 = __importDefault(require("../Greetings"));
const assert_1 = __importDefault(require("assert"));
describe('Greeting class', () => {
    let greeting;
    beforeEach(() => {
        greeting = new Greetings_1.default();
    });
    describe('inputString method', () => {
        it('should return a trimmed and lowercase string', () => {
            assert_1.default.equal(greeting.inputString('  John  '), 'john');
        });
        it('should return an empty string for invalid input', () => {
            assert_1.default.equal(greeting.inputString(''), '');
            assert_1.default.equal(greeting.inputString(123), '');
            assert_1.default.equal(greeting.inputString(null), '');
        });
    });
    describe('greetedFunction method', () => {
        it('should return false for a new name', () => {
            assert_1.default.equal(greeting.greetedFunction('John'), false);
        });
        it('should return true for an already greeted name', () => {
            greeting.greetedFunction('John');
            assert_1.default.equal(greeting.greetedFunction('John'), true);
        });
    });
    describe('greetFunction method', () => {
        it('should return a greeting in the specified language', () => {
            assert_1.default.equal(greeting.greetFunction('John', 'English'), 'Hello john');
            assert_1.default.equal(greeting.greetFunction('John', 'Swati'), 'Sawubona john');
            assert_1.default.equal(greeting.greetFunction('John', 'Sotho'), 'Dumela john');
        });
        it('should return an empty string for invalid language', () => {
            assert_1.default.equal(greeting.greetFunction('John', 'Invalid'), '');
        });
    });
    describe('getCounter method', () => {
        it('should return the number of greetings', () => {
            assert_1.default.equal(greeting.getCounter(), 0);
            greeting.greetFunction('John', 'English');
            assert_1.default.equal(greeting.getCounter(), 1);
        });
    });
    describe('reset method', () => {
        it('should reset the counter and already greeted names', () => {
            greeting.greetFunction('John', 'English');
            greeting.reset();
            assert_1.default.equal(greeting.getCounter(), 0);
            assert_1.default.equal(greeting.greetedFunction('John'), false);
        });
    });
});
