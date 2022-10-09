import {useState} from "react"
import "./footer.css"

function Footer(){

    
    
    const mask= /^[a-z][a-z0-9'A-Z]{3,}@[a-z0-9]{3,10}\.[a-z0-9]{2,15}$/g;

    const [messageErrorValue, setMessageErrorvalue] = useState("");
    
    
    
    function checkEmail(inputUser){

        const divError = document.getElementById("input-error");
       
        if(inputUser.match(mask)){

            setMessageErrorvalue("addresse validée")
            divError.style.backgroundColor="lightgreen";
            console.log("adresse valide");
            return
            
        }

        setMessageErrorvalue("addresse non valide");
        divError.style.backgroundColor="orangered";
        console.log("adresse non valide")

    
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