 # 06- Conditional Rendering with && Operator In React 

 ### [Video Link](https://youtu.be/dtTIeoJD_pY?si=TiB9oIwTADGmZlCh)


 #### index.css
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
  color: #ffffff;
  font-weight: 400;
  background-color: #f7f2e9;
  border-bottom: 1.6rem solid #edc84b;
  background-image: url("D:\React Tutorials\app1\public\Menus\bg-image.jpg");
  background-size: cover;
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

.menus {
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
 



  #### index.js

  ```
function MenuItems() {
  const menus_data = MenuData;
  // const menus_data = [];

  return (
    <div className="menu-items">
      <h2>Our Menu</h2>
      {menus_data && (
        <ul className="menus">
          {menus_data.map((menu_data) => (
            <Menus menu_Obj={menu_data} key={menu_data.name} />
          ))}
        </ul>
      )}
    </div>
  );
}



function Footer() {
  const current_time = new Date().getHours();
  const open_time = 9;
  const close_time = 23;
  const is_Open = current_time >= open_time && current_time <= close_time;
  console.log(`Current Time ${current_time}`);
  console.log(`Is Open ${is_Open}`);
  console.log("Footer Components");

  return (
    <div className="footer">
      <footer>
        {is_Open && (
          <div className="order">
            <p>Restaurent Currently Open !!</p>
            <button className="btn">Order</button>
          </div>
        )}
      </footer>
    </div>
  );
}

```

 
