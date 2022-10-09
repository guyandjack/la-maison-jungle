import React from "react";

import "./app.css";

import { Header } from "./component/header/header.js";
import { CategoryList } from "./component/categorylist/categorylist.js";
import { Cart } from "./component/cart/cart.js";
import { ShoppingList } from "./component/shoppingList/shoppingList";
import { Footer } from "./component/footer/footer.js";

function App(){

    return (
      <div className="main-container">
        <Header />
        <CategoryList />
        <div className="container-cart-and-shoppinglist">
          <div className="container-cart">
            <Cart />
          </div>
          <div className="container-shoppinglist">
            <ShoppingList />
          </div>
        </div>
        <Footer />
      </div>
    );
}

export {App}