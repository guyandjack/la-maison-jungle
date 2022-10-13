import {useState} from "react"
import "./footer.css"

function Footer(){

    
    
    const mask= /^[a-z][a-z0-9'A-Z]{3,}@[a-z0-9]{3,10}\.[a-z0-9]{2,15}$/g;

    const [messageErrorValue, setMessageErrorValue] = useState(null);
    
    
    
    function checkEmail(inputUser){

        const divError = document.getElementById("input-error");

        if(inputUser.length < 1){
          setMessageErrorValue(null);
          divError.style.backgroundColor = "transparent";
          return
        }
       
        if(inputUser.match(mask)){

            setMessageErrorValue("Format de l'addresse validée")
            divError.style.backgroundColor = "#31b572";
            return
            
        }


        setMessageErrorValue("addresse non valide");
        divError.style.backgroundColor="orangered";
        

    
    }

    return (
      <div className="footer">
        <form id="form">
          <label >Veuillez entrer votre email:</label>
          <input id="input-mail" type="email" max="50" min="5"  onChange={(e)=>checkEmail(e.target.value)}>
            
          </input>
          
          <div id="input-error" className="input-error">
            {messageErrorValue}
          </div>
            
          
        </form>
        <button className="btn-submit" type="submit">Envoyer</button>
      </div>
    );
}

export {Footer}