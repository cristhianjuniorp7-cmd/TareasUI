function About() {
  return (
    <section style={{ padding: '3rem 1rem', background: '#f8fafc' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '18px', boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08)', padding: '2.5rem', textAlign: 'left' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#111827' }}>Acerca del proyecto</h2>
        <p style={{ marginBottom: '1.25rem', lineHeight: '1.8', color: '#374151' }}>
          TareasUI es una aplicación de gestión de tareas diseñada para ofrecer una experiencia clara, ordenada y profesional.
          Esta interfaz permite administrar responsabilidades con facilidad, priorizar actividades y mantener un registro de los estados de cada tarea.
        </p>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          <div style={{ padding: '1.25rem', borderRadius: '14px', background: '#f9fafb', border: '1px solid #e5e7eb' }}>
            <h3 style={{ margin: '0 0 0.75rem', color: '#111827' }}>Objetivo</h3>
            <p style={{ margin: 0, color: '#4b5563' }}>
              Organizar tareas diarias con una estructura formal y accesible, enfocada en la claridad del proceso y el seguimiento eficiente.
            </p>
          </div>
          <div style={{ padding: '1.25rem', borderRadius: '14px', background: '#f9fafb', border: '1px solid #e5e7eb' }}>
            <h3 style={{ margin: '0 0 0.75rem', color: '#111827' }}>Metodología</h3>
            <p style={{ margin: 0, color: '#4b5563' }}>
              Cada tarea se presenta con su título, descripción y estado, para que el equipo pueda identificar avances y pendientes de manera profesional.
            </p>
          </div>
          <div style={{ padding: '1.25rem', borderRadius: '14px', background: '#f9fafb', border: '1px solid #e5e7eb' }}>
            <h3 style={{ margin: '0 0 0.75rem', color: '#111827' }}>Visión</h3>
            <p style={{ margin: 0, color: '#4b5563' }}>
              Ofrecer una herramienta sencilla pero robusta para quienes desean mejorar la disciplina de sus procesos diarios y completar sus responsabilidades con confianza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
