const input = document.querySelector("#input"),
  button = document.querySelector("#button"),
  recipesContainer = document.querySelector(".recipes-container"),
  background = document.querySelector(".background"),
  container = document.querySelector(".container"),
  footer = document.querySelector("footer");

{
  /* <div>
  <h2>Title</h2>
  <img src="https://spoonacular.com/recipeImages/659135-312x231.jpg" alt="" />
  <p>Ingredients used from your search: blabla, blabla, blabla</p>
  <p>Ingredients unused from your search: blabla, blabla, blabla</p>
  <p>Missed Ingredients: blabla, blabla, blabla</p>
</div>; */
}

// const newRecipe = (title, imgURL, usedIngredients, unusedIngredients, missedIngredients) => {
//   const newDiv = document.createElement("div");
//   newDiv.classList.add("recipe");
//   const newH2 = document.createElement("h2");
//   newH2.innerText = title;
//   newDiv.appendChild(newH2);
//   const newIMG = document.createElement("img");
//   newIMG.setAttribute("src", imgURL);
//   newDiv.appendChild(newIMG);
//   const newP = document.createElement("p");
//   let usedIngredientsText = "Ingredients used from your search: ";
//   usedIngredients.forEach((usedIngredient, index) => {
//     if (index === 0) {
//       usedIngredientsText = usedIngredientsText + usedIngredient.name;
//     } else if (index === -1) {
//       usedIngredientsText = usedIngredientsText + usedIngredient.name + ".";
//     } else {
//       usedIngredientsText = usedIngredientsText + ", " + usedIngredient.name;
//     }
//   });
//   newP.innerText = usedIngredientsText;
//   newDiv.appendChild(newP);
//   const newP2 = document.createElement("p");
//   let unusedIngredientsText = "Ingredients unused from your search: ";
//   unusedIngredients.forEach((unusedIngredient, index) => {
//     if (index === 0) {
//       unusedIngredientsText = unusedIngredientsText + unusedIngredient.name;
//     } else if (index === -1) {
//       unusedIngredientsText = unusedIngredientsText + unusedIngredient.name + ".";
//     } else {
//       unusedIngredientsText = unusedIngredientsText + ", " + unusedIngredient.name;
//     }
//   });
//   newP2.innerText = unusedIngredientsText;
//   newDiv.appendChild(newP2);
//   const newP3 = document.createElement("p");
//   let missedIngredientsText = "Ingredients missed from your search: ";
//   missedIngredients.forEach((missedIngredient, index) => {
//     if (index === 0) {
//       missedIngredientsText = missedIngredientsText + missedIngredient.name;
//     } else if (index === -1) {
//       missedIngredientsText = missedIngredientsText + missedIngredient.name + ".";
//     } else {
//       missedIngredientsText = missedIngredientsText + ", " + missedIngredient.name;
//     }
//   });
//   newP3.innerText = missedIngredientsText;
//   newDiv.appendChild(newP3);
//   recipesContainer.appendChild(newDiv)
// };

const getUrl = (string) => {
  const nospaces = string.replace(/ /g, ""),
    ingredients = nospaces.split(",");
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
        console.log(data);
        recipesContainer.innerHTML = "";
        data.forEach((element) => {
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
  
        });
        const newButton = document.createElement('button')
        newButton.innerHTML = "search more?"
  newButton.addEventListener('click', () => {
    container.style.display = "flex"
    recipesContainer.style.display = "none"
    footer.style.display = "none"
  })
  recipesContainer.appendChild(newButton)
      });
  }
  
});
