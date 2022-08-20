
// input field function called
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldvalue = parseInt(inputFieldValueString);
    // inputField.value = '';
    return inputFieldvalue;
}

// text field funvtion called
function getTextFieldById(textFieldId) {
    const textField = document.getElementById(textFieldId);
    const textFieldString = textField.innerText;
    const textFieldValue = parseInt(textFieldString);
    // textField.innerText = '';
    return textFieldValue;
}


// new text value set for (total Expenses)
function setTextValueById(textFieldId, newValue) {
    const textField = document.getElementById(textFieldId);
    textField.innerText = newValue;
}

