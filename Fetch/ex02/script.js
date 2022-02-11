const button = document.querySelector("#button"),
  input = document.querySelector("#input"),
  select = document.querySelector("#select"),
  clearbt = document.querySelector("#clear"),
  content = document.querySelector(".content");

let Names = [];

if (localStorage.names) {
  Names = JSON.parse(localStorage.names);
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const makenewDiv = (object) => {
  const name = document.createElement("p");
  name.innerText = `Name: ${capitalizeFirstLetter(object.name)}`;
  const age = document.createElement("p");
  age.innerText = `Age: ${object.age}`;
  const count = document.createElement("p");
  count.innerText = `Count: ${object.count}`;
  const newDiv = document.createElement("div");
  newDiv.appendChild(name);
  newDiv.appendChild(age);
  newDiv.appendChild(count);
  content.prepend(newDiv);
};

button.addEventListener("click", () => {
  async function fetchJSON() {
    const response = await fetch(
      `https://api.agify.io/?name=${input.value}&country_id=${select.value}`
    );
    const data = await response.json();
    return data;
  }
  fetchJSON().then((data) => {
    data;
    makenewDiv(data);
    const newObject = {
      name: `${data.name}`,
      age: `${data.age}`,
      count: `${data.count}`,
    };
    Names.push(newObject);
    localStorage.names = JSON.stringify(Names);
  });

  //   fetch(`https://api.agify.io/?name=${input.value}&country_id=${select.value}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       makenewDiv(data)
  //       const newObject = {
  //         name: `${data.name}`,
  //         age: `${data.age}`,
  //         count: `${data.count}`,
  //       };
  //       Names.push(newObject);
  //       localStorage.names = JSON.stringify(Names);
  //     });
});

clearbt.addEventListener("click", () => {
  content.innerHTML = "";
  localStorage.clear();
});

for (const objecto of Names) {
  makenewDiv(objecto);
}
