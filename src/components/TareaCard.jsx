function TareaCard({ titulo, descripcion, estado }) {
  const colorMapa = {
    completada: '#047857',
    'en curso': '#c2410c',
    pendiente: '#7c2d12',
  };

  return (
    <article style={{
      background: '#ffffff',
      border: '1px solid #d1d5db',
      borderRadius: '18px',
      padding: '1.5rem',
      boxShadow: '0 12px 28px rgba(15, 23, 42, 0.08)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1rem',
        alignItems: 'flex-start',
        marginBottom: '1rem',
      }}>
        <h3 style={{ margin: 0, fontSize: '1.15rem', color: '#111827' }}>{titulo}</h3>
        <span style={{
          color: colorMapa[estado] || '#111827',
          fontWeight: 700,
          textTransform: 'capitalize',
        }}>
          {estado}
        </span>
      </div>
      <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.75' }}>{descripcion}</p>
    </article>
  );
}

export default TareaCard;
