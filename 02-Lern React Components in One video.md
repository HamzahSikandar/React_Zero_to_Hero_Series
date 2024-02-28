 # 02- Learn  React Components in One Video
### [Video Link](https://youtu.be/dbrKwXzatmw?si=W0D-579WsgHMStug)
## Source Code
#### data.js
```
const MenuData = [
  {
    name: "Biryani",
    ingredients: "Rice Chicken tomatos",
    price: 200,
    photoName: "Menus/biryani.jpg",
    soldOut: false,
  },
  {
    name: "Chiness Rice",
    ingredients: "Rice Carrot Chicken",
    price: 300,
    photoName: "Menus/chiness-rice.jpg",
    soldOut: false,
  },
  {
    name: "Chicken Karahi",
    ingredients: "Chicken tomatos onions",
    price: 1200,
    photoName: "Menus/karahi.jpg",
    soldOut: false,
  },
  {
    name: "Mix Sabzi",
    ingredients: "Carrot Onion Tomatos Potatos",
    price: 450,
    photoName: "Menus/mixsabzi.jpg",
    soldOut: true,
  },
  {
    name: "Orange  Juice",
    ingredients: "Orange Sugar water",
    price: 200,
    photoName: "Menus/orange-juice.jpg",
    soldOut: false,
  },
  {
    name: "Kheer",
    ingredients: "Milk Sugar Pista",
    price: 400,
    photoName: "Menus/kheer.jpg",
    soldOut: false,
  },
];
```



#### You need to inclue 02-learn React components images folder inside you public folder
### [Folder Link]([02-learn React components images](https://github.com/HamzahSikandar/React_Zero_to_Hero_Series/tree/main/02-learn%20React%20components%20images))
#### index.js
```
import React from "react";
import ReactDOM from "react-dom/client";
const MenuData = [
  {
    name: "Biryani",
    ingredients: "Rice Chicken tomatos",
    price: 200,
    photoName: "Menus/biryani.jpg",
    soldOut: false,
  },
  {
    name: "Chiness Rice",
    ingredients: "Rice Carrot Chicken",
    price: 300,
    photoName: "Menus/chiness-rice.jpg",
    soldOut: false,
  },
  {
    name: "Chicken Karahi",
    ingredients: "Chicken tomatos onions",
    price: 1200,
    photoName: "Menus/karahi.jpg",
    soldOut: false,
  },
  {
    name: "Mix Sabzi",
    ingredients: "Carrot Onion Tomatos Potatos",
    price: 450,
    photoName: "Menus/mixsabzi.jpg",
    soldOut: true,
  },
  {
    name: "Orange  Juice",
    ingredients: "Orange Sugar water",
    price: 200,
    photoName: "Menus/orange-juice.jpg",
    soldOut: false,
  },
  {
    name: "Kheer",
    ingredients: "Milk Sugar Pista",
    price: 400,
    photoName: "Menus/kheer.jpg",
    soldOut: false,
  },
];


function Menus() {
  return (
    <div>
      <h1>Biryani </h1>
      <h3>Rice Chicken tomatos</h3>
      <img src="Menus/biryani.jpg" alt="Biryani" />
    </div>
  );
}


function App() {
  return (
    <div>
      <Menus />
      <Menus />
      <Menus />
      <Menus />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);








