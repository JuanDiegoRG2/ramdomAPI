import { useState } from 'react';
import './style.css';

function Buscador({ onBuscar }) {
  const [valorInput, setValorInput] = useState('');

  const manejarCambio = (e) => {
    const texto = e.target.value;
    setValorInput(texto);
    onBuscar(texto); // Le envía el texto al padre
  };

  return (
    <div className="buscador">
      <input
        type="text"
        placeholder="Buscar usuario..."
        value={valorInput}
        onChange={manejarCambio}
      />
    </div>
  );
}

export default Buscador;
