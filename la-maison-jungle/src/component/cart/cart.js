import React from "react";

import {plantList} from "../../data/listitem.js"
import {ScaleCare} from "../scalecare/scalecare.js"
import "./cart.css" 





function Cart() {
    
  return (
   
        <ul className="list-item">
            {plantList.map((item) => {
                
                return (
                  <li className="li-item" key={item.id}>
                    <p>
                      {item.name}
                      {item.isSpecialOffer ? (
                        <span className="solde-item"> produit soldé!!!</span>
                      ) : null}
                    </p>
                    <ScaleCare water={item.water} light={item.light} />
                  </li>
                );
            })}
        </ul>
        
    
  );
}

export {Cart}
