const app = document.querySelector('#app')
const container = document.createElement('div')
container.setAttribute("id", "container")
container.className = "darkMode"
app.appendChild(container)

const calcBody = document.createElement('div')
calcBody.setAttribute("id", "calcBody")
calcBody.className = "darkCalcBody"
container.appendChild(calcBody)

const title = document.createElement('div')
title.className = "title"
title.textContent = "CALCULATOR"
calcBody.appendChild(title)

const titleText = document.createElement('div')
titleText.className = "titleText"

const screen = document.createElement('div')
screen.className = "screen"
calcBody.appendChild(screen)

const operation = document.createElement('div')
screen.setAttribute("id", "operation")
operation.textContent = "0"
screen.appendChild(operation)

const result = document.createElement('div')
result.setAttribute("id", "result")
result.className = "result"
screen.appendChild(result)

const keysBody = document.createElement('div')
keysBody.className = 'keysBody'
calcBody.appendChild(keysBody)

const btnTheme = document.createElement('button')
btnTheme.setAttribute("id", "btnTheme")
btnTheme.className = 'darkBtnTheme'
btnTheme.textContent = 'Dark mode'

let operationValue = "0"
let openParenthesis = false

let darkMode = true
const changeTheme = () => {    
    darkMode == true ? darkMode = false : darkMode = true
    if (darkMode == true) {
        container.className = "lightMode"
        calcBody.className = "lightCalcBody"
        btnTheme.className = "lightBtnTheme"
        btnTheme.textContent = 'Dark mode'
    } else {
        container.className = "darkMode"
        calcBody.className = "darkCalcBody"
        btnTheme.className = "darkBtnTheme"
        btnTheme.textContent = 'Light mode'
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
            console.log(operationValue)
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
}

let number_keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let symbol_keys = ["+", "-", "*", "/", "(", ")", "."]

const onKeyPress = (e) => {
    valid_keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    if (e.key in number_keys) operationValue == "0" ? operationValue = e.key : operationValue += e.key
    if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/" || e.key== ".") operationValue += e.key
    if (e.key == "(" && openParenthesis == false) {
        if (operationValue.slice(-1) != ("+" && "-" && "*" && "/" && ".")) operationValue += "*"
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
    if (e.target.id == "(" && openParenthesis == false) {
        if (operationValue.slice(-1) != ("+" && "-" && "*" && "/" && ",")) operationValue += "*"
        operationValue += e.target.id
        openParenthesis = true
    }
    if (e.target.id == ")" && (operationValue.slice(-1) != ("+" && "-" && "*" && "/" && ",")) && openParenthesis == true) {
        operationValue += e.target.id
        openParenthesis = false
    }
    if (e.target.id == "Enter" || e.target.id == "=") getResult()
    if (e.target.id == "c" || e.target.id == "C") cleanScreen()
    operation.textContent = operationValue
}

// calculator buttons
btnTheme.addEventListener('click', () => changeTheme())
container.appendChild(btnTheme)

const bntOne = document.createElement('button')
bntOne.className = "btns"
bntOne.textContent = "1"
bntOne.addEventListener('click', (e) => clickedButton(e))

const bntTwo = document.createElement('button')
bntTwo.className = "btns"
bntTwo.textContent = "2"
bntTwo.addEventListener('click', (e) => clickedButton(e))

const bntThree = document.createElement('button')
bntThree.className = "btns"
bntThree.textContent = "3"
bntThree.addEventListener('click', (e) => clickedButton(e))

const bntFour = document.createElement('button')
bntFour.className = "btns"
bntFour.textContent = "4"
bntFour.addEventListener('click', (e) => clickedButton(e))

const bntFive = document.createElement('button')
bntFive.className = "btns"
bntFive.textContent = "5"
bntFive.addEventListener('click', (e) => clickedButton(e))

const bntSix = document.createElement('button')
bntSix.className = "btns"
bntSix.textContent = "6"
bntSix.addEventListener('click', (e) => clickedButton(e))

const bntSeven = document.createElement('button')
bntSeven.className = "btns"
bntSeven.textContent = "7"
bntSeven.addEventListener('click', (e) => clickedButton(e))

const bntEight = document.createElement('button')
bntEight.className = "btns"
bntEight.textContent = "8"
bntEight.addEventListener('click', (e) => clickedButton(e))

const bntNine = document.createElement('button')
bntNine.className = "btns"
bntNine.textContent = "9"
bntNine.addEventListener('click', (e) => clickedButton(e))

const bntZero = document.createElement('button')
bntZero.className = "btns"
bntZero.textContent = "0"
bntZero.addEventListener('click', (e) => clickedButton(e))

const bntPlus = document.createElement('button')
bntPlus.className = "btnRed"
bntPlus.textContent = "+"
bntPlus.addEventListener('click', (e) => clickedButton(e))

const bntMinus = document.createElement('button')
bntMinus.className = "btns"
bntMinus.textContent = "-"
bntMinus.addEventListener('click', (e) => clickedButton(e))

const bntProduct = document.createElement('button')
bntProduct.className = "btns"
bntProduct.textContent = "*"
bntProduct.addEventListener('click', (e) => clickedButton(e))

const bntDivide = document.createElement('button')
bntDivide.className = "btns"
bntDivide.textContent = "/"
bntDivide.addEventListener('click', (e) => clickedButton(e))

const bntEqual = document.createElement('button')
bntEqual.className = "btns"
bntEqual.textContent = "="
bntEqual.addEventListener('click', getResult)

const btnDot = document.createElement('button')
btnDot.className = "btns"
btnDot.textContent = "."
btnDot.addEventListener('click', (e) => clickedButton(e))

const bntParenthesisOpen = document.createElement('button')
bntParenthesisOpen.className = "btns"
bntParenthesisOpen.textContent = "("
bntParenthesisOpen.addEventListener('click', (e) => clickedButton(e))

const bntParenthesisClose = document.createElement('button')
bntParenthesisClose.className = "btns"
bntParenthesisClose.textContent = ")"
bntParenthesisClose.addEventListener('click', (e) => clickedButton(e))

const bntClean = document.createElement('button')
bntClean.className = "btnRed"
bntClean.textContent = "C"
bntClean.addEventListener('click', cleanScreen)

document.addEventListener('keypress', (e) => onKeyPress(e))


keysBody.appendChild(bntClean)
keysBody.appendChild(bntDivide)
keysBody.appendChild(bntParenthesisOpen)
keysBody.appendChild(bntParenthesisClose)
keysBody.appendChild(bntSeven)
keysBody.appendChild(bntEight)
keysBody.appendChild(bntNine)
keysBody.appendChild(bntProduct)
keysBody.appendChild(bntFour)
keysBody.appendChild(bntFive)
keysBody.appendChild(bntSix)
keysBody.appendChild(bntMinus)
keysBody.appendChild(bntOne)
keysBody.appendChild(bntTwo)
keysBody.appendChild(bntThree)
keysBody.appendChild(bntPlus)
keysBody.appendChild(btnDot)
keysBody.appendChild(bntZero)
keysBody.appendChild(bntEqual)
