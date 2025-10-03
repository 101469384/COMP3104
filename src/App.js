export default function App() {
  const student = { name: "Sofiia Beliak", id: "101469384" };

  return (
    <main style={{ fontFamily: "system-ui, Arial", padding: 24, lineHeight: 1.5 }}>
      <h1>COMP3104 – Lab 05</h1>

      <section style={{
        marginTop: 16, padding: 16, border: "1px solid #e5e7eb",
        borderRadius: 12, maxWidth: 520
      }}>
        <h2 style={{ marginTop: 0 }}>Student Info</h2>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>ID:</strong> {student.id}</p>
      </section>

      <p style={{ marginTop: 24 }}>
        Woah, react Single Page App is running
      </p>
      <ul>
        <li>build: <code>npm run build</code></li>
        <li>start: <code>npm start</code></li>
      </ul>
    </main>
  );
}
