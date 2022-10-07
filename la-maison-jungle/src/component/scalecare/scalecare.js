import "./scalecare.css"

function ScaleCare(props) {
    return (
      <div className="scalecare">
        <div>Apport d' eau recommandé :  {"🚰".repeat(props.water)} </div>
        <br></br>
        <div>Apport de lumière recommandé : {"☀️".repeat(props.light)} </div>
      </div>
    );
}

export {ScaleCare}