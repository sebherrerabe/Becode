const docMain = document.querySelector("main"),
  docFirstSection = docMain.children[0],
  docFirstInput = docFirstSection.children[1],
  docFirstSpan = docFirstSection.children[2],
  docSecondSection = docMain.children[1],
  docSecondInput = docSecondSection.children[1],
  aHardTruth = docSecondSection.children[2],
  docThirdSection = docMain.children[2],
  docFirstDiv = docThirdSection.children[2],
  docSecondDiv = docThirdSection.children[3],
  docThirdInput = docFirstDiv.children[0],
  docFourthInput = docSecondDiv.children[0],
  docFourthSection = docMain.children[3],
  docFifthInput = docFourthSection.children[1];

docFirstInput.addEventListener("keyup", () => {
  docFirstSpan.innerHTML = docFirstInput.value;
});

docSecondInput.addEventListener("keyup", () => {
  if (docSecondInput.value >= 18) {
    aHardTruth.style.visibility = "visible";
  } else {
    aHardTruth.style.visibility = "hidden";
  }
});

docThirdInput.addEventListener("keyup", () => {
  if (docThirdInput.value.length != 6) {
    docThirdInput.style.backgroundColor = "red";
  } else {
    docThirdInput.style.backgroundColor = "white";
  }
  docFourthInput.addEventListener("keyup", () => {
    if (docFourthInput.value.length != 6) {
      docFourthInput.style.backgroundColor = "red";
    } else {
      docFourthInput.style.backgroundColor = "white";
    }
  });
  if (docThirdInput.value != docFourthInput.value) {
    docFourthInput.style.backgroundColor = "red";
  } else {
    docFourthInput.style.backgroundColor = "white";
  }
});

docFifthInput.addEventListener('change', () => {
    if (docFifthInput.value === "dark") {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }
})
