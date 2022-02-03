const dknSingers = [
  {
    artistName: "Angelo Killer",
    oldNames: ["Sco"],
    realName: "Italo Angelo Rivera Cardenas",
    genres: ["Rap", "Reggaeton", "Trap", "Dembow"],
    favouriteGenre: "Reggaeton",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui velit cum veritatis soluta sequi, suscipit quo tempore totam, omnis explicabo doloremque debitis iusto quam sit. Repudiandae temporibus cupiditate quae unde.",
    insta: "https://www.instagram.com/3lkiller/"
  },
  {
    artistName: "Pemjean",
    oldNames: ["Bastian Pemjean"],
    realName: "Bastian Eduardo Andrade Pemjean",
    genres: ["Rap", "R&B", "Trap", "Dancehall", "Reggaeton"],
    favouriteGenre: "Reggaeton",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui velit cum veritatis soluta sequi, suscipit quo tempore totam, omnis explicabo doloremque debitis iusto quam sit. Repudiandae temporibus cupiditate quae unde.",
    insta: "https://www.instagram.com/bastian_pemjean/"
  },
  {
    artistName: "El Hvrmin",
    oldNames: ["Harmin, el de la H", "Harmin MG"],
    realName: "Armin Marengo González",
    genres: ["Trap", "Reggaeton", "Dembow"],
    favouriteGenre: "Reggaeton",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui velit cum veritatis soluta sequi, suscipit quo tempore totam, omnis explicabo doloremque debitis iusto quam sit. Repudiandae temporibus cupiditate quae unde.",
    insta: "https://www.instagram.com/elhvrmin/"
  },
  {
    artistName: "Seb D",
    oldNames: ["Mc Dokken", "Sebastian Dokenbwoy", "Seb D'bwoy"],
    realName: "Sebastian Felipe Herrera Concha",
    genres: ["Rap", "Dancehall", "Reggaeton", "Trap"],
    favouriteGenre: "Reggaeton",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui velit cum veritatis soluta sequi, suscipit quo tempore totam, omnis explicabo doloremque debitis iusto quam sit. Repudiandae temporibus cupiditate quae unde.",
    insta: "https://www.instagram.com/sebherrera.cl/"
  },
  {
    artistName: "Sale",
    oldNames: ["Sale al Graf"],
    realName: "Ignacio Vaargas",
    genres: ["Rap", "Reggae", "Dancehall", "Reggaeton"],
    favouriteGenre: "Rap",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui velit cum veritatis soluta sequi, suscipit quo tempore totam, omnis explicabo doloremque debitis iusto quam sit. Repudiandae temporibus cupiditate quae unde.",
    insta: "https://www.instagram.com/ignaciotiburon/"
  },
  {
    artistName: "Uzbell",
    oldNames: ["Jimmy King"],
    realName: "Jimmy Bravo",
    genres: ["Mambo", "Reggae", "Reggaeton", "Trap" ],
    favouriteGenre: "Reggaeton",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui velit cum veritatis soluta sequi, suscipit quo tempore totam, omnis explicabo doloremque debitis iusto quam sit. Repudiandae temporibus cupiditate quae unde.",
    insta: "https://www.instagram.com/p/CZXSNfguVpY/"
  },
  {
    artistName: "Bonivoice",
    oldNames: ["Dizlow", "Alex King"],
    realName: "Ignacio Alexander Bonilla Campusano",
    genres: ["Dancehall", "Mambo", "Reggaeton", "Trap"],
    favouriteGenre: "Reggaeton",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui velit cum veritatis soluta sequi, suscipit quo tempore totam, omnis explicabo doloremque debitis iusto quam sit. Repudiandae temporibus cupiditate quae unde.",
    insta: "https://www.instagram.com/bonillak0/"
  },
  {
    artistName: "Aaron Riders",
    oldNames: ["El Sinda", "Donek"],
    realName: "Omar Aarón Vásquez Vásquez",
    genres: ["Dancehall", "Mambo", "Reggaeton", "Trap"],
    favouriteGenre: "Reggaeton",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui velit cum veritatis soluta sequi, suscipit quo tempore totam, omnis explicabo doloremque debitis iusto quam sit. Repudiandae temporibus cupiditate quae unde.",
    insta: "https://www.instagram.com/ignaciotiburon/"
  },
  {
    artistName: "Danito, el huerfanito",
    oldNames: ["DanyKing", "Dani el de la D"],
    realName: "Daniel Perez Gonzalez",
    genres: ["Dancehall", "Mambo", "Reggaeton", "Trap"],
    favouriteGenre: "Reggaeton",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui velit cum veritatis soluta sequi, suscipit quo tempore totam, omnis explicabo doloremque debitis iusto quam sit. Repudiandae temporibus cupiditate quae unde.",
    insta: "https://www.instagram.com/ignaciotiburon/"
  },
];

