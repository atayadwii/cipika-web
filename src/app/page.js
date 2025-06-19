'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();

  return (
    <>
      <header className="header bg-light p-3 sticky-top">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="sitename">Cipika</h1>
          <nav id="navmenu" className="navmenu">
            <ul className="d-flex gap-4 list-unstyled m-0">
              <li>
                <Link
                  href="/"
                  className={`text-dark text-decoration-none ${
                    pathname === '/' ? 'fw-bold text-success' : 'hover:text-success'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  className={`text-dark text-decoration-none ${
                    pathname === '/tentang' ? 'fw-bold text-success' : 'hover:text-success'
                  }`}
                >
                  Tentang
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan"
                  className={`text-dark text-decoration-none ${
                    pathname === '/layanan' ? 'fw-bold text-success' : 'hover:text-success'
                  }`}
                >
                  Layanan
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main">
        <section className="hero text-center py-5" style={{ backgroundImage: "url('/assets/img/BG.1.jpg')", backgroundSize: 'cover', color: '#fff' }}>
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

        <section className="stats py-5">
          <div className="container text-center">
            <h2>Total Pengguna</h2>
            <p>Ini adalah jumlah pengguna yang sudah berlayanan dengan jasa kami</p>
            <div className="row mt-4">
              <div className="col-md-3"><h4>232</h4><p>Anak Remaja</p></div>
              <div className="col-md-3"><h4>521</h4><p>Pekerja</p></div>
              <div className="col-md-3"><h4>1453</h4><p>Ibu Rumah Tangga</p></div>
              <div className="col-md-3"><h4>32</h4><p>Mahasiswa</p></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer bg-light py-4">
        <div className="container text-center">
          <p>&copy; 2025 Cipika. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}