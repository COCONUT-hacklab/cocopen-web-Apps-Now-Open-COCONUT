// components/Navbar.js
import Link from 'next/link';
import '../app/about/page';
import '../app/contact/page';
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">MyApp</h1>
        <div className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
            Beranda
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
            Tentang
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
            Kontak
          </Link>
        </div>
      </div>
    </nav>
  );
}