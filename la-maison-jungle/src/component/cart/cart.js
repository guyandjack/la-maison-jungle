
import "./cart.css" 


function Cart(props) {

  let cartList = [];

    
  return (
   
        <div className="cart">
          <p className="cart-title">Votre panier</p>
          <ul className="cart-list">
              {cartList.map((item) => { 
                return(

                <li key={item.id}>{item.name}<span> qte: {props.qte}</span><span>prix: {item.price}</span></li>

                )
              })}
          </ul>
          <p className="cart-total">Total panier<span>prixtotal</span></p>
        </div>
        
    
  );
}

export {Cart}
