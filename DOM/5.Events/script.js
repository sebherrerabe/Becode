const _initTime = Date.now(),
  displayedSquareWrapper = document.querySelector(".displayedsquare-wrapper"),
  mainSection = document.querySelector("main"),
  thirdSection = mainSection.children[2],
  ul = thirdSection.children[1],
  docBody = document.body,
  actionsquares = document.querySelectorAll(".actionsquare");

function getElapsedTime() {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
}

const actionLogSpace = (e) => {
  const newLi = document.createElement("li");
  newLi.innerText = `[${getElapsedTime()}] The key ${e.code} was pressed`;
  ul.appendChild(newLi);
};
const actionLogSquare = (square) => {
  const newLi = document.createElement("li");
  newLi.innerText = `[${getElapsedTime()}] Created a new ${
    square.target.classList[1]
  } square`;
  ul.appendChild(newLi);
};

const changeBodyBg = () => {
  docBody.style.backgroundColor = `rgb(${Math.random() * 256} ${
    Math.random() * 256
  } ${Math.random() * 256})`;
};

const createSquare = (square) => {
  const newDiv = document.createElement("div");
  newDiv.className = "displayedsquare";
  let squareClassName = square.target.classList[1];
  newDiv.classList.add(squareClassName);
  displayedSquareWrapper.appendChild(newDiv);
};

const clickOnSquare = (e) => {
  createSquare(e);
  actionLogSquare(e);
  let children = displayedSquareWrapper.children;
  const alertClass = (e) => {
    alert(e.target.classList[1]);
  };
  for (const newSquare of children) {
    newSquare.addEventListener("click", alertClass);
  }
};

console.log(getElapsedTime());

for (let actionsquare of actionsquares) {
  actionsquare.addEventListener("click", clickOnSquare);
}

const pressL = (e) => {
  if (e.code === "KeyL") {
    ul.innerHTML = "";
  }
};

const pressS = (e) => {
  if (e.code === "KeyS") {
    displayedSquareWrapper.innerHTML = "";
  }
};

const pressSpace = (e) => {
  if (e.code === "Space") {
    changeBodyBg();
    actionLogSpace(e);
  }
};

docBody.addEventListener("keyup", pressSpace);

document.addEventListener("keyup", pressL);

document.addEventListener("keyup", pressS);
