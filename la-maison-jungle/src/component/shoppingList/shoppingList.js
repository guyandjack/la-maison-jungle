import {plantList} from "../../data/listitem"
import { ScaleCare } from "../scalecare/scalecare.js";

import "./shoppingList.css"

function clickCat(category){
     alert(" tu as clicke sur la categorie " + category)
}

function ShoppingList(){

    let manyPlantCategory = [];

    for (let plant of plantList) {
     manyPlantCategory.push( plant.category );
    };
    console.log(manyPlantCategory)
     let objectPlantCategory =  new Set(manyPlantCategory);
     let plantCategoryUnique = [...objectPlantCategory];
     console.log(plantCategoryUnique)

    return (
      <div className="list-container">
        <ul className="list-category">
          {plantCategoryUnique.map((plantCat) => {
            return (
              <li className="li-category" key={plantCat.id} onClick={()=>clickCat(plantCat)}>
                {plantCat}
              </li>
            );
          })}
        </ul>
        <ul className="list-item">
          {plantList.map((item) => {
            const imgUrl = item.cover;
            return (
              <li className="li-item" key={item.id}>
                <img className="img-item" src={imgUrl} alt={item.name}></img>
                <p>
                  {item.name.toLocaleUpperCase()}
                  {item.isSpecialOffer ? (
                    <span className="solde-item">produit soldé!!!</span>
                  ) : null}
                </p>
                <ScaleCare water={item.water} light={item.light} />
              </li>
            );
          })}
        </ul>
      </div>
    );
}

export {ShoppingList}