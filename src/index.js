import React from "react";
import ReactDOM from "react-dom";

const firstName = "Devon";
const lastName = "Saliga";
const currentYear = 2024;
const num = 8;

ReactDOM.render(
  <div>
    <h1>
      {firstName}, your Lucky Number is {num}.
    </h1>
    <p>Cready by {firstName + " " + lastName}.</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
