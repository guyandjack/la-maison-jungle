import {useState} from "react";
import "./form.css"

function FormQuestion(){
    const [inputValue, setInputValue] = useState("posez votre question ici");
    return(
        <div>
            <label for="text-area"></label>
            <textarea 
            id="text-area" 
            value={inputValue} 
            onChange= {(e) => { setInputValue(e.target.value)}}>


            </textarea>
            <button onClick={()=> {setInputValue(alert(inputValue))}}>clique pour connaitre le resultat</button>
        </div>
    )
}

export {FormQuestion}