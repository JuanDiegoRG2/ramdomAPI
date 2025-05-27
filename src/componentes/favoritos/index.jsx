import React from 'react';
import './style.css';

function Favoritos({ favoritos }) {
  return (
    <div className="contenedor-favoritos">
      <h2>Favoritos</h2>
      {favoritos.length === 0 ? (
        <p>No hay favoritos aún.</p>
      ) : (
        favoritos.map((fav, index) => (
          <div className="c-favorito" key={index}>
            <img src={fav.image} alt={`${fav.firstName} ${fav.lastName}`} />
            <h3>{fav.firstName} {fav.lastName}</h3>
            <p>Email: {fav.email}</p>
            <p>Ciudad: {fav.address.city}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Favoritos;

