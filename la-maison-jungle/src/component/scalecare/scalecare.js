import "./scalecare.css"

function ScaleCare(props) {

 function alertInfo(scale, type) {

    
    let alertText="";
    let textInfo = "de lumiere"
    if(type === "water"){
       textInfo = "d' eau";
    }

    if (scale <= 2) {
      alertText = "Cette plante requiert peu " + textInfo;
    } else if (scale > 2 && scale <= 4) {
      alertText = "Cette plante requiert moyennement " + textInfo;
    } else if (scale > 4) {
      alertText = "Cette plante requiert beaucoup " + textInfo;
    }


    console.log(alertText);
  }
  
    return (
      <div className="scalecare">
        <div onClick={()=>{alertInfo(props.water, "water")}}>Apport d' eau recommandé :  {"🚰".repeat(props.water)} </div>
        <br></br>
        <div onClick={()=>{alertInfo(props.light, "light")}}>Apport de lumière recommandé : {"☀️".repeat(props.light)} </div>
      </div>
    );
}

export {ScaleCare}