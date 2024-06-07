"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Greeting {
    // Constructor
    constructor() {
        // Store already greeted names and greeting counter
        this.alreadyGreeted = {};
        this.greetingsCounter = 0;
    }
    // Function to validate and transform input string
    inputString(name) {
        const regex = /^[a-zA-Z]+$/i;
        return typeof name === 'string' && name.trim() !== '' && regex.test(name.trim()) ? name.toLowerCase() : '';
    }
    // Function to check if a name has already been greeted
    greetedFunction(name) {
        const transformedName = this.inputString(name);
        if (!this.alreadyGreeted[transformedName]) {
            this.alreadyGreeted[transformedName] = true;
            this.greetingsCounter++;
            return false;
        }
        return true;
    }
    // Function to greet a name in a specific language
    greetFunction(name, language) {
        const transformedName = this.inputString(name);
        if (language === 'Swati') {
            return 'Sawubona ' + transformedName;
        }
        else if (language === 'English') {
            return 'Hello ' + transformedName;
        }
        else if (language === 'Sotho') {
            return 'Dumela ' + transformedName;
        }
        else {
            return "";
        }
    }
    // Function to get the greeting counter
    getCounter() {
        return this.greetingsCounter;
    }
    // Function to reset the greeting counter and already greeted names
    reset() {
        this.greetingsCounter = 0;
        this.alreadyGreeted = {};
    }
}
exports.default = Greeting;
