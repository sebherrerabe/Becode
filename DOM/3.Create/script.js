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
  docNewSection.style.backgroundColor = `rgb(${Math.random() * 256} ${
    Math.random() * 256
  } ${Math.random() * 256})`;
  const newColorArray = docNewSection.style.backgroundColor;
  let rgb;
  if (newColorArray.length === 16) {
    rgb = newColorArray.substring(4, 15);
  } else if (newColorArray.length === 17) {
    rgb = newColorArray.substring(4, 16);
  } else if (newColorArray.length === 18) {
    rgb = newColorArray.substring(4, 17);
  } else if (newColorArray.length === 15) {
    rgb = newColorArray.substring(4, 14);
  } else if (newColorArray.length === 14) {
    rgb = newColorArray.substring(4, 13);
  } else if (newColorArray.length === 13) {
    rgb = newColorArray.substring(4, 12);
  } else if (newColorArray.length === 12) {
    rgb = newColorArray.substring(4, 11);
  }
  let finalRGB = rgb.split(", "),
    r = finalRGB[0],
    g = finalRGB[1],
    b = finalRGB[2],
    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  const docNewP = document.createElement("p");
  docNewP.innerText = studentName;
  if (hsp > 127.5) {
    docNewP.style.color = "black";
  } else {
    docNewP.style.color = "white";
  }
  docNewSection.appendChild(docNewP);
  listOfSections.push(docNewSection)
  
console.log(listOfSections)
}
const shuffledArray = listOfSections.sort((a, b) => 0.5 - Math.random());

for (const element of shuffledArray) {
    docArticle.appendChild(element)
}
