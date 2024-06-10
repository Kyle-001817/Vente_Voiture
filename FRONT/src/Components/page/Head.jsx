import React from 'react';

function Header_Component(){
    return(
        <div className="maClasse">
            <div className="Header_gauche">
                <div className="Logo"></div>
            </div>
            <div className="Header_droite">
                <input type="text" />
                <input type="button" value="Valider" />
            </div>
        </div>
    );
}
export default Header_Component;