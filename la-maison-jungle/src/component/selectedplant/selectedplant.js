
import { ScaleCare } from "../scalecare/scalecare.js";
import "./selectedplant.css";

function SelectedPlant(item) {
  const imgUrl = item.cover;
   
  return (
    <div className="selected-item">
      <img
        className="selected-img-item"
        src={imgUrl}
        alt={item.name + "cover"}
      ></img>
      <p>
        {item.name.toLocaleUpperCase()}
        {item.isSpecialOffer ? (
          <span className="solde-item">produit soldé!!!</span>
        ) : null}
      </p>
      <p>{item.price + "€"}</p>
      <ScaleCare water={item.water} light={item.light} />
    </div>
  );
 
  
}

export { SelectedPlant };
