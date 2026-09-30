import React, { useState } from 'react';

const TablaMultiplicar: React.FC = () => {
  const [numeroInput, setNumeroInput] = useState<string>('5');
  const [tabla, setTabla] = useState<Array<{ multiplicador: number; resultado: number }>>([]);
  const [numeroBase, setNumeroBase] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const generarTabla = () => {
    if (numeroInput.trim() === '') {
      setError('Por favor, ingrese un número.');
      setTabla([]);
      setNumeroBase(null);
      return;
    }

    const n = parseFloat(numeroInput);

    if (isNaN(n)) {
      setError('Ingrese un número válido.');
      setTabla([]);
      setNumeroBase(null);
      return;
    }

    setError('');
    setNumeroBase(n);

    const filas = [];
    for (let i = 1; i <= 13; i++) {
      filas.push({
        multiplicador: i,
        resultado: n * i
      });
    }
    setTabla(filas);
  };

  return (
    <div className="card">
      <h2 className="card-title">Tabla de Multiplicar</h2>

      <div className="form-group">
        <label className="form-label">Ingrese un Número</label>
        <input
          type="number"
          className="form-input"
          value={numeroInput}
          onChange={(e) => setNumeroInput(e.target.value)}
          placeholder="Ejemplo: 7"
        />
      </div>

      <button className="btn btn-primary" style={{ width: '100%' }} onClick={generarTabla}>
        Generar Tabla
      </button>

      {error && <p className="error-message">{error}</p>}

      {numeroBase !== null && tabla.length > 0 && (
        <div className="tabla-container">
          <h3 className="tabla-titulo">Tabla del {numeroBase}</h3>

          <div className="tabla-list">
            {tabla.map((item) => (
              <div key={item.multiplicador} className="tabla-fila">
                <span>{numeroBase} &times; {item.multiplicador}</span>
                <span>=</span>
                <span className="tabla-resultado">{item.resultado}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TablaMultiplicar;
