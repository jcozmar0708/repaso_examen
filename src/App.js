import './App.css';
import React, { useState } from 'react';
import ButtonConv from './components/ButtonConv';

function App() {
  const [dinero, setDinero] = useState(0);
  const [dineroConvertido, setDineroConvertido] = useState({
    libras: 0,
    dolares: 0,
    rupias: 0,
    yuanes: 0,
    bitcoin: 0
  });

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

  return (
    <div className="App">
      <input type="text" onChange={dineroInput} />
      <ButtonConv texto='Convertir' convertir={convertir}/>
      <p>Libras: {dineroConvertido.libras}</p>
      <p>Dolares: {dineroConvertido.dolares}</p>
      <p>Rupia: {dineroConvertido.rupias}</p>
      <p>Yuan: {dineroConvertido.yuanes}</p>
      <p>Bitcoin: {dineroConvertido.bitcoin}</p>
    </div>
  );
}

export default App;