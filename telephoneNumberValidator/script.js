const input = document.getElementById('user-input');
const buttonCheck = document.getElementById('check-btn');
const buttonClear = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const validatePhoneNumber = () => {
    const regex = /^(?:1[\s-]?)?(?:\(\s*\d{3}\s*\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    if (input.value === '') {
        alert("Please provide a phone number");
        return;
      } else {
            const pTag = document.createElement('p');
            pTag.className = 'results-text';
            regex.test(input.value)
                ? (pTag.style.color = '#00471b')
                : (pTag.style.color = '#4d3800');
            pTag.appendChild(
                document.createTextNode(
                    `${regex.test(input.value) ? 'Valid' : 'Invalid'} US number: ${input.value}`
                )
            );
            resultsDiv.appendChild(pTag);
      }
}

buttonCheck.addEventListener('click', () => {
    resultsDiv.textContent = '';
    validatePhoneNumber();
    input.value = '';
});
buttonClear.addEventListener('click', () => {
    input.value = '';
    resultsDiv.textContent = '';
});

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        resultsDiv.textContent = '';
        validatePhoneNumber();
        input.value = '';
    }
}
);

