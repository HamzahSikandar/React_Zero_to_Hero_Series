 # 04- What is JSX in React 

 ### [Video Link](https://youtu.be/G3IQhc_EgFQ?si=E4vEyXWKKcnWVYyR)

#### You need to inclue 02-learn React components images folder inside you public folder
### [Folder Link]([02-learn React components images](https://github.com/HamzahSikandar/React_Zero_to_Hero_Series/tree/main/02-learn%20React%20components%20images))
 #### index.js
 ```
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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

function Header() {
  return (
    <header className="header">
      <h1>My Academy Restaurent</h1>
    </header>
  );
}

function Footer() {
  console.log("Footer Components");

  return (
    <div className="footer">
      <footer>
        <h1>{new Date().toLocaleTimeString()} Currently Open !!!</h1>
      </footer>
    </div>
  );
}

function Menus() {
  // const font_style = { color: "red", fontSize: "10px" };
  return (
    <div>
      <h1>Biryani </h1>
      <h3>Rice Chicken tomatos</h3>
      <img src="Menus/biryani.jpg" alt="Biryani" />
    </div>
  );
}

function MenuItems() {
  return (
    <div className="menu-items">
      <h2>Our Menu</h2>
      <Menus />
      <Menus />
      <Menus />
      <Menus />
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <MenuItems />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```


 #### index.js
 ```
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Roboto Mono", sans-serif;
  color: #252525;
  font-weight: 400;
  background-color: #f7f2e9;
  border-bottom: 1.6rem solid #edc84b;
  min-height: 100vh;
  padding: 3.2rem;
  padding-bottom: 6rem;
}

.container {
  max-width: 80rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;
}

/* *************** */

.header {
  align-self: stretch;
}

.header h1 {
  /* Non-accessible color */
  color: #edc84b;
  /* color: #af8602; */

  text-transform: uppercase;
  text-align: center;
  font-size: 5.2rem;
  font-weight: 300;
  letter-spacing: 3px;
  position: relative;
  width: 100%;
  display: block;
}

.header h1::before,
.header h1::after {
  display: block;
  content: "";
  height: 3px;
  width: 4rem;
  background-color: #edc84b;
  position: absolute;
  top: calc(50% - 1px);
}

.header h1::before {
  left: 0;
}

.header h1::after {
  right: 0;
}

/* *************** */

.menu-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
}

.menu-items h2 {
  display: inline-block;
  padding: 1rem 0;
  border-top: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  font-size: 2.4rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 500;
}

.menu-items > p {
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.6;
  width: 80%;
}

.menu {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4.8rem;
}

.menu {
  display: flex;
  gap: 3.2rem;
}

.menu img {
  width: 12rem;
  aspect-ratio: 1;
  align-self: start;
}

.menu div {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0.4rem 0;
}

.menu h3 {
  font-size: 2rem;
  font-weight: 400;
}

.menu p {
  font-size: 1.4rem;
  font-weight: 300;
  font-style: italic;
  margin-bottom: auto;
}

.menu span {
  display: block;
  font-size: 1.6rem;
}

.menu.sold-out {
  color: #888;
}

.menu.sold-out img {
  filter: grayscale();
  opacity: 0.8;
}

/* *************** */

.footer {
  font-size: 1.4rem;
}

.order {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
}

.btn {
  color: inherit;
  font-family: inherit;
  border: none;
  font-size: 1.4rem;
  font-weight: 500;
  background-color: #edc84b;
  padding: 1.4rem 3.2rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn:hover {
  background-color: #e9bb24;
}

```



 
