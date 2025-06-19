'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Tentang() {
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

      {/* Main Content */}
      <main style={{ background: 'linear-gradient(to right, #e0f7fa, #ffffff)' }}>
        {/* Section: Latar Belakang */}
        <section className="py-5" style={{ background: 'linear-gradient(to right, #e0f7fa, #ffffff)' }}>
          <div className="container section-title text-center mb-4" data-aos="fade-up">
            <h1>Latar Belakang</h1>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <p className="py-3">
                  Di era digital, isu kesehatan mental dan kebutuhan ruang aman untuk berbagi cerita
                  menjadi semakin penting, khususnya bagi generasi muda. Namun, masih banyak orang
                  yang ragu untuk curhat secara langsung karena alasan privasi dan stigma sosial.
                  Oleh karena itu, Cipika hadir sebagai solusi platform curhat online yang aman,
                  anonim, dan mudah diakses.
                </p>
              </div>
            </div>
          </div>

          <div className="container section-title text-center mt-5" data-aos="fade-up">
            <h1>Apa itu Cipika?</h1>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <p className="py-3">
                  Cipika adalah ruang curhat online yang bisa kamu akses kapan pun saat butuh tempat
                  bercerita. Tanpa takut dihakimi, kamu bisa menyampaikan isi hati secara anonim dan
                  merasa benar-benar didengarkan. Cipika hadir untuk kamu yang lelah, bingung, atau
                  hanya ingin melepas unek-unek yang selama ini dipendam sendiri. Tanpa login, tanpa
                  syarat—cukup buka websitenya, dan ceritakan apa yang kamu rasakan. Karena kadang,
                  yang kita butuhkan hanyalah satu hal sederhana: didengarkan.
                </p>
                <p>
                  Entah itu tentang rasa lelah yang tak bisa kamu bagi ke orang terdekat, masalah
                  hidup yang terasa menyesakkan, atau sekadar unek-unek kecil yang selama ini kamu
                  pendam sendiri, Cipika akan selalu membuka ruang untuk kamu bercerita. Di balik
                  setiap pesan yang kamu kirim, ada seseorang yang benar-benar membaca dan mencoba
                  memahami tanpa menghakimi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Tim */}
        <section className="contact section py-5"  style={{ background: 'linear-gradient(to right, #e0f7fa, #ffffff)' }}>
          <div className="container" data-aos="fade-up">
            <div className="section-title text-center mb-5">
              <h2>Kenalan dengan Kami Yuk!</h2>
              <p>Kami hadir untuk mendengarkan dan menemani cerita kamu.</p>
            </div>

            <div className="row justify-content-center gy-4">
              {[
                {
                  nama: 'Shinta Nur Alyani',
                  img: '/assets/img/person1.jpeg',
                  desc: 'ketua Mudeng',
                },
                {
                  nama: 'Ataya Dwi Tirtoyono',
                  img: '/assets/img/person2.HEIC',
                  desc: 'Pacarnya Afiah',
                },
                {
                  nama: 'Nicola indy ariana grande',
                  img: '/assets/img/person3.jpeg',
                  desc: 'Temennya Shinta',
                },
              ].map(({ nama, img, desc }) => (
                <div key={nama} className="col-md-4 text-center">
                  <img
                    src={img}
                    alt={nama}
                    className="rounded-circle shadow"
                    style={{
                      width: '200px',
                      height: '200px',
                      objectFit: 'cover',
                    }}
                  />
                  <h5 className="mt-3 mb-0">{nama}</h5>
                  <p className="text-muted">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}