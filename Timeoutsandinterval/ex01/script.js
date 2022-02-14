const display = document.querySelector('.display'),
btn = document.querySelector('#btn'),
prout = ["p","r","o","u","t"];
let text = "",
i = 0

const writeLetter = () => {
    if (i === 0) {
        text = prout[i]
        display.innerHTML = text
    } else if (i === 5) {
        clearInterval(interval)
    } else {
        text = text + prout[i]
        display.innerHTML = text
    }
    i++
}


btn.addEventListener('click', () =>  {
    let interval = setInterval(writeLetter, 0500)
})