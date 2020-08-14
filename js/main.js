let count;
let span = document.querySelector('span')
let input = document.querySelector('input')
let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
console.log(input)

plus.addEventListener('click', userClick1);
minus.addEventListener('click', userClick2);

function init(){
    count = 0
    input.value = 1
    render()
}
init()

function render() {
    span.textContent = count;



}

function userClick1() {
    count += parseInt(input.value);

render()
}

function userClick2() {
    count -= parseInt(input.value);

render()
}
