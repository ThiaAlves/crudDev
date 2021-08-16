import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const Menu = () => {
    return(
            <div className="sidebar col-3">
            <div className="actionBtn pl-5 pr-5">
            <Link to="/"><button className="active"><FontAwesomeIcon icon="pencil-alt" className="icon"/>Cadastro</button></Link>
            <Link to="/developers"><button className="active"><FontAwesomeIcon icon="list" className="icon"/>Listagem</button></Link>
                 </div>
             </div>
    )
}

export default Menu;