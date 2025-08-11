// app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Selamat Datang di Proyek Next.js</h1>
      <p>Ini adalah halaman utama saya.</p>
      <Link href="/about">
        <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>
          Ke Halaman Tentang
        </button>
      </Link>
    </main>
  );
}