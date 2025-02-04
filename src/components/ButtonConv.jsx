import React from "react";

const ButtonConv = (props) => {
    return <button onClick={props.convertir}>{props.texto}</button>
};

export default ButtonConv;