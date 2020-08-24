import React from 'react';
import './App.css';
import bananaBread from "./images/banana bread long view.JPG";
import chocStrawberryCake from "./images/choco & strawberries side view.JPG";
import faccacioBread from "./images/foccacio bread.JPG";
import gelato from "./images/gelato.JPG";
import portaBella from "./images/stuffed portobello side view.JPG";
import porkLionPlate from "./images/pork loin plate.JPG";
import lasagna from "./images/top view lasagna.JPG";
import porkLoinLong from "./images/pork loin long view.JPG";
import { BsBoxArrowInUpLeft } from "react-icons/bs";


function App() {

  return (
    <div className="App-container">
       <a href="https://charltonkam.now.sh/">
          <h1 className="display-menu">
             <BsBoxArrowInUpLeft /> Back to Website
          </h1>
       </a>
        <div className="titleBox">
            <h1 className="display">Welcome to My Culinary Page</h1>
        </div>
       <div className="row">
          <div className="column">
              <img src={bananaBread} alt="bananaBread" className="img" />
              <p className="lead">Banana Bread</p>
          </div>
          <div className="column">
              <img src={faccacioBread} alt="faccacio Bread" className="img" />
              <p className="lead">Faccacio Bread</p>
          </div>
           <div className="column">
               <img src={portaBella} alt="portabella mushroom dish" className="img" />
               <p className="lead">Portabella Mushroom</p>
           </div>
           <div className="column">
               <img src={lasagna} alt="lasagna that charlton made" className="img" />
               <p className="lead">Lasagna</p>
           </div>
       </div>

        <div className="row">
            <div className="column">
                <img src={porkLoinLong} alt="serving dish full of pork loin" className="img" />
                <p className="lead">Pork Loin</p>
             </div>
            <div className="column">
                <img src={porkLionPlate} alt="pork loin plate with vegetables" className="img" />
                <p className="lead">Plated Pork Loin</p>
            </div>
            <div className="column">
                <img src={chocStrawberryCake} alt="chocolate and strawberry cake with white frosting" className="img" />
                <p className="lead">Chocolate Strawberry Cake</p>
            </div>
            <div className="column">
                <img src={gelato} alt="gelato ice cream Charlton made from scratch" className="img" />
                <p className="lead">Gelato</p>
            </div>
        </div>
        <br/>
        <br/>
        <hr className="hr-4" />
        <br/>
        <h1 className="display-2">Recipes</h1>
        <div className="jumbotron">
            <h1 className="display-4">Recipe Name!</h1>
            <p className="h5">Short description of what were making</p>
            <hr className="my-4"/>

            <p className="lead">Ingredients</p>
            <li className="ingredients">item-1</li>
            <li className="ingredients">item-2</li>
        </div>
    </div>
  );
}

export default App;
