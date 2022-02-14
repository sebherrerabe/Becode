const input = document.querySelector("#input"),
  button = document.querySelector("#button"),
  recipesContainer = document.querySelector(".recipes-container"),
  background = document.querySelector(".background"),
  container = document.querySelector(".container"),
  footer = document.querySelector("footer");


const getUrl = (string) => {
  const ingredients = string.replace(/ /g, "").split(",")
  let url =
    "https://api.spoonacular.com/recipes/findByIngredients?apiKey=04c54ef9e1c646b8b06e09de376073ca&ingredients=";
  ingredients.forEach((ingredient, index) => {
    if (index === 0) {
      url = url + ingredient;
    } else {
      url = url + ",+" + ingredient;
    }
  });
  url = url + "&number=2";
  return url;
};

const makeCard = (element) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("recipe");
  const newH2 = document.createElement("h2");
  newH2.innerText = element.title;
  newDiv.appendChild(newH2);
  const newIMG = document.createElement("img");
  newIMG.setAttribute("src", element.image);
  newDiv.appendChild(newIMG);
  const newUL = document.createElement("ul");
  const newH3 = document.createElement("h3");
  newH3.innerText = "You already have... ";
  element.usedIngredients.forEach((usedIngredient, index) => {
    const newLi = document.createElement("li");
    newLi.innerText = usedIngredient.name;
    newUL.appendChild(newLi);
  });
  newDiv.appendChild(newH3);
  newDiv.appendChild(newUL);

  const newULb = document.createElement("ul");
  const newH3b = document.createElement("h3");
  newH3b.innerText = "This recipe doesn't include... ";

  if (element.unusedIngredients.length != 0) {
    element.unusedIngredients.forEach((unusedIngredient, index) => {
      const newLi = document.createElement("li");
      newLi.innerText = unusedIngredient.name;
      newULb.appendChild(newLi);
    });
    newDiv.appendChild(newH3b);
    newDiv.appendChild(newULb);
  }

  const newULc = document.createElement("ul");
  const newH3c = document.createElement("h3");
  newH3c.innerText = "You need to go buy... ";
  element.missedIngredients.forEach((missedIngredient, index) => {
    const newLi = document.createElement("li");
    newLi.innerText = missedIngredient.name;
    newULc.appendChild(newLi);
  });
  newDiv.appendChild(newH3c);
  newDiv.appendChild(newULc);
  recipesContainer.appendChild(newDiv);
}


button.addEventListener("click", () => {
  const value = input.value,
    url = getUrl(input.value);
  if (value != "") {
      container.style.display = "none"
      recipesContainer.style.display = "flex"
      footer.style.display = "block"

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        recipesContainer.innerHTML = "";
        data.forEach((element) => {
          makeCard(element)
        });
        const newButton = document.createElement('button')
        newButton.innerHTML = "search more?"

  newButton.addEventListener('click', () => {
    container.style.display = "flex"
    recipesContainer.style.display = "none"
    footer.style.display = "none"
    recipesContainer.innerHTML = "";
  })
  recipesContainer.appendChild(newButton)
      });
  }
  
});

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   button.click();
  }})
