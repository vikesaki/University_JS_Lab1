let inputString = prompt('Enter a string');
let stringArray = inputString.split(/(\s+)/);
let newString = "";
for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length%2 !== 0) {
        let stringLength = stringArray[i].length;
        for (let j = 0; j < stringLength; j++)
            if (j != ((stringLength + 1) / 2) - 1)
                newString += stringArray[i].charAt(j);
    }
    else
        newString += stringArray[i];
    newString += " ";
}

document.write('<p>String before editing = ' + inputString + '</p>');
document.write('<p>String after editing = ' + newString + '</p>');

