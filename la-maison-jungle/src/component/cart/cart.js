
//import {useEffect} from "react";
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

    let numberInputValue = parseInt(inputValue);

      for (let product of itemtype) {

        if (product.id === item.id) {
            
            // si la qty augmente
            if(numberInputValue > product.amount){

              product.amount++;
              pushitem(itemtype);
              qty++ ;
              setqty(qty);
              return
            }

            // si la qty diminue
            product.amount--;
            pushitem(itemtype);
            qty--;
            setqty(qty);
            return;
            
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
                let cartImgUrl = item.cover;
              return (
                <li className="cart-list-li" key={item.id}>

                  <div className="cart-container-info">

                    <img className="cart-li-img" src={cartImgUrl} alt={item.name}></img>
                    <p>{(item.name).toLocaleUpperCase() }</p>
                    <span>Prix: {item.price} € </span>

                  </div>
                  <div className="cart-input-container">
                    <label for="input-number">Qté</label>
                    <input
                      id="input-number"
                      className="input-number"
                      type="number"
                      max="99"
                      min="1"
                      value={item.amount}
                      onChange={(e) => incQty(item, e.target.value)}
                    ></input>
                  </div>
                  <div className="cart-soustotal-container">
                    <span>
                     
                      Sous total: {item.amount * item.price} € <br></br>
                    </span>

                    <button
                      onClick={() => {
                        deleteItem(item);
                      }}
                    >
                      Suprimer
                    </button>
                  </div>
                </li>
              );
             }
            )
          
        }
      </ul>
      <p className="cart-total">
        <span>{qty} article(s)<br></br></span><span> Montant Total: {prixTotal} €</span>
      </p>
      <button onClick={ ()=>{setreducecart(true)}}>Cacher le panier</button>
    </div>
    ):(
      <div className="cart-closed">
        <button onClick={ ()=> {setreducecart(false)}}>Afficher votre panier</button>
      </div>
    )
}

export {Cart}


