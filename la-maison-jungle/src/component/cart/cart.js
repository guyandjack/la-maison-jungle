
//import {useState} from "react";
import "./cart.css" 


function Cart({ qty, setqty, itemtype, pushitem, reducecart, setreducecart }) {

  console.log(itemtype)

  function deleteItem(item) {
    let result = itemtype.indexOf(item);
    itemtype.splice(result, 1);
    pushitem(itemtype);
    setqty(qty - 1)
  }

  
  
  
  return !reducecart ?(
    <div className="cart">
      <p className="cart-title">Votre panier</p>
      <ul className="cart-list">
      
        {
            (itemtype.length === 0)? (
              
              <div>Aucun article dans le panier</div>
            ):
              
              itemtype.map((item) => {
              return (
                <li className="cart-list-li" key={item.id}>
                  <span>
                    {item.name}
                    <br></br>
                  </span>
                  <span>
                    qte: {item.amount} <br></br>
                  </span>
                  <span>prix unitaire: {item.price}</span>
                  <span> Sous total: {item.amount * item.price}</span>
                  <button onClick={() => {deleteItem(item)}}>
                    Suprimer
                  </button>
                </li>
              );
             }
            )
          
        }
      </ul>
      <p className="cart-total">
        <span>Nombre total d'article(s): {qty} <br></br></span><span> Montant Total: {}</span>
      </p>
      <button onClick={ ()=>{setreducecart(true)}}>Fermer le panier</button>
    </div>
    ):(
      <div className="cart-closed">
        <button onClick={ ()=> {setreducecart(false)}}>Afficher votre panier</button>
      </div>
    )
}

export {Cart}


