import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";

const openTime = 12;
const closeTime = 24;
const time = new Date().getHours();
const isOpen = time < closeTime && time > openTime;
if (isOpen) {
  alert("We're open now! Wellcome!!");
} else {
  alert("Sorry! It's not our bussiness hour!!");
}
console.log(time);
console.log(isOpen);

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1
      // style={{ color: "red", fontSize: "32px", textTransform: "uppercase" }}
      >
        Fast React Pizza Co.
      </h1>
    </div>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
          // <Pizza name={pizza.name} photoName={pizza.photoName} />
        ))}
      </ul>
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <p>$ {props.pizzaObj.price}</p>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className="footer">
      {/* {`${new Date().toLocaleTimeString()}. We're currently open`} */}
      {/* 影片中的不行用 {new Date().toLocaleTimeString()}. We're currently open */}
      {new Date().toLocaleTimeString()}. We&apos;re currently open
      {/* ' can be replaced with &apos;, &lsquo;, &#39; or &rsquo; */}
    </footer>
    // <>
    //   <h3>
    // {`We're open until ${new Date().toLocaleTimeString()}.`} Come and visit
    //     us or order
    //   </h3>
    // </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
