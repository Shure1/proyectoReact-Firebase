// Compra.js
import React, { useContext } from 'react';
import { CelularContext } from '../../context/CelularContext';
import './Compra.css';

const Compra = () => {
  const [items] = useContext(CelularContext);

  return (
    <div className="compra-container">
      <h2>Productos en el Carrito:</h2>
      <div className="productos-container">
        {Object.values(items).map((item) => (
          <div key={item.id} className="producto">
            <img src={item.img} alt={item.Marca} />
            <p>ID: {item.id}</p>
            <p>Marca: {item.Marca}</p>
            <p>Cantidad: {item.cantidad}</p> {/* Muestra la cantidad del producto */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compra;

