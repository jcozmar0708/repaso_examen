import './App.css';
import React, { useState } from 'react';
import ButtonConv from './components/ButtonConv';
import Text from './components/Text';

function App() {
  const [dinero, setDinero] = useState(0);

  const [dineroConvertido, setDineroConvertido] = useState({
    libras: 0,
    dolares: 0,
    rupias: 0,
    yuanes: 0,
    bitcoin: 0
  });

  const [moneda, setMoneda] = useState('libras');

  const dineroInput = (e) => {
    setDinero(e.target.value);
  };

  const convertir = () => {
    setDineroConvertido({
      libras: dinero * 0.83,
      dolares: dinero * 1.03,
      rupias: dinero * 89.88,
      yuanes: dinero * 7.42,
      bitcoin: dinero * 0.000011
    });
  };

  const cambiarMoneda = (e) => {
    setMoneda(e.target.value);
  };

  return (
    <div className="App">
      <input type="text" onChange={dineroInput} />

      <ButtonConv texto='Convertir' convertir={convertir}/>

      <select onChange={cambiarMoneda}>
        <option>Libras</option>
        <option>Dolares</option>
        <option>Rupias</option>
        <option>Yuanes</option>
        <option>Bitcoin</option>
      </select>

      <Text dinero={dineroConvertido} moneda={moneda}/>
    </div>
  );
}

export default App;