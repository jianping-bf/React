import React from "react";
import ReactDOM from "react-dom";
import { CarApp } from "./Tutorial1";
import { GameApp } from "./Tutorial2";
import { ExamApp } from "./Lab2";

import "./styles.css";

function LineItem(props) {
  return <li>{props.Item}</li>;
}

function ShoppingList(props) {
  return (
    <div>
      <h3>{props.header}</h3>
      <ol>
        <LineItem Item={props.items[0]} />
        <LineItem Item={props.items[1]} />
        <LineItem Item={props.items[2]} />
      </ol>
    </div>
  );
}

function ShoppingTitle(props) {
  return (
    <div>
      <h1>{props.Title}</h1>
      <h2>Total number of items {props.Total}</h2>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <ShoppingTitle Title="My Shopping List" Total={9} />
      <ShoppingList header="Food" items={["Apple", "Bread", "Cheese"]} />
      <ShoppingList header="Clothes" items={["Shirt", "Pants", "Hat"]} />
      <ShoppingList header="Supplies" items={["Pen", "Paper", "Glue"]} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ExamApp />, rootElement);
