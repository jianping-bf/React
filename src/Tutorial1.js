import React from "react";

function ShoppingTitle(props) {
  return (
    <div>
      <h1>"Welcome to React Transportation"</h1>
      <h2>The best place to buy vehicles online</h2>
    </div>
  );
}

function GetOption(props) {
  return (
    <div>
      <h2>Choose Options</h2>
      <input type="checkbox" value={props.NewOnly} />
    </div>
  );
}

function GetType(props) {
  return (
    <div>
      <h2>Select Type</h2>
      <select>
        <option>All</option>
        <option>Cars</option>
        <option>Trucks</option>
        <option>Convertibles</option>
      </select>
    </div>
  );
}

function GetVechiles(props) {
  return (
    <div>
      <h2>Cars</h2>
      <table>
        <thead>
          <th>{props.headers[0]}</th>
          <th>{props.headers[1]}</th>
          <th>{props.headers[2]}</th>
          <th>{props.headers[3]}</th>
        </thead>
        <tbody>
          <tr>
            <td>2012</td>
            <td>A</td>
            <td>$32000</td>
            <td>
              <button>Buy</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function LoadAll(props) {
  if (props.Type === "Car") {
    return (
      <GetVechiles Type="Car" headers={["Year", "Model", "Price", "Buy"]} />
    );
  } else if (props.Type === "Truck") {
    return (
      <GetVechiles Type="Truck" headers={["Year", "Model", "Price", "Buy"]} />
    );
  }
  return null;
}

export function CarApp(props) {
  let newOnly = true;
  const tableHeaders = ["Year", "Model", "Price", "Buy"];
  return (
    <div>
      <ShoppingTitle />
      <GetOption NewOnly={newOnly} />
      <GetType />
      <LoadAll tableHeaders={tableHeaders} />
    </div>
  );
}
