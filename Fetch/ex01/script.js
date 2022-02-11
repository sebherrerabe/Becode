const button = document.querySelector("#button");

const ul = document.createElement("ul");

document.body.appendChild(ul);

const rules = () => {
  fetch("becode.json")
    .then((response) => response.json())
    .then((data) => {
        for (const rule of data) {
            const li = document.createElement('li')
            li.innerText = rule
            ul.appendChild(li)
        }
    })
    .catch((error) => {
      alert("error", error);
    });
};

button.addEventListener("click", () => {
  rules();
});
