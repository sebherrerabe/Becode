const importants = document.querySelectorAll(".important"),
  images = document.querySelectorAll("img"),
  paragrahps = document.querySelectorAll("p");

for (const important of importants) {
  important.title = "This is an important item";
}


for (const p of paragrahps) {
    console.log(p.innerText)
    if (p.classList.length === 0) {
        console.log("no class")
        p.style.color = `rgb(${Math.random()*256} ${Math.random()*256} ${Math.random()*256})`
    } else {
        console.log(p.classList[0])
    }
}