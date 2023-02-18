/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById('input-el')
const buttonEl = document.getElementById('button-el')
const lengthPEl = document.getElementById('length-p-el')
const volumePEl = document.getElementById('volume-p-el')
const massPEl = document.getElementById('mass-p-el')




buttonEl.addEventListener('click', function () {
    renderLength()
    renderVolume()
    renderMass()
})

function renderLength() {
    let feet = inputEl.value * 3.2808
    let meters = inputEl.value / 3.2808
    lengthPEl.innerText = `${inputEl.value} meters = ${feet.toFixed(3)} feet | ${inputEl.value} feet = ${meters.toFixed(3)} meters`
}

function renderVolume() {
    let gallons = inputEl.value * 0.264172
    let litres = inputEl.value / 0.264172
    volumePEl.innerText = `${inputEl.value} litres = ${gallons.toFixed(3)} gallons | ${inputEl.value} gallons = ${litres.toFixed(3)} litres`
}

function renderMass() {
    let pounds = inputEl.value * 2.2046
    let kilo = inputEl.value / 2.2046
    massPEl.innerText = `${inputEl.value} kilos = ${pounds.toFixed(3)} pounds | ${inputEl.value} pounds = ${kilo.toFixed(3)} kilos`
}