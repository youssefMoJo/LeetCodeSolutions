// LeetCode Problem: https://leetcode.com/problems/roman-to-integer/submissions/1096227068/?envType=study-plan-v2&envId=top-interview-150

// Approach 1: Using Object Mapping
const romanToInt = function(s) {
    // Object mapping Roman numerals to their integer values
    const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    
    let result = 0;
    let prev = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const current = roman[s[i]];

        if (current >= prev) {
            result += current;
        } else {
            result -= current;
        }

        prev = current;
    }
    
    return result;
};

// Approach 2: Using Explicit Object with Indices
var romanToIntIndices = function(s) {
    // Object with explicit indices for Roman numerals
    const roman = {
        "I": {
            value: 1,
            index: 0
        },
        "V": {
            value: 5,
            index: 1
        },
        "X": {
            value: 10,
            index: 2
        },
        "L": {
            value: 50,
            index: 3
        },
        "C": {
            value: 100,
            index: 4
        },
        "D": {
            value: 500,
            index: 5
        },
        "M": {
            value: 1000,
            index: 6
        }
    };
    
    let romanInt = 0;
    let lastRomanVisited = null;
    let pointer = 0;
    
    while(pointer < s.length){
        if (roman[s[pointer]].index <= roman[lastRomanVisited]?.index || lastRomanVisited === null) {
            romanInt += roman[s[pointer]].value;
            lastRomanVisited = s[pointer];
        } else {
            romanInt += roman[s[pointer]].value - 2 * roman[lastRomanVisited].value;
        }
        pointer += 1;
    }
    
    return romanInt;
};
