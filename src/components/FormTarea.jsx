import { useState } from 'react';

function FormTarea({ onSubmit }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [estado, setEstado] = useState('pendiente');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!titulo.trim() || !descripcion.trim()) {
      return;
    }

    if (onSubmit) {
      onSubmit({ titulo: titulo.trim(), descripcion: descripcion.trim(), estado });
    }

    setTitulo('');
    setDescripcion('');
    setEstado('pendiente');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
      <label style={{ display: 'grid', gap: '0.5rem', color: '#475569' }}>
        Título
        <input
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
          placeholder='Ej. Preparar presentación'
          style={{ width: '100%', padding: '0.95rem 1rem', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
        />
      </label>

      <label style={{ display: 'grid', gap: '0.5rem', color: '#475569' }}>
        Descripción
        <textarea
          value={descripcion}
          onChange={(event) => setDescripcion(event.target.value)}
          placeholder='Describe brevemente la tarea y el resultado esperado.'
          rows={4}
          style={{ width: '100%', padding: '0.95rem 1rem', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '0.95rem', resize: 'vertical' }}
        />
      </label>

      <label style={{ display: 'grid', gap: '0.5rem', color: '#475569' }}>
        Estado
        <select
          value={estado}
          onChange={(event) => setEstado(event.target.value)}
          style={{ width: '100%', padding: '0.95rem 1rem', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
        >
          <option value='pendiente'>pendiente</option>
          <option value='en curso'>en curso</option>
          <option value='completada'>completada</option>
        </select>
      </label>

      <button
        type='submit'
        style={{
          width: '100%',
          padding: '0.95rem 1rem',
          borderRadius: '12px',
          border: 'none',
          background: '#4338ca',
          color: '#ffffff',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        Guardar tarea
      </button>
    </form>
  );
}

export default FormTarea;
