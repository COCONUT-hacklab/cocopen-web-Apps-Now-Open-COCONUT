// pages/contact.js
import Image from "next/image";
import "../../components/Navbar"
import Link from "next/link";
export default function Contact() {

  return (
    <div className="bg-gray-100 font-sans min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-sky-700 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Image
            src="/logo-4.png"
            alt="Logo"
            width={32}
            height={32}
          />

          {/* Menu Navigasi */}
          <nav className="flex space-x-6">
            <a href="#" className="hover:underline transition duration-200">
              BERANDA
            </a>
            <Link href="/about" className="hover:underline transition duration-200">ABOUT</Link>
            <Link href="/actifity" className="hover:underline transition duration-200">ACTIVITY</Link>
            <Link href="contact" className="hover:underline transition duration-200">CONTACT</Link>
          </nav>

          {/* Ikon Profil */}
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/vector.png"
              alt="Profil"
              width={40}
              height={40}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* Judul Kontak */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-blue-500">Contact us</h1>
          <p className="text-sm mt-2">
            Kami terbuka untuk pertanyaan, maupun pendaftaran anggota baru. <br />
            Jangan ragu untuk menghubungi kami lewat form di bawah!
          </p>
        </section>

        {/* Form Kontak & Peta */}
        <div className="flex flex-col md:flex-row gap-14">
          {/* Form Kontak */}
          <div className="w-full md:w-2/3">
            <form className="space-y-4">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="h-9">First name</p>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <p className="h-9">Last name</p>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <p>Email</p>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              {/* Phone Number */}
              <div>
                <p>Phone Number</p>
                <div className="relative">
                  <select className="absolute top-0 left-0 w-20 h-full bg-transparent border-none text-gray-500">
                    <option value="+1">US</option>
                    <option value="+62">ID</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="+62 000-0000-000"
                    className="w-full p-2 pl-20 border border-gray-300 rounded"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <p>Message</p>
                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full p-2 border border-gray-300 rounded"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-sky-700 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Peta Lokasi */}
          <div className="w-full md:w-1/3">
            <Image
              src="/lokasi.png"
              alt="Lokasi Kami"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-sky-700 text-white text-center py-4 mt-8">
        <p className="text-sm">
          © 2025 Coconut Lab • Dibuat dengan ❤ oleh hacklab.
        </p>
      </footer>
    </div>
  );
}