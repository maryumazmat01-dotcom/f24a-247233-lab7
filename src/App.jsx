import { useState } from 'react';

function Jar({ jar, onTap }) {
  return (
    <div
      onClick={() => onTap(jar.id)}
      style={{
        border: '1px solid #ccc',
        padding: '12px',
        marginBottom: '8px',
        cursor: 'pointer'
      }}
    >
      <strong>{jar.name}</strong> — {jar.price} —{' '}
      {jar.left > 0 ? `${jar.left} left` : 'Sold out'}
    </div>
  );
}

export default function App() {
  const [jars, setJars] = useState([
    { id: 1, name: 'honey', price: 400, left: 5 },
    { id: 2, name: 'jam', price: 250, left: 4 },
    { id: 3, name: 'oil', price: 600, left: 2 },
  ]);
  const [money, setMoney] = useState(0);

  function handleTap(id) {
    const clickedJar = jars.find((jar) => jar.id === id);
    if (clickedJar.left === 0) return;

    setJars(
      jars.map((jar) =>
        jar.id === id ? { ...jar, left: jar.left - 1 } : jar
      )
    );
    setMoney(money + clickedJar.price);
  }

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '450px', margin: '20px auto' }}>
      <header style={{ backgroundColor: 'teal', color: 'white', padding: '16px' }}>
        <h1 style={{ margin: 0 }}>Stationery</h1>
      </header>

      <main style={{ padding: '16px 0' }}>
        {jars.map((jar) => (
          <Jar key={jar.id} jar={jar} onTap={handleTap} />
        ))}

        <h3>Money {money}</h3>
      </main>

      <footer style={{ borderTop: '1px solid #ccc', paddingTop: '8px' }}>
        247233
      </footer>
    </div>
  );
}