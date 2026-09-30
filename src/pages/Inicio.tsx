import React from 'react';

const Inicio: React.FC = () => {
  const nombre = 'Angel';
  const apellido = 'Olaverria';
  const correo = '20241178@itla.edu.do';

  return (
    <div className="card">
      <h2 className="card-title">Datos Personales</h2>

      <div className="foto-container">
        <div className="foto-marco-2x2">
          <img src="/foto para el CV.png" alt="Foto 2x2" className="foto-2x2" />
        </div>
      </div>

      <div className="datos-lista">
        <div className="dato-item">
          <div>
            <span className="dato-titulo">Nombre:</span>
            <span className="dato-valor">{nombre}</span>
          </div>
        </div>

        <div className="dato-item">
          <div>
            <span className="dato-titulo">Apellido:</span>
            <span className="dato-valor">{apellido}</span>
          </div>
        </div>

        <div className="dato-item">
          <div>
            <span className="dato-titulo">Correo Electrónico:</span>
            <span className="dato-valor">{correo}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
