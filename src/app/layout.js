import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: 'Cipika',
  description: 'Tempat curhat online aman dan anonim',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* Tambahkan link CSS di sini */}
        <link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
