const docUl = document.body.children[1],
  docUlLis = docUl.children;

const pressR = (e) => {
  if (e.code === "KeyR") {
    for (
      let i = parseInt(Math.random() * docUlLis.length);
      i < docUlLis.length;
      i++
    ) {
      const li = docUlLis[i];
      docUl.prepend(li);
      for (const li1 of docUlLis) {
        if (li1.innerText === "Fast and Furious") {
          docUl.prepend(li1);
        }
      }
    }
  }
};

const pressD = (e) => {
  if (e.code === "KeyD") {
    for (let i = 0; i < docUlLis.length; i++) {
      const li = docUlLis[i];
      console.log(li.innerText);
      if (li.innerText === "Fast and Furious") {
        newLi = document.createElement("li");
        newLi.classList.add = li.className;
        newLi.innerText = li.innerText;
      }
    }
    docUl.prepend(newLi);
    newLi.addEventListener("click", () => {
      alert(
        "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
      );
    });
  }
};

document.body.addEventListener("keyup", pressD);
document.body.addEventListener("keyup", pressR);

for (const li of docUlLis) {
  if (li.nodeType === 1) {
    if (li.innerText === "Fast and Furious") {
      docUl.prepend(li);
      li.classList.add("important");
      li.addEventListener("click", () => {
        alert(
          "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
        );
      });
    } else {
      li.addEventListener("click", () => {
        alert(li.innerText);
      });
    }
  }
  for (let i = 0; i < docUlLis.length; i++) {
    const scndLi = docUlLis[i];
    if (li.isEqualNode(scndLi) && li != scndLi) {
      docUl.removeChild(docUlLis[i]);
    }
  }
}

let newDiv = document.createElement("div"),
  newSelect = document.createElement("select"),
  option1 = document.createElement("option"),
  option2 = document.createElement("option"),
  h2 = document.body.children[0];

option1.innerText = "important franchises";
option2.innerText = "normal franchises";

newSelect.appendChild(option2);
newSelect.appendChild(option1);
newDiv.appendChild(newSelect);

document.body.prepend(newDiv);
document.body.prepend(h2);

newSelect.addEventListener("change", () => {
  for (const li of docUlLis) {
    if (newSelect.value === option1.value) {
      if (li.className === "important") {
        li.style.visibility = "visible";
      } else {
        li.style.visibility = "hidden";
      }
    } else {
      if (li.className === "important") {
        li.style.visibility = "hidden";
      } else {
        li.style.visibility = "visible";
      }
    }
  }
});
