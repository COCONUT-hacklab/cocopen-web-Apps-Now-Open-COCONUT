// app/page.js
import Image from 'next/image';
import "framer-motion";
import "../../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      {/* Header */}
      <header className="bg-sky-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Image 
            src="/logo-4.png" 
            alt="Logo" 
            width={40} 
            height={40} 
            className="h-8 w-8" 
          />
          <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
          <a href="#" className="hover:underline">
            BERANDA
          </a>
          <Link href="/about" className="hover:underline transition duration-200">ABOUT</Link>
            <Link href="/actifity" className="hover:underline transition duration-200">ACTIVITY</Link>
            <Link href="contact" className="hover:underline transition duration-200">CONTACT</Link>
        </nav>
          <div>
            <Image 
              src="/vector.png" 
              alt="Profil" 
              width={32} 
              height={32} 
              className="w-8 h-8 rounded-full object-cover" 
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 text-center">
        {/* Section 1: Coconut Open Class */}
        <section className="mb-8">
          <h1 className="text-xl sm:text-4xl font-bold text-blue-400 mb-2 pt-20">COCONUT OPEN CLASS</h1>
          <div className="pt-20"><h3 className="text-sm sm:text-lg italic mb-2 text-black">Mencerdaskan Kehidupan Bangsa</h3>
          <h3 className="text-sm sm:text-lg text-black">Membuka Pengetahuan, Menghubungkan Pikiran.</h3></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-20">
            <Image src="/Coc2-1.png" alt="Poster 1" width={400} height={300} className="rounded w-full h-auto" />
            <Image src="/Coc3-1png" alt="Poster 2" width={400} height={300} className="rounded w-full h-auto" />
            <Image src="/poster-fix-1.png" alt="Poster 3" width={400} height={300} className="rounded w-full h-auto" />
          </div>
        </section>

        {/* Section 2: INESA */}
        <section className="pt-20">
          <h2 className="text-3xl sm:text-xl font-bold text-blue-800 mb-2">INESA: Inovasi dan Edukasi Desa</h2>
          <div className="flex flex-col md:flex-row mt-4 gap-6 items-center pt-20">
            <Image
              src="/inesa.png"
              alt="Group Photo"
              width={600}
              height={400}
              className="md:w-1/2 w-full rounded h-auto"
            />
            <div className="md:w-1/2 w-full text-left mt-4 md:mt-0">
              <p className="text-sm sm:text-lg text-black">
                INESA (Inovasi dan Edukasi Desa), sebuah inisiatif unggulan dari COCONUT Computer Club yang dirancang untuk membawa perubahan nyata di pedesaan. Berlandaskan pada teori pemberdayaan masyarakat dan sustainable development, INESA menggabungkan teknologi modern seperti Internet of Things (IoT), Artificial Intelligence (AI), dan penguatan infrastruktur digital untuk meningkatkan kemandirian dan kesejahteraan masyarakat desa.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-sky-700 text-white text-center p-4 mt-12">
        <p>© 2025 Coconut Lab • Dibuat dengan ❤ oleh hacklab</p>
      </footer>
    </div>
  );
}