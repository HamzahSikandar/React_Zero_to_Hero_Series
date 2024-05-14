import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import "./index.css";

const initialEmployees = [
  {
    id: 118836,
    name: "Ali",
    image: "https://avatar.iran.liara.run/public/15",
    score: 20,
  },
  {
    id: 933372,
    name: "Ahmad",
    image: "https://avatar.iran.liara.run/public/15",
    score: 0,
  },
  {
    id: 499476,
    name: "Sarah",
    image: "https://avatar.iran.liara.run/public/80",
    score: 0,
  },
];

function App() {
  const [showform, setShowform] = useState(false);
  const [employeeList, setEmployeeList] = useState(initialEmployees);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  function handleshowAddForm() {
    setShowform((showform) => !showform);
  }

  function handleAddEmployee(employee) {
    setEmployeeList((employeeList) => [...employeeList, employee]);
  }
  function handleSelectedEmployee(employee) {
    setSelectedEmployee(employee);
  }

  function handleCalScore(score) {
    setEmployeeList(
      employeeList.map((employee) =>
        employee.id === selectedEmployee.id
          ? { ...employee, score: score }
          : employee
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <EmployeeList
          employees={employeeList}
          onSelection={handleSelectedEmployee}
        />

        {showform && <AddEmployeeForm onAddEmployee={handleAddEmployee} />}

        <Button onClick={handleshowAddForm}>
          {showform ? "Close" : "Add Employee"}
        </Button>
      </div>
      <EmployeePerfomanceForm
        selectedEmployee={selectedEmployee}
        handleCalScore={handleCalScore}
      />
    </div>
  );
}

export default App;
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function EmployeeList({ employees, onSelection }) {
  return (
    <ul>
      {employees.map((employee) => (
        <Employee
          employee={employee}
          key={employee.id}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

function Employee({ employee, onSelection }) {
  return (
    <li>
      <img src={employee.image} />
      <h3>{employee.name} </h3>
      {employee.score === 0 ? (
        <p className="red"> No Perfomance Updated Yet</p>
      ) : (
        <p className="green"> Perfomance: {employee.score}% </p>
      )}

      <button className="button" onClick={() => onSelection(employee)}>
        {" "}
        Select
      </button>
    </li>
  );
}

function AddEmployeeForm({ onAddEmployee }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://avatar.iran.liara.run/public/29");

  function handleSubmit(e) {
    e.preventDefault();

    // id: 118836,
    // name: "Ali",
    // image: "https://avatar.iran.liara.run/public/15",
    // score: 20,
    const id = crypto.randomUUID();
    const employee = {
      id: id,
      name: name,
      image: image,
      score: 0,
    };

    onAddEmployee(employee);
    setName("");
    setImage("https://avatar.iran.liara.run/public/29");
  }
  return (
    <form className="form-add-employee" onSubmit={handleSubmit}>
      <label>Employee Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button className="button">Add</button>
    </form>
  );
}

function EmployeePerfomanceForm({ selectedEmployee, handleCalScore }) {
  const [com, setCom] = useState(0);
  const [tech, Settech] = useState(0);
  const [team, setTeam] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    console.log();
    const score = parseInt(
      (parseInt(com) + parseInt(tech) + parseInt(team)) / 3
    );

    handleCalScore(score);

    setCom(0);
    setTeam(0);
    Settech(0);
  }
  return (
    <form className="form-employee-perfomance" onSubmit={handleSubmit}>
      <h2>
        {" "}
        {selectedEmployee ? selectedEmployee.name : "Employee"} Perfomance Form
      </h2>
      <label>Communication Skill Score:</label>
      <input
        type="number"
        value={com}
        onChange={(e) => setCom(e.target.value)}
      />
      <label>Technical Skill Score:</label>
      <input
        type="number"
        value={tech}
        onChange={(e) => Settech(e.target.value)}
      />
      <label>TeamWork Skill Score:</label>
      <input
        type="number"
        value={team}
        onChange={(e) => setTeam(e.target.value)}
      />
      <button className="button">Submit</button>
    </form>
  );
}
