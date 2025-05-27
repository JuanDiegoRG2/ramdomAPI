import { useState, useEffect } from 'react';
import './style.css';

function Usuarios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const res = await fetch(`https://randomuser.me/api/?results=10`);
      const json = await res.json();
      setData(json.results);
    };

    obtenerDatos();
  }, []);

  return (
    <>
      <h1 className="titulo">Usuarios</h1>

      <div className="contenedor-usuarios">
        {data.map((usuario, index) => (
          <div className="c-usuario" key={index}>
            <img src={usuario.picture.large} alt={`${usuario.name.first} ${usuario.name.last}`} />
            <h2>{usuario.name.first} {usuario.name.last}</h2>
            <p><strong>Género:</strong> {usuario.gender}</p>
            <p><strong>Email:</strong> {usuario.email}</p>
            <p><strong>País:</strong> {usuario.location.country}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Usuarios;
