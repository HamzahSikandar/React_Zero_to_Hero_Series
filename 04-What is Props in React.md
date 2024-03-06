 # 04- What is Props in React 

 ### [Video Link](https://youtu.be/Zrggn_knpB0?si=rAR75tt0kvUj8h-l)



  #### index.js

  ```
function MenuItems() {
  return (
    <div className="menu-items">
      <h2>Our Menu</h2>
      <Menus
        name="Biryani"
        ingredients="Rice Chicken tomatos"
        price={200}
        photoName="Menus/biryani.jpg"
      />

      <Menus
        name="Chiness Rice"
        ingredients="Rice Carrot Chicken"
        price={300}
        photoName="Menus/chiness-rice.jpg"
      />
    </div>
  );
}



function Menus(props) {
  console.log(props);
  // const font_style = { color: "red", fontSize: "10px" };
  return (
    <div className="menu">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name} </h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}
```

 
