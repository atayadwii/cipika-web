'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Tentang() {
  const pathname = usePathname(); // ✅ Tambahkan ini

  return (
    <>
      <main className="about-page">
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

        {/* Section: Latar Belakang */}
        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h1>Latar Belakang</h1>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-8 content">
                <p className="py-3">
                Di era digital, isu kesehatan mental dan
                kebutuhan ruang aman untuk berbagi cerita
                menjadi semakin penting, khususnya bagi
                generasi muda. Namun, masih banyak orang
                yang ragu untuk curhat secara langsung
                karena alasan privasi dan stigma sosial. Oleh
                karena itu, Cipika hadir sebagai solusi platform
                curhat online yang aman, anonim, dan mudah
                diakses.
                </p>
              </div>
            </div>
          </div>

          <div className="container section-title" data-aos="fade-up">
            <h1>Apa itu cipika?</h1>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-8 content">
                <p className="py-3">
                   Cipika adalah ruang curhat online yang bisa kamu akses kapan pun saat butuh tempat bercerita.
              Tanpa takut dihakimi, kamu bisa menyampaikan isi hati secara anonim dan merasa benar-benar didengarkan.
              Cipika hadir untuk kamu yang lelah, bingung, atau hanya ingin melepas unek-unek yang selama ini dipendam sendiri.
              Tanpa login, tanpa syarat—cukup buka websitenya, dan ceritakan apa yang kamu rasakan.
              Karena kadang, yang kita butuhkan hanyalah satu hal sederhana: didengarkan.
                </p>
                <p>
                  Entah itu tentang rasa lelah yang tak bisa kamu bagi ke orang terdekat, 
              masalah hidup yang terasa menyesakkan, atau sekadar unek-unek kecil yang selama ini 
              kamu pendam sendiri, Cipika akan selalu membuka ruang untuk kamu bercerita. Di balik 
              setiap pesan yang kamu kirim, ada seseorang yang benar-benar membaca dan mencoba memahami tanpa menghakimi.  
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Permasalahan yang sering dihadapi</h2>
            <p>Masalah yang sering dibahas dan kami hadapi dari rata-rata pengguna</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row skills-content skills-animation">
              <div className="col-lg-6">
                {[
                  ["Rumah Tangga", 100],
                  ["Pasangan", 90],
                  ["Ekonomi", 75],
                ].map(([label, val]) => (
                  <div key={label} className="progress">
                    <span className="skill"><span>{label}</span> <i className="val">{val}%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" style={{ width: `${val}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-lg-6">
                {[
                  ["Politik", 80],
                  ["Depresi", 90],
                  ["Pembulian", 55],
                ].map(([label, val]) => (
                  <div key={label} className="progress">
                    <span className="skill"><span>{label}</span> <i className="val">{val}%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" style={{ width: `${val}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section (alamat & form) */}
<section className="contact section bg-light py-5">
  <div className="container" data-aos="fade-up">
    <div className="section-title text-center mb-5">
      <h2>Kenalan dengan Tim Kami</h2>
      <p>Kami hadir untuk mendengarkan dan menemani cerita kamu.</p>
    </div>

    <div className="row justify-content-center gy-4">
      {/* Person 1 */}
      <div className="col-md-4 text-center">
        <img
          src="/assets/img/person1.jpg"
          alt="Nama 1"
          className="rounded-circle shadow"
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />
        <h5 className="mt-3 mb-0">Nama 1</h5>
        <p className="text-muted">Relawan Curhat</p>
      </div>

      {/* Person 2 */}
      <div className="col-md-4 text-center">
        <img
          src="/assets/img/person2.jpg"
          alt="Nama 2"
          className="rounded-circle shadow"
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />
        <h5 className="mt-3 mb-0">Nama 2</h5>
        <p className="text-muted">Pendengar Aktif</p>
      </div>

      {/* Person 3 */}
      <div className="col-md-4 text-center">
        <img
          src="/assets/img/person3.jpg"
          alt="Nama 3"
          className="rounded-circle shadow"
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />
        <h5 className="mt-3 mb-0">Nama 3</h5>
        <p className="text-muted">Support System</p>
      </div>
    </div>
  </div>
</section>

      </main>
    </>
  );
}