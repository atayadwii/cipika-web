'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();

  return (
    <>
      {/* Header */}
      <header className="header bg-light p-3 sticky-top">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="sitename">Cipika</h1>
          <nav id="navmenu" className="navmenu">
            <ul className="d-flex gap-4 list-unstyled m-0">
              {[
                { href: '/', label: 'Home' },
                { href: '/tentang', label: 'Tentang' },
                { href: '/layanan', label: 'Layanan' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-dark text-decoration-none ${
                      pathname === href ? 'fw-bold text-success' : 'hover:text-success'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="main" style={{ background: 'linear-gradient(to right, #e0f7fa, #ffffff)' }}>
        {/* Hero */}
        <section
          className="hero text-center py-5"
          style={{
            backgroundImage: "url('/assets/img/BG.1.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
          }}
        >
          <div className="container">
            <h2>CURHAT WITH CIPIKA</h2>
            <p>Tempat Layanan Curhat Terpercaya Anda</p>
            <Link
              href="/curhat"
              className="btn btn-success px-4 text-white text-decoration-none"
            >
              Curhat Sekarang
            </Link>
          </div>
        </section>

        {/* Permasalahan */}
        <section id="skills" className="skills section py-5"  style={{ background: 'linear-gradient(to right, #e0f7fa, #ffffff)' }}>
          <div className="container section-title text-center mb-4" data-aos="fade-up">
            <h2>Permasalahan yang sering dihadapi</h2>
            <p>Masalah yang sering dibahas dan kami hadapi dari rata-rata pengguna</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row skills-content">
              <div className="col-lg-6">
                {[
                  ['Rumah Tangga', 100],
                  ['Pasangan', 90],
                  ['Ekonomi', 75],
                ].map(([label, val]) => (
                  <div key={label} className="progress mb-3">
                    <span className="skill d-flex justify-content-between">
                      <span>{label}</span>
                      <i className="val">{val}%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" style={{ width: `${val}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-lg-6">
                {[
                  ['Politik', 80],
                  ['Depresi', 90],
                  ['Pembulian', 55],
                ].map(([label, val]) => (
                  <div key={label} className="progress mb-3">
                    <span className="skill d-flex justify-content-between">
                      <span>{label}</span>
                      <i className="val">{val}%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" style={{ width: `${val}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statistik */}
        <section className="stats py-5"  style={{ background: 'linear-gradient(to right, #e0f7fa, #ffffff)' }}>
          <div className="container text-center">
            <h2>Total Pengguna</h2>
            <p>Ini adalah jumlah pengguna yang sudah berlayanan dengan jasa kami</p>
            <div className="row mt-4">
              {[
                ['232', 'Anak Remaja'],
                ['521', 'Pekerja'],
                ['1453', 'Ibu Rumah Tangga'],
                ['32', 'Mahasiswa'],
              ].map(([angka, label]) => (
                <div key={label} className="col-md-3">
                  <h4>{angka}</h4>
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer bg-white py-4">
        <div className="container text-center">
          <p>&copy; 2025 Cipika. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}