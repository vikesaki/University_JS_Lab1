let max1 = 0;
let max2 = 0;
let inputCheck = false;

while (true) {
    let inputNumber = prompt('Enter a number (or non number to stop)!');
    if (isNaN(inputNumber ) || !isFinite(inputNumber))
        break;
    inputNumber = Number(inputNumber);

    if(inputCheck === false)
    {
        inputCheck = true;
        document.write('List of number:<br>');
    }
    else
    {
        document.write(', ');
    }

    document.write(inputNumber);

    if (inputNumber > max2) {
        if (inputNumber > max1) {
            max2 = max1;
            max1 = inputNumber;
        }
        else if (inputNumber > max2)
            max2 = inputNumber;
    }
}

if (inputCheck === false)
    document.write('<p>No number was entered</p>');
else {
    document.write('<br>');
    document.write('<p>2 biggest number in the list is: ' + max1 + ' and ' + max2 + '</p>');
}