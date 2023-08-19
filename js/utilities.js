
function getInputValue(element){
    const inputField = document.getElementById(element);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}

function setOutputText(elementId, output){
    const setText = document.getElementById(elementId);
    setText.innerText = output;
}