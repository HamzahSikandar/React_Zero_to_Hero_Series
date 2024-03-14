# 02- Create First React Component
### [Video Link](https://www.youtube.com/watch?v=CTSybII5FJw)
## Source Code
#### index.js
```
import React from "react";
import ReactDOM from "react-dom/client";
function App() {
  return (
    <h1>Hello World</h1>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
