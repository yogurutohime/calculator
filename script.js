function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(a, b, operator) {
    console.log(`a = ${a}`)
    console.log(`b = ${b}`)
    console.log(`operator = ${operator}`)
    console.log(operator(+a, +b))
    return operator(+a, +b)
}

let a = null
let b = null
let operator = null

screen = document.querySelector(".screen")

button = document.querySelector(".container")

button.addEventListener("click", e => {
    if(e.target.classList.contains('button')) {
        if(e.target.classList.contains('number')) {
            console.log(e.target.textContent)
            if (b == null && operator != null) {
                b = e.target.textContent
                screen.textContent = b
            } else if(b != null && operator != null) {
                if (b === 0 || b == '') {
                    b = e.target.textContent
                }else {
                    if (e.target.textContent == '.') {
                        if (!b.includes('.')) {
                            b += e.target.textContent
                        }
                    }else {
                        b += e.target.textContent
                    }
                }
                screen.textContent = b
            } else if(operator == null) {
                if (a == null || a == "0") {
                    a = e.target.textContent
                } else if (a != null) {
                    if (e.target.textContent == '.') {
                        if (!a.includes('.')) {
                            a += e.target.textContent
                        }
                        }else {
                            a += e.target.textContent
                    }
                }
                screen.textContent = a
            }
        } else if(e.target.classList.contains('operator')) {
            if(operator == null) {
                if(e.target.textContent == "+") {
                    operator = add
                } else if(e.target.textContent == "-") {
                    operator = subtract
                } else if(e.target.textContent == "x") {
                    operator = multiply
                } else if(e.target.textContent == "÷") {
                    operator = divide
                }
            } else if(operator != null) {
                if (b == null) {
                    if(e.target.textContent == "+") {
                        operator = add
                    } else if(e.target.textContent == "-") {
                        operator = subtract
                    } else if(e.target.textContent == "x") {
                        operator = multiply
                    } else if(e.target.textContent == "÷") {
                        operator = divide
                    }
                } else if (b != null) {
                    a = operate(a, b, operator)
                    b = null
                }
            }
            
        } else if(e.target.classList.contains('equal')) {
            if (b != null && operator != null){
                screen.textContent = operate(a, b, operator)
                a = null
                b = null
                operator = null
            }
        } else if(e.target.classList.contains('delete')) {
            if (b != null) {
                if (b == null || b.length == 1) {
                    b = 0
                    console.log(b)
                    screen.textContent = ''
                } else if (b.length > 1) {
                    b = b.substring(0, b.length - 1)
                    console.log(b)
                    screen.textContent = b
                } 
            } else if (b == null && operator == null) {

                if (a == null ||a.length == 1) {
                    a = 0
                    console.log(a)
                    screen.textContent = ''
                } else if (a.length > 1) {
                    a = a.substring(0, a.length - 1)
                    console.log(a)
                    screen.textContent = a
                }
            }

        } else if(e.target.classList.contains('clear')) {
            a = null
            b = null
            operator = null
            screen.textContent = 0
        }
    }
    })