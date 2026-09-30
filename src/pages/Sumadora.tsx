import React, { useState } from 'react';

const Sumadora: React.FC = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [resultado, setResultado] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calcularSuma = () => {
    if (num1.trim() === '' || num2.trim() === '') {
      setError('Por favor, ingrese ambos números.');
      setResultado(null);
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setError('Ingrese valores numéricos válidos.');
      setResultado(null);
      return;
    }

    setError('');
    setResultado(n1 + n2);
  };

  const limpiarCampos = () => {
    setNum1('');
    setNum2('');
    setResultado(null);
    setError('');
  };

  return (
    <div className="card">
      <h2 className="card-title">Calculadora de Suma</h2>

      <div className="form-group">
        <label className="form-label">Primer Número</label>
        <input
          type="number"
          className="form-input"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Ejemplo: 10"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Segundo Número</label>
        <input
          type="number"
          className="form-input"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Ejemplo: 25"
        />
      </div>

      <div className="btn-group">
        <button className="btn btn-primary" onClick={calcularSuma}>
          Sumar
        </button>
        <button className="btn btn-secondary" onClick={limpiarCampos}>
          Limpiar
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {resultado !== null && (
        <div className="result-box">
          <span className="result-operation">{num1} + {num2} =</span>
          <div className="result-value">{resultado}</div>
        </div>
      )}
    </div>
  );
};

export default Sumadora;
