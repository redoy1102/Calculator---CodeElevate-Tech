let equalEventCounter = 0;

function setOperator(operator)
{
    let string = document.querySelector('input[name="display"]').value;
    let lastCharacter = string[(string.length) - 1];
    
    if (lastCharacter != operator) {
        document.querySelector('input[name="display"]').value += operator;
    }
}
function handleEqual(expression)
{
    document.querySelector('input[name="display"]').value = eval(expression);
    equalEventCounter++;
}
function AC()
{
    document.querySelector('input[name="display"]').value = '';
}
function numberPad(value)
{
    if (equalEventCounter != 0)
    {
        document.querySelector('input[name="display"]').value = ''; 
        document.querySelector('input[name="display"]').value += value;
        equalEventCounter = 0;
    }
    else {
        document.querySelector('input[name="display"]').value += value;
    }
}
