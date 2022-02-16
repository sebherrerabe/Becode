const circles = document.querySelectorAll(".circle"),
  scoreContainer = document.querySelector(".score"),
  difficulty = document.querySelector("#difficulty"),
  players = document.querySelector("#players");

const mole = () => {
  circles[lastMole].classList.remove("red");
  i = parseInt(Math.random() * circles.length);
  lastMole = i;
  circles[i].classList.add("red");
  console.log(i);
};

const difficulties = { easy: 1500, medium: 1000, hard: 0500 };

let score = 0,
    mistakes = 0,
    i,
    lastMole = 0;

const player1 = () => {
    scoreContainer.innerHTML = ""
    const newP = document.createElement('p')
    newP.innerText = `Score: ${score} Mistakes: ${mistakes} `;
  circles.forEach((circle, index) => {
    circle.addEventListener("click", (event) => {
      if (circle.className === "circle red") {
        score++;
        newP.innerText = `Score: ${score} Mistakes: ${mistakes} `;
      } else {
        mistakes++;
        newP.innerText = `Score: ${score} Mistakes: ${mistakes} `;
      }
    });
  });
  scoreContainer.appendChild(newP)
};
let scorePlayer1 = 0,
    mistakesPlayer1 = 0,
    scorePlayer2 = 0,
    mistakesPlayer2 = 0;

const players2 = () => {
    scoreContainer.innerHTML = ""
  const newP1 = document.createElement("p");
  newP1.innerText = `Player 1 | Score: ${scorePlayer1}`;
  const newP2 = document.createElement("p");
  newP2.innerText = `Player 2 | Score: ${scorePlayer2}`;
  document.body.addEventListener("keyup", (event) => {
    if (event.keyCode === 103 && circles[0].className === "circle red") {
      circles[0].classList.remove("red");
      scorePlayer2++;
    } else if (event.keyCode === 104 && circles[1].className === "circle red") {
      circles[1].classList.remove("red");
      scorePlayer2++;
    } else if (event.keyCode === 105 && circles[2].className === "circle red") {
      circles[2].classList.remove("red");
      scorePlayer2++;
    } else if (event.keyCode === 100 && circles[3].className === "circle red") {
      circles[3].classList.remove("red");
      scorePlayer2++;
    } else if (event.keyCode === 101 && circles[4].className === "circle red") {
      circles[4].classList.remove("red");
      scorePlayer2++;
    } else if (event.keyCode === 102 && circles[5].className === "circle red") {
      circles[5].classList.remove("red");
      scorePlayer2++;
    } else if (event.keyCode === 97 && circles[6].className === "circle red") {
      circles[6].classList.remove("red");
      scorePlayer2++;
    } else if (event.keyCode === 98 && circles[7].className === "circle red") {
      circles[7].classList.remove("red");
      scorePlayer2++;
    } else if (event.keyCode === 99 && circles[8].className === "circle red") {
      circles[8].classList.remove("red");
      scorePlayer2++;
    }
    if (scorePlayer1 === 50) {
      alert("Player 1 wins");
      scorePlayer1 = 0;
      scorePlayer2 = 0;
      clearInterval(interval);
    } else if (scorePlayer2 === 50) {
      alert("Player 2 wins");
      scorePlayer1 = 0;
      scorePlayer2 = 0;
      clearInterval(interval);
    }
    newP2.innerText = `Player 2 | Score: ${scorePlayer2} `;
  });

  document.body.addEventListener("keyup", (event) => {
    if (event.keyCode === 65 && circles[0].className === "circle red") {
      circles[0].classList.remove("red");
      scorePlayer1++;
    } else if (event.keyCode === 90 && circles[1].className === "circle red") {
      circles[1].classList.remove("red");
      scorePlayer1++;
    } else if (event.keyCode === 69 && circles[2].className === "circle red") {
      circles[2].classList.remove("red");
      scorePlayer1++;
    } else if (event.keyCode === 81 && circles[3].className === "circle red") {
      circles[3].classList.remove("red");
      scorePlayer1++;
    } else if (event.keyCode === 83 && circles[4].className === "circle red") {
      circles[4].classList.remove("red");
      scorePlayer1++;
    } else if (event.keyCode === 68 && circles[5].className === "circle red") {
      circles[5].classList.remove("red");
      scorePlayer1++;
    } else if (event.keyCode === 87 && circles[6].className === "circle red") {
      circles[6].classList.remove("red");
      scorePlayer1++;
    } else if (event.keyCode === 88 && circles[7].className === "circle red") {
      circles[7].classList.remove("red");
      scorePlayer1++;
    } else if (event.keyCode === 67 && circles[8].className === "circle red") {
      circles[8].classList.remove("red");
      scorePlayer1++;
    }
    if (scorePlayer1 === 50) {
      alert("Player 1 wins");
      scorePlayer1 = 0;
      scorePlayer2 = 0;
    } else if (scorePlayer2 === 50) {
      alert("Player 2 wins");
      scorePlayer1 = 0;
      scorePlayer2 = 0;
    }
    newP1.innerText = `Player 1 | Score: ${scorePlayer1}`;
  });

  scoreContainer.appendChild(newP1);
  scoreContainer.appendChild(newP2);
};

let interval, mode;
const changeDifficulty = (mode) => {
  interval = setInterval(mole, mode);
};

difficulty.addEventListener("change", () => {
  if (difficulty.value === "easy") {
    clearInterval(interval);
    mode = difficulties.easy;
  } else if (difficulty.value === "medium") {
    clearInterval(interval);
    mode = difficulties.medium;
  } else if (difficulty.value === "hard") {
    clearInterval(interval);
    mode = difficulties.hard;
  }
  changeDifficulty(mode);
});

players.addEventListener('change', () => {
    if (players.value === "1player") {
        player1()
        scorePlayer1 = 0,
    mistakesPlayer1 = 0,
    scorePlayer2 = 0,
    mistakesPlayer2 = 0;
    } if (players.value === "2players") {
        players2()
        score = 0
        mistakes = 0
    }
})