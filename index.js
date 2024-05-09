// let added = false;
function setOperator(operator)
{
    let string = document.querySelector('input[name="display"]').value;
    let lastCharacter = string[(string.length) - 1];
    
    if (lastCharacter != operator) {
        document.querySelector('input[name="display"]').value += operator;
    }
}