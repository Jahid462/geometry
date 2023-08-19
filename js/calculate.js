document.getElementById('btn-triangel').addEventListener('click', function(){
    const base = getInputValue('base-field');
    const height = getInputValue('height-field');
    const total = 0.5 * base * height;
    if(isNaN(base) || isNaN(height)){
        alert('Invalid Number');
        return;
    }
    setOutputText('tri-output-field', total);
})
document.getElementById('btn-rectangel').addEventListener('click', function(){
    const width = getInputValue('width-field');
    const length = getInputValue('length-field');
    const total = width * length;
    if(isNaN(width) || isNaN(length)){
        alert('Invalid Number');
        return;
    }
    setOutputText('rect-output-field', total);
})
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const paraBase = getInputValue('para-base-field');
    const paraHeight = getInputValue('para-height-field');
    const total = paraBase * paraHeight;
    if(isNaN(paraBase) || isNaN(paraHeight)){
        alert('Invalid Number');
        return;
    }
    setOutputText('para-output-field', total);
})