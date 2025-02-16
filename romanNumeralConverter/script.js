// Roman numeral converter page

// declare variables
const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');


// function to convert number to roman numeral
const convertToRoman = (num, result='') => {
    const reference = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    }

    if (num === 0) {
        return result;
    } else {
        for (ref in reference) {
            if (num >= ref) {
                return convertToRoman(num - ref, result + reference[ref]);
            }
        }
    }
};