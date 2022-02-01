const docArticle = document.querySelector("article");

let listOfSections = [];

const listOfStudents = [
  "Alicia Chen",
  "AnthonyH",
  "Charlotte Gunther",
  "Clement Vermylen",
  "Dylan Burgisser",
  "Georgiana M",
  "Isa Iraz",
  "Jerome Colasse",
  "Kaat",
  "Kristine Gusta",
  "Laurent Eyckermans",
  "Nashwan",
  "Omer",
  "Ovardanova",
  "Raphael Haasper",
  "Robin Lejeune",
  "Roland Martin",
  "Taguhi Karakashyan",
  "Tim Poels",
];

for (const studentName of listOfStudents) {
  const docNewSection = document.createElement("section");
  const getNewNumber = () => {
    let newNumber = parseInt(Math.random() * 256);
    return(newNumber);
  };

  let rgb,
    finalRGB = [];
  finalRGB.push(getNewNumber()),
    finalRGB.push(getNewNumber()),
    finalRGB.push(getNewNumber());
  console.log(finalRGB);
  let r = finalRGB[0],
    g = finalRGB[1],
    b = finalRGB[2],
    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  docNewSection.style.backgroundColor = `rgb(${finalRGB[0]} ${finalRGB[1]} ${finalRGB[2]})`;

  const docNewP = document.createElement("p");
  docNewP.innerText = studentName;

  docNewSection.appendChild(docNewP);

  if (hsp > 127.5) {
    docNewP.style.color = "black";
  } else {
    docNewP.style.color = "white";
  }
  listOfSections.push(docNewSection);

}
const shuffledArray = listOfSections.sort((a, b) => 0.5 - Math.random());

for (const element of shuffledArray) {
  docArticle.appendChild(element);
}
