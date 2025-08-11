import Image from "next/image";
import "framer-motion";
import "../../components/Navbar";
import Link from "next/link";

export default function about() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center p-4 bg-sky-700 text-white top-0 left-0 w-full z-50">
        <div className="flex items-center">
          <Image
            src="/logo-4.png"
            alt="Logo"
            width={40}
            height={40}
            className="mr-2"
            style={{ width: "auto", height: "auto" }} 
          />
        </div>
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
            src="/Vector.png"
            alt="Profile"
            width={40}
            height={40}
            style={{ width: "auto", height: "auto" }} // Fix aspect ratio warning
          />
        </div>
      </header>

      {/* Konten utama */}
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section>
          <div className="items-center text-center pt-20 p-20">
            <h1 className="text-blue-900 font-bold text-7xl">
              COCONUT Computer Club
            </h1>
          </div>
        </section>

        <div>
          <Image
            src="/Group 312.png"
            alt="Group"
            width={400}
            height={400}
            sizes="(max-width: 768px) 100vw, 800px"
            className="mx-auto w-full max-w-[1200px] h-auto"
            style={{ width: "auto", height: "auto" }} // Fix aspect ratio warning
          />
        </div>

        <div className="container mx-auto px-4 py-12 space-y-20 items-center pt-40">
          {/* Sejarah */}
          <section id="sejarah" className="mb-16">
            <div className="flex flex-wrap gap-10 items-center justify-center text-center">
              <div className="flex-1 min-w-[300px] max-w-lg space-y-4 text-left text-3xl">
                <p>Club Komputer Berorientasi Jaringan, Utilitas & Teknologi (COCONUT) didirikan pada April 2008 di Sekolah Manajemen Informatika dan Komputer (STMIK Profesional, Indonesia) untuk melakukan kegiatan penelitian dan pengembangan di bidang Ilmu Komputer dan Teknologi Informasi. COCONUT diharapkan menjadi sebuah lembaga penelitian terapan yang maju dan berkualitas tinggi, yang bekerja sama dengan industri dan lembaga akademik lainnya di tingkat nasional dan internasional untuk mewujudkan revolusi TI di Indonesia dan membantu membangun ekonomi berbasis pengetahuan.</p>
              </div>
              <div className="flex-1 min-w-[300px] rounded-lg flex items-center justify-center">
                <Image
                  src="/hasil-citra-grescyle.jpg" // Diubah untuk hindari spasi (rename file di public/)
                  alt="Logo"
                  width={100}
                  height={100}
                  style={{ width: "auto", height: "auto" }} // Fix aspect ratio warning
                />
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 max-h-10 gap-10 pt-30 max-w-5xl pl-40">
            {/* Card 1 */}
            <div className="bg-sky-100 p-6 rounded-lg shadow text-center hover:-translate-y-1 hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <Image
                  src="/kalender.png"
                  alt="Kalender"
                  width={40}
                  height={40}
                  style={{ width: "auto", height: "auto" }} // Fix aspect ratio warning
                />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Tahun 2008</h3>
              <p className="text-gray-700">
                didirikan pada April 2008 di STIMIK Profesional
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-sky-100 p-6 rounded-lg shadow text-center hover:-translate-y-1 hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <Image
                  src="/vektor-1.png"
                  alt="vektor"
                  width={40}
                  height={40}
                  style={{ width: "auto", height: "auto" }} // Fix aspect ratio warning
                />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">100+</h3>
              <p className="text-gray-700">Jumlah Anggota Hingga saat ini</p>
            </div>

            {/* Card 3 */}
            <div className="bg-sky-100 p-6 rounded-lg shadow text-center hover:-translate-y-1 hover:shadow-lg transition">
              <div className="flex justify-center mb-6 animate-fadeInUp">
                <Image
  src="/vektor-2.png"
  alt="bangunan"
  width={40}
  height={40}
  style={{ width: "auto", height: "auto" }}
/>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">4+</h3>
              <p className="text-gray-700">
                Universitas yang telah bergabung dengan kami
              </p>
            </div>
          </div>

          <section className="pt-60 px-4">
            <h1 className="text-center text-sky-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">COCONUT: Kolaborasi, Inovasi, dan Legalitas</h1>
            <div className="flex flex-wrap gap-10 items-center justify-center pt-30">
              <div className="flex-1 min-w-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/collegecampus-amico-1.png"
                  alt="College Campus"
                  width={600}
                  height={600}
                  style={{ width: "auto", height: "auto" }} // Fix aspect ratio warning
                />
              </div>
              <div className="flex-1 min-w-[300px] max-w-lg space-y-4 text-3xl">
                <p>COCONUT telah memperluas keanggotaannya</p>
                <p>di luar STMIK Profesional dengan mengikut</p>
                <p>sertakan mahasiswa dari berbagai universitas, seperti:</p>
                <ul className="list-disc pl-5">
                  <li>Universitas Muhammadiyah (UNISMUH)</li>
                  <li>Universitas Negeri Makassar (UNM)</li>
                  <li>Universitas Hasanuddin (UNHAS)</li>
                  <li>Universitas Muslim Indonesia (UMI)</li>
                  <li>Universitas Islam Negeri (UIN)</li>
                </ul>
                <p>Terdaftar resmi di Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia dengan nomor registrasi AHU-0012037.AH.01.07.TAHUN 2022 COCONUT berdedikasi untuk mencetak generasi baru peneliti dan insinyur muda.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer full width */}
      <footer className="bg-sky-700 text-white text-center p-4 w-full">
        <p>© 2025 Coconut Lab • Dibuat dengan ❤ oleh hacklab</p>
      </footer>
    </div>
  );
}