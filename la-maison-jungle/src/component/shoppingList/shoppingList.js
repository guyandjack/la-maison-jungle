
//import des fichiers
import {useState, useEffect} from "react"

import { plantList } from "../../data/listitem";
import { ScaleCare } from "../scalecare/scalecare.js";

import "./shoppingList.css";


function ShoppingList() {

  const [itemNumber, addItem] = useState(0);

  function addCart(nbr) {
    addItem(nbr + 1);
    console.log(itemNumber)
  }

  

  return (
    <div >
           
        <ul className="list-item">
          {plantList.map((item) => {
            const imgUrl = item.cover;
            return (
              <li
                className="li-item"
                key={item.id}
                
              >
                <img
                  className="img-item"
                  src={imgUrl}
                  alt={item.name + "cover"}
                ></img>
                <p>
                  {item.name.toLocaleUpperCase()}
                  {item.isSpecialOffer ? (
                    <span className="solde-item">produit soldé!!!</span>
                  ) : null}
                </p>
                <ScaleCare water={item.water} light={item.light} />
                <button className="btn-ajouter"  onClick={()=>{addCart(item)}}>Ajouter</button>
              </li>
             );
           })}
        </ul>
      
    </div>
  );
}

export { ShoppingList };
