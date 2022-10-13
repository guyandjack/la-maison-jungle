
//import {useState} from "react";
import "./cart.css" 


function Cart({ qty, setqty, itemtype, pushitem, reducecart, setreducecart }) {

  let prixTotal = 0;
  

  // permet de suprimer un article du panier
  function deleteItem(item) {
    let indexItem = itemtype.indexOf(item);
    let qtyOfItem = itemtype[indexItem].amount;
    itemtype.splice(indexItem, 1);
    pushitem(itemtype);
    setqty(qty - qtyOfItem)
  }

  //incremente la qte d' un article du panier
  function incQty(item, inputValue){

    if(inputValue > 0){

      for(let product of itemtype){

        if(product.id === item.id){

          product.amount = parseInt(inputValue, 10);
          pushitem(itemtype);
          setqty (inputValue )
        }
      }
    }

  }
 
  // calcule le prix total du panier
  if(itemtype.length > 0){

    for(let product of itemtype){
      
      prixTotal += (product.amount * product.price)
    
    }

  }
  else{
    prixTotal = 0;
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
                    {(item.name).toLocaleUpperCase() }
                    <br></br>
                  </span>
                  <span>Prix: {item.price} € <br></br></span>
                  <label for="input-number">Qté</label>
                  <input
                    id="input-number"
                    className="input-number"
                    type="number"
                    max="99"
                    min="0"
                    value={item.amount}
                    onChange={(e) => incQty(item, e.target.value)}
                  ></input>
                  <span>
                    {" "}
                    Sous total: {item.amount * item.price} € <br></br>
                  </span>

                  <button
                    onClick={() => {
                      deleteItem(item);
                    }}
                  >
                    Suprimer
                  </button>
                </li>
              );
             }
            )
          
        }
      </ul>
      <p className="cart-total">
        <span>{qty} article(s)<br></br></span><span> Montant Total: {prixTotal} €</span>
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


