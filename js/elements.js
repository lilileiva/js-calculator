import { changeTheme, getResult, cleanScreen, onKeyPress, clickedButton } from "./functions.js"


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

// calculator buttons
const btnTheme = document.createElement('button')
btnTheme.setAttribute("id", "btnTheme")
btnTheme.className = 'darkBtnTheme'
btnTheme.textContent = 'Dark mode'
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

// keys press listener
document.addEventListener('keypress', (e) => onKeyPress(e))

// append buttons to the calculator
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


export { result, operation }