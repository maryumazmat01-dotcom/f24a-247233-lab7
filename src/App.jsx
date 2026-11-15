function Jar({ name, price, left }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '12px', marginBottom: '8px' }}>
      <strong>{name}</strong> — {price} — {left} left
    </div>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '450px', margin: '20px auto' }}>
      <header style={{ backgroundColor: 'teal', color: 'white', padding: '16px' }}>
        <h1 style={{ margin: 0 }}>Stationery</h1>
      </header>

      <main style={{ padding: '16px 0' }}>
        <Jar name="honey" price={400} left={5} />
        <Jar name="jam" price={250} left={4} />
        <Jar name="oil" price={600} left={2} />

        <h3>Money 0</h3>
      </main>

      <footer style={{ borderTop: '1px solid #ccc', paddingTop: '8px' }}>
        247233
      </footer>
    </div>
  );
}