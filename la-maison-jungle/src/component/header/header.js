import "./header.css";
import logo from "../../asset/logo/logo.png"


function Header(){
    const title = "la maison jungle";
    
    return(
        <header className="header">
            <img className="logo" src={logo} alt="logo du site"></img>
            <h1 className="title-h1">{title.toLocaleUpperCase()}</h1>
        </header>
    )
}

export {Header}