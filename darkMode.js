const container = document.querySelector('.container')
const conversionBox1 = document.querySelector('.conversionBox-1')
const conversionBox2 = document.querySelector('.conversionBox-2')
const conversionBox3 = document.querySelector('.conversionBox-3')
const conversionPEL1 = document.querySelector('.conversion-p-el-1')
const conversionPEL2 = document.querySelector('.conversion-p-el-2')
const conversionPEL3 = document.querySelector('.conversion-p-el-3')
const conversionTitle1 = document.querySelector('.conversionTitle-1')
const conversionTitle2 = document.querySelector('.conversionTitle-2')
const conversionTitle3 = document.querySelector('.conversionTitle-3')



let darkMode = localStorage.getItem('darkMode')
let darkModetoggle = document.getElementById('symbol-el')


const enableDarkMode = () => {
    container.classList.add('darkmode-container')
    conversionBox1.classList.add('darkmode-conversionBox')
    conversionBox2.classList.add('darkmode-conversionBox')
    conversionBox3.classList.add('darkmode-conversionBox')
    conversionPEL1.classList.add('darkmode-conversion-p-el')
    conversionPEL2.classList.add('darkmode-conversion-p-el')
    conversionPEL3.classList.add('darkmode-conversion-p-el')
    conversionTitle1.classList.add('darkmode-conversionTitle')
    conversionTitle2.classList.add('darkmode-conversionTitle')
    conversionTitle3.classList.add('darkmode-conversionTitle')
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    container.classList.remove('darkmode-container')
    conversionBox1.classList.remove('darkmode-conversionBox')
    conversionBox2.classList.remove('darkmode-conversionBox')
    conversionBox3.classList.remove('darkmode-conversionBox')
    conversionPEL1.classList.remove('darkmode-conversion-p-el')
    conversionPEL2.classList.remove('darkmode-conversion-p-el')
    conversionPEL3.classList.remove('darkmode-conversion-p-el')
    conversionTitle1.classList.remove('darkmode-conversionTitle')
    conversionTitle2.classList.remove('darkmode-conversionTitle')
    conversionTitle3.classList.remove('darkmode-conversionTitle')
    localStorage.removeItem('darkMode')
}

if (darkMode === 'enabled') {
    enableDarkMode()
}

darkModetoggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'enabled') {
        enableDarkMode()
    } else {
        disableDarkMode()
    }
})