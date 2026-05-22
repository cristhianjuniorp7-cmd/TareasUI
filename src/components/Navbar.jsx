function Navbar() {
  return (
    <header style={{
      background: '#111827',
      color: '#f9fafb',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 14px 40px rgba(15, 23, 42, 0.16)',
    }}>
      <strong style={{ fontSize: '1rem', letterSpacing: '0.12em' }}>TareasUI</strong>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <a href='#' style={{ color: '#d1d5db', textDecoration: 'none' }}>
          Inicio
        </a>
        <a href='#' style={{ color: '#d1d5db', textDecoration: 'none' }}>
          Acerca
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