const body = document.body,
mainContainer = body.children[0],
collectionContainer = mainContainer.children[1]

console.log(collectionContainer)


const addClass = (newDiv,entry) => {
    newDiv.classList.add(entry)
}

const addText = (div, entry) => {
    div.innerText = entry
}

const makeElement = (el) => {
    return document.createElement(el)
}

const newAppendChild = (el, child) => {
    el.appendChild(child)
}

const makeNewCard = (i) => {
    const newDiv = makeElement('div')
    addClass(newDiv,"grid-items1")
    const newCardImg = makeElement('div')
    addClass(newCardImg,"card-img")
    newDiv.appendChild(newCardImg)
    const newCardContent = makeElement('div')
    addClass(newCardContent, "card-content")
    const newCardContentTop = makeElement('div')
    addClass(newCardContentTop,"card-content-top")
    const favouriteGenre = makeElement('div')
    addClass(favouriteGenre,"favourite-genre")
    addText(favouriteGenre, (dknSingers[i].favouriteGenre).toUpperCase())
    const newh2 = makeElement('h2')
    addClass(newh2,"artist-name")
    addClass(newh2,"first-margin")
    addText(newh2,dknSingers[i].artistName)
    const newP = makeElement('p')
    addClass(newP,"real-name")
    addClass(newP,"third-margin")
    addText(newP,dknSingers[i].realName)
    const newP2 = makeElement('p')
    addClass(newP2,"old-names")
    addClass(newP2,"second-margin")
    addText(newP2,dknSingers[i].oldNames)
    const newSpan = makeElement('span')
    addClass(newSpan,"bold")
    addText(newSpan,"Old Names: ")
    const newP3 = makeElement('p')
    addClass(newP3,"genres")
    addText(newP3,dknSingers[i].genres)
    const newSpan2 = makeElement('span')
    addClass(newSpan2,"bold")
    addText(newSpan2,"Genres: ")
    const newDesc = makeElement('p')
    addClass(newDesc,"description")
    addClass(newDesc,"second-margin")
    addText(newDesc, dknSingers[i].description)
    const newHR = makeElement('hr')
    addClass(newHR,"margin-20")
    const newA = makeElement('a')
    newA.setAttribute("href", dknSingers[i].insta)
    const lastDiv = makeElement('div')
    addClass(lastDiv,"insta")
    addClass(lastDiv,"margin-10")




    newAppendChild(newCardContentTop,favouriteGenre)

    newAppendChild(newCardContent,newCardContentTop)
    newAppendChild(newCardContent,newh2)
    newAppendChild(newCardContent,newP)
    newP2.prepend(newSpan)
    newAppendChild(newCardContent,newP2)
    newP3.prepend(newSpan2)
    newAppendChild(newCardContent,newP3)
    newAppendChild(newCardContent,newDesc)
    newAppendChild(newCardContent,newHR)
    newAppendChild(newA,lastDiv)
    newAppendChild(newCardContent,newA)

    newAppendChild(newDiv,newCardContent)
    newAppendChild(collectionContainer,newDiv)
}

for (let i = 0; i < dknSingers.length; i++) {
    const singer = dknSingers[i];
    makeNewCard(i)
}

