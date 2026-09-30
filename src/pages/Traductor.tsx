import React, { useState } from 'react';
import { numeroALetras } from '../utils/traductorNumero';

const Traductor: React.FC = () => {
  const [numero, setNumero] = useState<string>('');
  const [traduccion, setTraduccion] = useState<string>('');

  const traducir = () => {
    if (numero.trim() === '') {
      setTraduccion('Por favor, ingrese un número del 1 al 1000.');
      return;
    }

    const val = parseInt(numero, 10);
    const resultado = numeroALetras(val);
    setTraduccion(resultado);
  };

  return (
    <div className="card">
      <h2 className="card-title">Traductor de Números a Letras</h2>

      <p style={{ textAlign: 'center', marginBottom: '20px', color: '#6b7280' }}>
        Ingrese un número del <strong>1 al 1000</strong> para ver su escritura en español.
      </p>

      <div className="form-group">
        <label className="form-label">Número (1 - 1000)</label>
        <input
          type="number"
          min="1"
          max="1000"
          className="form-input"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          placeholder="Ejemplo: 25, 500, 999..."
        />
      </div>

      <button className="btn btn-primary" style={{ width: '100%' }} onClick={traducir}>
        Traducir a Letras
      </button>

      {traduccion && (
        <div className="traduccion-box">
          <div className="traduccion-texto">"{traduccion}"</div>
        </div>
      )}
    </div>
  );
};

export default Traductor;
