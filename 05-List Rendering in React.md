 # 05- List Rendering in React 

 ### [Video Link](https://youtu.be/T8fKlC1YK04?si=oI7xJ7YafH1iiR-p)



  #### index.js

  ```
function MenuItems() {
  return (
    <div className="menu-items">
      <h2>Our Menu</h2>
      <ul className="menu-items">
        {MenuData.map((menu_data) => (
          <Menus menu_Obj={menu_data} key={menu_data.name} />
        ))}
      </ul>
    </div>
  );
}


function Menus(props) {
  console.log(props);
  // const font_style = { color: "red", fontSize: "10px" };
  return (
    <li className="menu">
      <img src={props.menu_Obj.photoName} alt={props.menu_Obj.name} />
      <div>
        <h3>{props.menu_Obj.name} </h3>
        <p>{props.menu_Obj.ingredients}</p>
        <span>{props.menu_Obj.price}</span>
      </div>
    </li>
  );
}

```

 
