const docTitle = document.querySelector('title'),
docTitleContent = docTitle.innerText,
bodyChildren = document.body.children,
docBody = document.body

console.log(docTitleContent)
alert(docTitleContent)

docTitle.innerText = "Modifying the DOM"

console.log(bodyChildren)

for (const one of bodyChildren) {
    console.log(one.outerHTML)
}

docBody.style.backgroundColor = `rgb(${Math.random()*256} ${Math.random()*256} ${Math.random()*256}`
