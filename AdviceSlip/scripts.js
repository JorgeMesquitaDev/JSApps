const resultDiv = document.querySelector('#results')
const resultBtn = document.querySelector('#getData')

resultBtn.addEventListener('click', () => {
    getAdvice()
})

window.onload = () => {
    getAdvice()
}

function getAdvice() {

    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json()
    }).then(adviceData => {
        const Adviceobj = adviceData.slip
        resultDiv.innerHTML = `<p>${Adviceobj.advice}</p>`
    }).catch(error => {
        console.log(error)
    })
}