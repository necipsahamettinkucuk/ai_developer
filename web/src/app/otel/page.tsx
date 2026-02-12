import Link from "next/link";

export default function OtelPage() {
  return (
    <main className="bg-green-50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-green-200 bg-white p-8 shadow-xl shadow-green-200/60">
            <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
              {"Otel Servisi"}
            </span>
            <h1 className="mt-4 text-3xl font-semibold">{"Otel sayfası"}</h1>
            <p className="mt-2 text-sm text-green-700/70">
              {"Konaklama seçeneklerini tek ekranda karşılaştır, güvenle rezerve et."}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase text-green-500">{"Şehir"}</p>
                <p className="mt-1 text-sm font-medium text-green-900">{"İstanbul"}</p>
              </div>
              <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase text-green-500">{"Bölge"}</p>
                <p className="mt-1 text-sm font-medium text-green-900">{"Taksim"}</p>
              </div>
              <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase text-green-500">{"Giriş"}</p>
                <p className="mt-1 text-sm font-medium text-green-900">{"16 Şubat"}</p>
              </div>
              <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase text-green-500">{"Çıkış"}</p>
                <p className="mt-1 text-sm font-medium text-green-900">{"18 Şubat"}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                {"Otelleri listele"}
              </button>
              <Link
                href="/"
                className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                Ana sayfa
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-green-200 bg-white p-6">
            <h2 className="text-lg font-semibold">{"Örnek oteller"}</h2>
            <p className="mt-2 text-sm text-green-700/70">
              {"Şehir merkezinden sahil otellerine kadar farklı segmentleri keşfet."}
            </p>
            <div className="mt-4 grid gap-3 text-sm">
              <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3">
                <p className="font-semibold text-green-900">{"Bosphorus View Hotel"}</p>
                <p className="mt-1 text-green-700/80">{"Boğaz manzarası • 4.7 puan"}</p>
              </div>
              <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3">
                <p className="font-semibold text-green-900">{"Kapadokya Taş Otel"}</p>
                <p className="mt-1 text-green-700/80">{"Butik konaklama • 4.8 puan"}</p>
              </div>
              <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3">
                <p className="font-semibold text-green-900">{"Ege Sahil Resort"}</p>
                <p className="mt-1 text-green-700/80">{"Her şey dahil • 4.6 puan"}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/otobus"
                className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                {"Otobüs servisine geç"}
              </Link>
              <Link
                href="/ucak"
                className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                {"Uçak servisine geç"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
