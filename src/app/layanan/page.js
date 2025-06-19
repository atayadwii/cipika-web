'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Layanan() {
  const pathname = usePathname();

  return (
    <main className="layanan-page">
      {/* Header */}
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

      {/* Layanan Section */}
      <section id="layanan" className="services section py-5">
        <div className="container section-title text-center mb-5">
          <h1>Layanan Kami</h1>
          <p>Cipika menyediakan berbagai layanan untuk mendukung kebutuhan kamu dalam bercerita dan didengarkan.</p>
        </div>

        {/* Fitur Utama */}
        <div className="container mb-5">
          <div className="row gy-4 justify-content-center">
            <div className="col-md-4">
              <div className="card h-100 bg-white border-0 shadow rounded-4 p-4 hover-shadow transition">
                <div className="card-body text-center">
                  <i className="bi bi-chat-left-text fs-1 text-success mb-3"></i>
                  <h5 className="card-title fw-semibold">Curhat Anonim</h5>
                  <p className="card-text text-muted">
                    Kirim cerita tanpa identitas. Tim kami akan membacanya dengan empati tanpa menghakimi.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 bg-white border-0 shadow rounded-4 p-4 hover-shadow transition">
                <div className="card-body text-center">
                  <i className="bi bi-shield-lock fs-1 text-success mb-3"></i>
                  <h5 className="card-title fw-semibold">Privasi Terjamin</h5>
                  <p className="card-text text-muted">
                    Semua cerita kamu dijaga kerahasiaannya. Tidak ada data pribadi yang disimpan.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 bg-white border-0 shadow rounded-4 p-4 hover-shadow transition">
                <div className="card-body text-center">
                  <i className="bi bi-clock-history fs-1 text-success mb-3"></i>
                  <h5 className="card-title fw-semibold">Akses 24/7</h5>
                  <p className="card-text text-muted">
                    Kapan pun kamu butuh ruang bercerita, Cipika selalu siap menemani.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metode Konsultasi */}
        <div className="container">
          <div className="row gy-4 justify-content-center">
            {/* Offline Service */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item item-cyan position-relative p-4 rounded-4 shadow-sm bg-white text-center">
                <div className="icon position-relative mb-3">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="none"
                      fill="#f5f5f5"
                      d="M300,521.0C376.1,517.8,466.0,529.7,510.7,468.0C554.3,407.6,508.0,328.9,491.2,256.3C474.5,184.0,479.9,96.6,416.2,58.6C348.8,18.5,261.9,40.5,193.5,78.9C130.4,114.3,98.3,179.9,76.7,249.0C51.9,328.5,13.7,421.8,66.5,486.1C119.0,550.1,217.2,524.3,300,521.0"
                    ></path>
                  </svg>
                  <i className="bi bi-activity position-absolute top-50 start-50 translate-middle fs-2 text-success"></i>
                </div>
<Link href="/curhat" className="stretched-link text-decoration-none text-dark">
  <h3 className="mt-3">Offline</h3>
</Link>
                <p className="text-muted">
                  Layanan curhat secara langsung melalui komunitas dan relawan yang telah terlatih.
                </p>
              </div>
            </div>

            {/* Daring Service */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item item-orange position-relative p-4 rounded-4 shadow-sm bg-white text-center">
                <div className="icon position-relative mb-3">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="none"
                      fill="#f5f5f5"
                      d="M300,582.0C382.5,586.8,449.9,525.3,502.5,461.5C556.6,396.0,615.8,314.2,586.6,234.5C558.9,158.8,454.9,164.0,381.4,130.7C312.1,99.4,248.9,18.6,179.8,50.5C110.5,82.5,119.8,180.8,109.1,256.4C100.0,320.3,92.1,384.0,124.7,439.7C164.8,508.0,220.9,577.5,300,582.0"
                    ></path>
                  </svg>
                  <i className="bi bi-broadcast position-absolute top-50 start-50 translate-middle fs-2 text-success"></i>
                </div>
<Link href="/curhat" className="stretched-link text-decoration-none text-dark">
  <h3 className="mt-3">Daring</h3>
</Link>
                <p className="text-muted">
                  Layanan curhat daring melalui form anonim, chat, dan forum diskusi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}