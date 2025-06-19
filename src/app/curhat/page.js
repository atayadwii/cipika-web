'use client';
import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Curhat() {
  const pathname = usePathname();

  const [ceritaForm, setCeritaForm] = useState({
    nama: '',
    kategori: '',
    pesan: ''
  });

  const [layananForm, setLayananForm] = useState({
    nama: '',
    email: '',
    layanan: '',
    jadwal: '',
    pesan: ''
  });

  const handleCeritaChange = (e) => {
    setCeritaForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleLayananChange = (e) => {
    setLayananForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleCeritaSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'curhat'), {
        ...ceritaForm,
        createdAt: Timestamp.now()
      });
      alert('Cerita berhasil dikirim!');
      setCeritaForm({ nama: '', kategori: '', pesan: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Gagal mengirim cerita.');
    }
  };

  const handleLayananSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'layanan'), {
        ...layananForm,
        createdAt: Timestamp.now()
      });
      alert('Pemesanan berhasil dikirim!');
      setLayananForm({ nama: '', email: '', layanan: '', jadwal: '', pesan: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Gagal mengirim pemesanan.');
    }
  };

  return (
    <main className="min-vh-100 bg-light">
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

      {/* Cerita Sekarang */}
      <section className="py-5" style={{ background: 'linear-gradient(to right, #e0f7fa, #ffffff)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Cerita Sekarang</h2>
            <p className="text-muted">Ungkapkan isi hati kamu tanpa takut dihakimi.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="p-4 p-md-5 bg-white rounded-4 shadow">
                <form className="row g-4" onSubmit={handleCeritaSubmit}>
                  <div className="col-md-6">
                    <label htmlFor="nama" className="form-label">Nama (Opsional)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nama"
                      value={ceritaForm.nama}
                      onChange={handleCeritaChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="kategori" className="form-label">Kategori Cerita</label>
                    <select
                      id="kategori"
                      className="form-select"
                      value={ceritaForm.kategori}
                      onChange={handleCeritaChange}
                    >
                      <option value="">Pilih...</option>
                      <option>Hubungan</option>
                      <option>Keluarga</option>
                      <option>Kesehatan Mental</option>
                      <option>Sekolah/Kuliah</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="pesan" className="form-label">Ceritamu</label>
                    <textarea
                      className="form-control"
                      id="pesan"
                      rows="5"
                      value={ceritaForm.pesan}
                      onChange={handleCeritaChange}
                      placeholder="Tulis isi hati kamu di sini..."
                    ></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-success px-5 py-2 rounded-pill shadow-sm">
                      Kirim Cerita
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pesan Layanan */}
      <section className="py-5" style={{ background: 'linear-gradient(to right, #e0f7fa, #ffffff)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Pesan Layanan Curhat</h2>
            <p className="text-muted">Pilih layanan curhat dan kirim ceritamu lewat form ini.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="p-4 p-md-5 bg-white rounded-4 shadow">
                <form className="row g-4" onSubmit={handleLayananSubmit}>
                  <div className="col-md-6">
                    <label htmlFor="nama" className="form-label">Nama (Opsional)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nama"
                      value={layananForm.nama}
                      onChange={handleLayananChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email (Opsional)</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={layananForm.email}
                      onChange={handleLayananChange}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="layanan" className="form-label">Pilih Layanan</label>
                    <select
                      className="form-select"
                      id="layanan"
                      value={layananForm.layanan}
                      onChange={handleLayananChange}
                    >
                      <option value="">-- Pilih --</option>
                      <option value="daring">Curhat Daring (Online)</option>
                      <option value="offline">Curhat Offline (Tatap Muka)</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="jadwal" className="form-label">Jadwal yang Diinginkan (Opsional)</label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="jadwal"
                      value={layananForm.jadwal}
                      onChange={handleLayananChange}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="pesan" className="form-label">Ceritamu</label>
                    <textarea
                      className="form-control"
                      id="pesan"
                      rows="5"
                      value={layananForm.pesan}
                      onChange={handleLayananChange}
                      placeholder="Tulis apapun yang ingin kamu ceritakan..."
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-success px-5 py-2 rounded-pill shadow-sm">
                      Kirim Cerita
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}