import { result, operation } from './elements.js'


let operationValue = "0"
let openParenthesis = false
let darkMode = true

const changeTheme = () => {
    if (darkMode == true) {
        container.className = "lightMode"
        calcBody.className = "lightCalcBody"
        btnTheme.className = "lightBtnTheme"
        btnTheme.textContent = 'Dark mode'
        darkMode = false
    } else {
        container.className = "darkMode"
        calcBody.className = "darkCalcBody"
        btnTheme.className = "darkBtnTheme"
        btnTheme.textContent = 'Light mode'
        darkMode = true
    }
}

const getResult = () => {
    if (operationValue.length > 1) {
        if (openParenthesis == true) {
            operationValue += ")"
            operation.textContent = operationValue
            openParenthesis = false
        }
        try {            
            const resultValue = eval(operationValue)
            result.textContent = resultValue
        } catch (error) {
            result.textContent = 'ERROR: Sintaxis incorrecta'
        }
    }
}

const cleanScreen = () => {
    operationValue = "0"
    operation.textContent = operationValue
    result.textContent = ""
    openParenthesis = false
}

let number_keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let math_symbols = ["+", "-", "*", "/", "."]

const onKeyPress = (e) => {    
    if (e.key in number_keys) operationValue == "0" ? operationValue = e.key : operationValue += e.key    
    if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/" || e.key== ".") operationValue += e.key
    if (e.key == "(" && openParenthesis == false) {        
        if (operationValue.slice(-1) in math_symbols) operationValue += "*"
        operationValue += e.key
        openParenthesis = true
    }
    if (e.key == ")" && (operationValue.slice(-1) != ("+" && "-" && "*" && "/" && ".")) && openParenthesis == true) {
        operationValue += e.key
        openParenthesis = false
    }
    if (e.key == "Enter" || e.key == "=") getResult()
    if (e.key == "c" || e.key == "C") cleanScreen()
    operation.textContent = operationValue
}

const clickedButton = (e) => {
    if (e.target.textContent in number_keys) operationValue == "0" ? operationValue = e.target.textContent : operationValue += e.target.textContent    
    if (e.target.textContent == "+" || e.target.textContent == "-" || e.target.textContent == "*" || e.target.textContent == "/" || e.target.textContent== ".") operationValue += e.target.textContent
    if (e.target.textContent == "(" && openParenthesis == false) {        
        if (operationValue.slice(-1) in math_symbols) operationValue += "*"
        operationValue += e.target.textContent
        openParenthesis = true
    }
    if (e.target.textContent == ")" && (operationValue.slice(-1) != ("+" && "-" && "*" && "/" && ".")) && openParenthesis == true) {
        operationValue += e.target.textContent
        openParenthesis = false
    }
    if (e.target.textContent == "Enter" || e.target.textContent == "=") getResult()
    if (e.target.textContent == "c" || e.target.textContent == "C") cleanScreen()
    operation.textContent = operationValue
}


export {changeTheme, getResult, cleanScreen, onKeyPress, clickedButton};