// Roman numeral converter page

// declare variables
const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');


// function to convert number to roman numeral
const convertToRoman = (num, result='') => {
    const reference = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ]

    if (num === 0) {
        return result;
    } else {
        for (const [value, numeral] of reference) {
            if (num >= value) {
                return convertToRoman(num - value, result + numeral);
            }
        }
    }
};

const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);
  
    if (!numberInput.value || isNaN(inputInt)) {
        output.classList.toggle('hidden');
        output.textContent = "Please enter a valid number";
        return;
    } else if (inputInt < 1) {
        output.classList.toggle('hidden');
        output.textContent = "Please enter a number greater than or equal to 1";
        return;
    } else if (inputInt > 3999) {
        output.classList.toggle('hidden');
        output.textContent = "Please enter a number less than or equal to 3999";
        return;
    } else {
        output.classList.toggle('hidden');
        output.textContent = convertToRoman(inputInt);
    }
  };

// event listener
convertBtn.addEventListener('click', checkUserInput);
numberInput.addEventListener('keydown', (e) => {
    
    if (e.key === 'Enter') {
        e.preventDefault();
        checkUserInput();
    }
});