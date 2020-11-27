import React from "react";
//import "../styles/Wrapper";

function Wrapper({children}){

    return (
        <div className="wrapper">
            {children}
        </div>
    );
}

export default Wrapper;