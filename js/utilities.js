
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
function areaCalculation(areaType, area){
    const areaCalculationId = document.getElementById('area-calculation');
    const p = document.createElement('p');
    const count = areaCalculationId.childElementCount
    p.innerHTML = `${count + 1}. ${areaType} ${area} <span class="ml-5">CM<sup>2</sup></span> <button class="btn-success btn btn-sm ml-5">Convert</button>`;
    areaCalculationId.appendChild(p);
}