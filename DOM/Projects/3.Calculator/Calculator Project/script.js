const opList = [
  { symbol: "/" },
  { symbol: "*" },
  { symbol: "-" },
  { symbol: "+" },
  { symbol: "C" },
  { symbol: "=" },
];

const historyList = [{operation: "325 + 956", result: "596"}]

let main = document.querySelector("main"),
  container = document.createElement("div"),
  displayContainer = document.createElement('div'),
  display = document.createElement("div"),
  displayMemoryContainer = document.createElement("div"),
  btContainer = document.createElement("div"),
  nbContainer = document.createElement("div"),
  opContainer = document.createElement("div"),
  historyContainer = document.createElement("div"),
  topHistory = document.createElement('div'),
  historyContent = document.createElement('div'),
  historyul = document.createElement('ul'),
  titleHistory = document.createElement('h2')

  historyul.setAttribute('class', 'history-ul')
  historyContent.setAttribute('class', 'history-content')
  topHistory.setAttribute('class', 'top-history')
  historyContainer.setAttribute("class", "history-container")
  opContainer.setAttribute("class", "op-container");
  nbContainer.setAttribute("class", "nb-container");
  display.setAttribute("class", "display");
  displayContainer.setAttribute("class", "display-container")
  displayMemoryContainer.setAttribute("class", "display-memory")
  btContainer.setAttribute("class", "bt-container");
  container.setAttribute("class", "container");


let displayVar = "0",
  displayMemory = "",
  operation = "",
  isClicked = false,
  isEqual = false;

  const nbList = [7,8,9,4,5,6,1,2,3,0];

  const addHistory = (newOperation, newResult) => {
    let newObject = {operation: newOperation, result: newResult}
    historyList.push(newObject)
    let newP = document.createElement('p'),
    newh3 = document.createElement('h3'),
    newLi = document.createElement('li');
    newP.innerText = newObject.operation
    newh3.innerText = newObject.result
    newLi.appendChild(newP)
    newLi.appendChild(newh3)
    historyul.appendChild(newLi)
}



for (const i of nbList) {
    newBt = document.createElement("button");
  newBt.innerHTML = i;
  newBt.setAttribute('class','button')
  nbContainer.appendChild(newBt);
  newBt.addEventListener("click", () => {
    if (displayVar === "0") {
      displayVar = `${i}`;
    } else if (isEqual === true) {
        displayVar = `${i}`;
        displayMemory = ""
        displayMemoryContainer.innerHTML = displayMemory
        isEqual = false
    } 
    else {
      displayVar = displayVar + `${i}`;
    }
    display.innerHTML = displayVar;
  });
} 


for (let i = 0; i < opList.length; i++) {
    const element = opList[i];
    newBt = document.createElement("button");
  newBt.setAttribute('class','button special')
    newBt.innerHTML = opList[i].symbol;
    if (opList[i].symbol === "=") {
    nbContainer.appendChild(newBt);
    } else if (opList[i].symbol === "C") {
      nbContainer.appendChild(newBt);
    } else {      
    opContainer.appendChild(newBt);
    }
    newBt.addEventListener("click", () => {
      if (opList[i].symbol === "=") {
        operation = displayMemory + displayVar;
        displayMemory = displayMemory + " " + displayVar + " =";
        let myResult = Function(`return( ${operation} )`)();
        addHistory(displayMemory,myResult)
        displayVar = myResult;
        displayMemoryContainer.innerHTML = displayMemory;
        display.innerHTML = displayVar;
        isEqual = true
      } else if (opList[i].symbol === "C") {
          displayVar = "0"
          displayMemory = ""
          isClicked = false
          isEqual = false
          display.innerHTML = displayVar
          displayMemoryContainer.innerHTML = displayMemory
      } else if (isEqual === true) {
        displayMemory = displayVar + " " + opList[i].symbol;
        displayMemoryContainer.innerHTML = displayMemory;
        displayVar = '0'
        isEqual = false
      }
       else if (isClicked === true) {
        operation = displayMemory + displayVar;
        let myResult = Function(`return( ${operation} )`)();
        displayMemory = myResult + " " + opList[i].symbol;
        let memoryHistory = displayMemory + " " + displayVar + " ="
        addHistory(memoryHistory,myResult)
        displayMemoryContainer.innerHTML = displayMemory;
        displayVar = "0";
      } else {
        isClicked = true;
        displayMemory = displayVar + " " + opList[i].symbol;
        displayMemoryContainer.innerHTML = displayMemory;
        displayVar = "0";
        
      }
    });
  
  }


titleHistory.innerText = "History"

display.innerHTML = displayVar;

historyContent.appendChild(historyul)
topHistory.appendChild(titleHistory)
historyContainer.appendChild(topHistory)
historyContainer.appendChild(historyContent)
btContainer.appendChild(nbContainer);
btContainer.appendChild(opContainer);
displayContainer.appendChild(displayMemoryContainer)
displayContainer.appendChild(display)
container.appendChild(displayContainer);
container.appendChild(btContainer);
main.appendChild(container);
main.appendChild(historyContainer)
