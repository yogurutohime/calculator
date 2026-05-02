function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(a, b, operator) {
    return operator(+a, +b)
}

let a = 0
let b = null
let operator = null

button = document.querySelector(".container")

button.addEventListener("click", e => {
    if(e.target.classList.contains('button')) {
        if(e.target.classList.contains('number')) {
            console.log(e.target.textContent)
            if (b == null && operator != null) {
                b = e.target.textContent
            } else if(b != null && operator != null) {
                a = operate(a, b, operator)
                b = null
                operator = null
            } else if(operator == null) {
                a += e.target.textContent
            }
        }else if(e.target.classList.contains('operator')) {
            console.log(2)
        } else if(e.target.classList.contains('equal')) {
            console.log(3)
        }else if(e.target.classList.contains('delete')) {
            console.log(4)
        }else if(e.target.classList.contains('clear')) {
            console.log(5)
        }
    }
    })