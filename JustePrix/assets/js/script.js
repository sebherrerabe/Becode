const chatContainer = document.querySelector(".chat-container"),
  inputUser = document.querySelector("#input-user"),
  userBT = document.querySelector("#user-bt"),
  startBT = document.querySelector("#start-bt"),
  quitBT = document.querySelector("#quit-bt");

const sendMessage = (text, isUser) => {
  const newBar = document.createElement("div");
  if (isUser === true) {
    newBar.classList.add("userbar");
  } else {
    newBar.classList.add("bar");
  }
  const newP = document.createElement("p");
  newP.innerText = text;
  newBar.appendChild(newP);
  chatContainer.appendChild(newBar);
};

const sendLevel = (level) => {
  sendMessage("Level: " + level);
  sendMessage("Enter your bid");
};

let currentState = "first",
  previousState = "",
  houseNumber = 0,
  i = 0;

const fairPrice = () => {
  let answer = inputUser.value;
  let choice, bid, max;
  let level;
  let choice2;
  if (
    currentState === "first" ||
    (answer === "yes" && previousState === "fourth")
  ) {
    chatContainer.innerHTML = "";
    sendMessage("Choose your level:");
    sendMessage("1 = Easy : between 1 et 10");
    sendMessage("2 = Medium : between 1 et 100");
    sendMessage("3 = Hard : between 1 et 1000");
    currentState = "second";
  } else if (currentState === "second") {
    sendMessage(answer, true);
    choice = answer;
    if (choice === "1") {
      houseNumber = Math.floor(Math.random() * 10) + 1;
      level = "Easy";
      max = 10;
      currentState = "third";
      sendLevel(level);
    } else if (choice === "2") {
      houseNumber = Math.floor(Math.random() * 100) + 1;
      level = "Medium";
      max = 100;
      currentState = "third";
      sendLevel(level);
    } else if (choice === "3") {
      houseNumber = Math.floor(Math.random() * 1000) + 1;
      level = "Hard";
      max = 1000;
      currentState = "third";
      sendLevel(level);
    } else {
      sendMessage("Error : level unknown ! Enter a number between 1 and 3");
    }
    console.log(houseNumber);
  } else if (currentState == "third") {
    console.log(houseNumber);
    sendMessage(answer, true);
    bid = parseInt(answer);

    if (bid < 1 || bid > max) {
      sendMessage("Error : your bid isn't between 1 and " + max);
    } else {
      i++;
      if (i != 10 && houseNumber != bid) {
        if (houseNumber != bid) {
          if (houseNumber > bid) {
            sendMessage("It's more");
          } else {
            sendMessage("It's less");
          }
        }
        console.log(i);
      } else {
        if (houseNumber === bid) {
          sendMessage("You win in " + i + " attempt(s)");
        } else {
          sendMessage("You loose, the fair price was " + houseNumber);
        }
        sendMessage("Would you like to play again? yes/no");
        currentState = "fourth";
      }
    }
  } else {
    console.log(currentState);
    sendMessage(answer, true);
    choice2 = answer;
    if (choice2 === "yes") {
      currentState = "first";
      previousState = "fourth";
      i = 0;
      userBT.click();
    } else {
      chatContainer.innerHTML = "";
      sendMessage("Good luck! Bye");
    }
  }
};

startBT.addEventListener("click", () => {
  fairPrice();
  userBT.addEventListener("click", () => {
    fairPrice();
  });
});

quitBT.addEventListener("click", () => {
  window.close();
});

// const stateEX = () => {
//   let answer = inputUser.value;
//   if (check === "firststate" || answer === "yes") {
//     chatContainer.innerHTML = "";
//     sendMessage("Say something");
//     check = "secondstate";
//   } else if (check === "secondstate") {
//     sendMessage(answer, true);
//     sendMessage(`Your message was ${answer}`);
//     sendMessage("Should i do it again?");
//     check = "thirdstate";
//   } else if (answer === "no") {
//     sendMessage("Chao");
//   }
// };
