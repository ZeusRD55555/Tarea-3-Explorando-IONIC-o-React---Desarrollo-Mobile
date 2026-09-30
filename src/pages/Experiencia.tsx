import React from 'react';

const YOUTUBE_VIDEO_ID = '6jtM1RU8cFY';

const Experiencia: React.FC = () => {
  return (
    <div className="card">
      <h2 className="card-title">Experiencia Personal</h2>

      <p style={{ textAlign: 'center', marginBottom: '20px', color: '#4b5563', lineHeight: '1.5' }}>
        En el siguiente video explico mi experiencia personal al realizar esta tarea.
      </p>

      <div style={{
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        backgroundColor: '#000000'
      }}>
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0
          }}
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
          title="Video de Experiencia Personal"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Experiencia;
