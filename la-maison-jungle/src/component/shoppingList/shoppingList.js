
//import des fichiers


import { plantList } from "../../data/listitem";
import { ScaleCare } from "../scalecare/scalecare.js";

import "./shoppingList.css";



function ShoppingList({qty, setqty, itemtype, pushitem, plantcategory, setplantcategory, reducecart, setreducecart}) {

  

  // permet de mette à jours le panier
  function addToCart(item){

    console.log(item)
    // si le panier est vide on ajoute directement le produit
    if(itemtype.length === 0){
      
      item.amount = 1;
      itemtype.push(item);
      console.log(itemtype)
      pushitem(itemtype);
      setqty(qty + 1)
      setreducecart(false);
      return
    }

    // si le panier n' est pas vide on recherche un éventuel item deja present dans le panier
    if(itemtype.length > 0){

      let doublon = itemtype.find((plant) => plant.id === item.id );
      console.log(doublon)

      // si aucun doublon n' est trouvé on ajoute le produit au panier
      if (doublon === undefined ) {

        item.amount = 1;
        itemtype.push(item);
        console.log(itemtype);
        pushitem(itemtype);
        setqty(qty + 1);
        setreducecart(false);
        console.log(itemtype)
        return
      }
      
      // si un doublon est trouvé on met ajour la quantite dans le panier
      if(doublon){
        console.log("un doublon existe");
        for( let product of itemtype)

          if(product.id === doublon.id){
              product.amount = product.amount + 1;
              pushitem(itemtype)
              setqty(qty + 1)
              
          }
      return    
       
        
      }
    }

       
  }


  // permet de filtrer les plantes par categories
  let selectedCat = [];
  plantList.map((item) => {
    
    if(item.category === plantcategory){
      selectedCat.push(item);
      
    }
    
    if(plantcategory === "all"){
      selectedCat.push(item)
    }
    return selectedCat
  })
  
  
  return (
    <div >
           
        <ul className="list-item">
          {selectedCat.map((item) => {
            const imgUrl = item.cover;
            return (
              <li
                className="li-item"
                key={item.id}
                
              > 
                <div className="price-item">{item.price} €</div>
                <div className="container-img">
                  <img
                    className="img-item"
                    src={imgUrl}
                    alt={item.name + "cover"}
                  ></img>
                </div>
                <div>
                  <p>Nom: {item.name.toLocaleUpperCase()}</p>
                  <p>Categorie: {item.category}</p>
                  {item.isSpecialOffer ? (
                    <span className="solde-item">produit soldé!!!</span>
                  ) : null}
                </div>
                <ScaleCare water={item.water} light={item.light} />
                <button className="btn-ajouter"  onClick={()=>{addToCart(item)}}>Ajouter au panier</button>
              </li>
             );
           })}
        </ul>
      
    </div>
  );
}

export { ShoppingList };
