// Write a function that displays every second that has passed on the page since it was opened. 
// The display should be refreshed every second. If 60 seconds are elapsed,
//  write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.
const display = document.querySelector('.display')

let sec = 0,
check = 0,
sec2 = 0,
min = 0,
text = ""

const secs = () => {
    if (sec - 60 === check ) {
        check = sec
        min = parseInt(check / 60)
    } else if (min >= 1) {
        text = `${min} minute and ${sec2} seconds have passed`
        console.log(sec2)
        if (sec2 === 59) {
            sec2 = 0
        } else if (min > 1){
            text = `${min} minutes and ${sec2} seconds have passed`
        }
        sec2++
    }   else {
        text = `${sec} seconds have passed`
    }
    display.innerHTML = text
    sec++
}

window.addEventListener('load', () => {
    let interval = setInterval(secs, 1000)
})