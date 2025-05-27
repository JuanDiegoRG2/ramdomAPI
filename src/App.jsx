import { useState, useEffect } from 'react';
import Usuarios from './componentes/usuarios/index';
import Buscador from './componentes/buscador/index';
import Favoritos from './componentes/favoritos/index';
import './App.css';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const res = await fetch('https://dummyjson.com/users');
        const json = await res.json();
        setUsuarios(json.users);  // OJO: la propiedad es 'users' no 'results'
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    obtenerDatos();
  }, []);

  const usuariosFiltrados = usuarios.filter((usuario) =>
    `${usuario.firstName} ${usuario.lastName}`.toLowerCase().includes(busqueda.toLowerCase())
  );

  const agregarFavorito = (usuario) => {
    if (!favoritos.includes(usuario)) {
      setFavoritos([...favoritos, usuario]);
    }
  };

  return (
    <div className="App">
      <h1>Lista de Usuarios</h1>
      <Buscador onBuscar={setBusqueda} />
      <Favoritos favoritos={favoritos} />

      <div className="contenedor-usuarios">
        {usuariosFiltrados.map((usuario, index) => (
          <div className="c-usuario" key={index}>
            <img src={usuario.image} alt={`${usuario.firstName} ${usuario.lastName}`} />
            <h2>{usuario.firstName} {usuario.lastName}</h2>
            <p><strong>Edad:</strong> {usuario.age}</p>
            <p><strong>Email:</strong> {usuario.email}</p>
            <p><strong>País:</strong> {usuario.address.city}</p>
            <button onClick={() => agregarFavorito(usuario)}>Agregar a Favoritos</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
