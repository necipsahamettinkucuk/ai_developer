import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hasobilet",
  description:
    "Otobüs ve uçak biletlerinde hızlı arama ve güvenli ödeme.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="font-sans">
        <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
          <header className="sticky top-0 z-40 border-b border-white/70 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link
                href="/"
                className="flex items-center gap-3 text-lg font-semibold text-slate-900"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-red-600 text-white">
                  H
                </span>
                <span>hasobilet</span>
              </Link>
              <nav className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Link
                  className="rounded-full px-4 py-2 transition hover:bg-slate-100"
                  href="/"
                >
                  Ana Sayfa
                </Link>
                <Link
                  className="rounded-full px-4 py-2 transition hover:bg-slate-100"
                  href="/otobus"
                >
                  Otobüs
                </Link>
                <Link
                  className="rounded-full px-4 py-2 transition hover:bg-slate-100"
                  href="/ucak"
                >
                  Uçak
                </Link>
                <Link
                  className="rounded-full px-4 py-2 transition hover:bg-slate-100"
                  href="/otel"
                >
                  Otel
                </Link>
              </nav>
            </div>
          </header>
          {children}
          <footer className="border-t border-slate-200/80 bg-white/70">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-sm text-slate-500">
              <span>Hasobilet • Güvenli biletleme</span>
              <span>Otobüs • Uçak • Otel</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
