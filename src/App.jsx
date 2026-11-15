import { useState } from 'react';

function Jar({ jar, onTap }) {
  const isSoldOut = jar.left === 0;

  return (
    <div
      onClick={() => onTap(jar.id)}
      style={{
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: isSoldOut ? '#f8fafc' : '#ffffff',
        border: isSoldOut ? '1px solid #e2e8f0' : '1px solid #cbd5e1',
        borderTop: isSoldOut ? '6px solid #94a3b8' : '6px solid teal',
        borderRadius: '12px',
        padding: '28px 20px',
        cursor: isSoldOut ? 'not-allowed' : 'pointer',
        boxShadow: isSoldOut ? 'none' : '0 4px 12px rgba(0, 0, 0, 0.06)',
        opacity: isSoldOut ? 0.75 : 1,
        userSelect: 'none',
        textAlign: 'center'
      }}
    >
      <div
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#1e293b',
          textTransform: 'capitalize'
        }}
      >
        {jar.name}
      </div>

      <div
        style={{
          fontSize: '1.25rem',
          color: '#0f766e',
          fontWeight: '700',
          margin: '14px 0'
        }}
      >
        {jar.price}
      </div>

      <span
        style={{
          padding: '8px 18px',
          borderRadius: '20px',
          fontSize: '0.95rem',
          fontWeight: 'bold',
          backgroundColor: isSoldOut ? '#fee2e2' : '#ccfbf1',
          color: isSoldOut ? '#b91c1c' : '#0f766e'
        }}
      >
        {jar.left > 0 ? `${jar.left} left` : 'Sold out'}
      </span>
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
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        boxSizing: 'border-box',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '920px',
          backgroundColor: '#f8fafc',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
          border: '1px solid #cbd5e1'
        }}
      >
        <header
          style={{
            backgroundColor: 'teal',
            padding: '24px 32px',
            textAlign: 'center'
          }}
        >
          <h1 style={{ margin: 0, color: 'white', fontSize: '2rem', letterSpacing: '0.5px' }}>
            The Stall
          </h1>
        </header>

        <main style={{ padding: '32px' }}>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap'
            }}
          >
            {jars.map((jar) => (
              <Jar key={jar.id} jar={jar} onTap={handleTap} />
            ))}
          </div>

          <div
            style={{
              marginTop: '24px',
              backgroundColor: '#0f766e',
              color: 'white',
              padding: '16px 24px',
              borderRadius: '12px',
              textAlign: 'center',
              fontSize: '1.4rem',
              fontWeight: 'bold',
              boxShadow: '0 4px 12px rgba(15, 118, 110, 0.25)'
            }}
          >
            Money {money}
          </div>
        </main>

        <footer
          style={{
            backgroundColor: '#e2e8f0',
            color: '#475569',
            textAlign: 'center',
            padding: '14px',
            fontSize: '1rem',
            fontWeight: '600',
            borderTop: '1px solid #cbd5e1'
          }}
        >
          247233
        </footer>
      </div>
    </div>
  );
}