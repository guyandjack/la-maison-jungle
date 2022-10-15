import React from "react";
import {useState, useEffect} from "react";

import "./app.css";

import { Header } from "./component/header/header.js";
import { CategoryList } from "./component/categorylist/categorylist.js";
import { Cart } from "./component/cart/cart.js";
import { ShoppingList } from "./component/shoppingList/shoppingList";
import { Footer } from "./component/footer/footer.js";

function App(){
  document.title = "la maison jungle";

  // permet de mettre à jour le panier
  const [itemQty, setQty] = useState(0);
  let cart = localStorage.getItem("panier");
  const [itemType, pushItem] = useState(cart? JSON.parse(cart):[]);

  useEffect(()=>{
    let cart = JSON.stringify(itemType);
    localStorage.setItem("panier", cart);
  }, [itemQty] )

  // permet de filtrer les categories de plante
  const [plantCat, setPlantCat] = useState("all");

  // permet d' afficher ou de reduire le panier
  const [reduceCart, setReduceCart] = useState(true);
  
  

    return (
      <div className="main-container">
        <Header />
        <CategoryList plantcategory={plantCat} setplantcategory={setPlantCat} />
        <div className="container-cart-and-shoppinglist">
          <div className="container-cart">
            <Cart
              qty={itemQty}
              setqty={setQty}
              itemtype={itemType}
              pushitem={pushItem}
              reducecart={reduceCart}
              setreducecart={setReduceCart}
            />
          </div>
          <div className="container-shoppinglist">
            <ShoppingList
              qty={itemQty}
              setqty={setQty}
              itemtype={itemType}
              pushitem={pushItem}
              plantcategory={plantCat}
              setplantcategory={setPlantCat}
              reducecart={reduceCart}
              setreducecart={setReduceCart}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
}

export {App}