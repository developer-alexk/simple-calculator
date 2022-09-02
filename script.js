// select all the buttons
const buttons = document.querySelectorAll('button');
// selecting the elements in the fields
const display = document.querySelector('.display');

// addding to button eventListener
buttons.forEach(function (button) {
    button.addEventListener('click', calculate);
});

// calculate function
function calculate(event) {
    // current clicked buttons value
    const clickedButtonValue = event.target.value;

    if (clickedButtonValue === '=') {
        // check if the display is not empty then only do the calculation
        if (display.value !== '') {
            // calculate and show the answer to display
            display.value = eval(display.value);
        }
    } else if (clickedButtonValue === 'AC') {
        // clear everything on display screen
        display.value = '';
    } else {
        // otherwise concatenate it to the display
        display.value += clickedButtonValue;
    }
}
