import React from "react";

const Text = (props) => {
    var hola;

    switch (props.moneda.toLowerCase()) {
        case 'libras':
            hola = <h2>Libras: {props.dinero.libras.toFixed(2)}</h2>;
            break;
        case 'dolares':
            hola = <h2>Dolares: {props.dinero.dolares.toFixed(2)}</h2>;
            break;
        case 'rupias':
            hola = <h2>Rupias: {props.dinero.rupias.toFixed(2)}</h2>;
            break;
        case 'yuanes':
            hola = <h2>Yuanes: {props.dinero.yuanes.toFixed(2)}</h2>;
            break;
        case 'bitcoin':
            hola = <h2>Bitcoin: {props.dinero.bitcoin.toFixed(2)}</h2>;
            break;
    }
    return hola;
};

export default Text;