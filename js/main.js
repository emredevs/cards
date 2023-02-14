let UserInfo = [
  { name: "emre", email: "emre@mail.com", img: "img/gezi.jpg", gender: "man" },
  {
    name: "koray",
    email: "koray@gmail.com",
    img: "img/viski.jpg",
    gender: "man",
  },
  {
    name: "kadir",
    email: "kadir@gmail.com",
    img: "img/woe.jpg",
    gender: "man",
  },
  {
    name: "buse",
    email: "buse@gmail.com",
    img: "img/sandman.jpg",
    gender: "women",
  },
  {
    name: "yusuf",
    email: "yusuf@gmail.com",
    img: "img/lego.png",
    gender: "man",
  },
  {
    name: "kamil",
    email: "kamil@gmail.com",
    img: "img/mariana.png",
    gender: "man",
  },
  {
    name: "yunus",
    email: "yunus@gmail.com",
    img: "img/japon-food.jpg",
    gender: "man",
  },
  {
    name: "faruk",
    email: "faruk@gmail.com",
    img: "img/festival.jpg",
    gender: "man",
  },
  {
    name: "selin",
    email: "selin@gmail.com",
    img: "img/hackers.jpeg",
    gender: "women",
  },
  {
    name: "kamil",
    email: "kamil@gmail.com",
    img: "img/mariana.png",
    gender: "man",
  },
  {
    name: "asli",
    email: "asli@gmail.com",
    img: "img/image-177.png",
    gender: "women",
  },
  {
    name: "ayse",
    email: "ayse@gmail.com",
    img: "img/gezi.jpg",
    gender: "women",
  },
];

let listDOM = document.querySelector("#list");
let container = document.querySelector("#container");
UserInfo.forEach((object) => {
  let newDiv = document.createElement("div");
  newDiv.classList.add("box");
  let divIN = document.createElement("div");
  divIN.classList.add("box-in");
  let image = document.createElement("img");
  image.src = object.img;
  let h4 = document.createElement("h4");
  h4.innerHTML = object.email;
  let h2 = document.createElement("h2");
  h2.innerHTML = `${object.name[0].toLocaleUpperCase()}${object.name
    .slice(1)
    .toLocaleLowerCase()}`;

  divIN.appendChild(image);
  newDiv.appendChild(h4);
  newDiv.appendChild(h2);
  newDiv.appendChild(divIN);
  container.appendChild(newDiv);
});

// let userName = UserInfo.map((nameUser) => {
//   return nameUser.name + " / " + nameUser.gender;
// });
// let list = document.querySelector("#userName");
// userName.forEach((value) => {
//   let newLi = document.createElement("li");
//   newLi.innerHTML = value;
//   list.append(newLi);
// });
