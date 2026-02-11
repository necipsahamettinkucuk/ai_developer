import Link from "next/link";

export default function OtelPage() {
  return (
    <main className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
            <span className="inline-flex items-center rounded-full bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              {"Otel Servisi"}
            </span>
            <h1 className="mt-4 text-3xl font-semibold">{"Otel sayfası"}</h1>
            <p className="mt-2 text-sm text-slate-500">
              {"Konaklama seçeneklerini tek ekranda karşılaştır, güvenle rezerve et."}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase text-slate-400">{"Şehir"}</p>
                <p className="mt-1 text-sm font-medium text-slate-700">{"İstanbul"}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase text-slate-400">{"Bölge"}</p>
                <p className="mt-1 text-sm font-medium text-slate-700">{"Taksim"}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase text-slate-400">{"Giriş"}</p>
                <p className="mt-1 text-sm font-medium text-slate-700">{"16 Şubat"}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase text-slate-400">{"Çıkış"}</p>
                <p className="mt-1 text-sm font-medium text-slate-700">{"18 Şubat"}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-600"
              >
                {"Otelleri listele"}
              </button>
              <Link
                href="/"
                className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Ana sayfa
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold">{"Örnek oteller"}</h2>
            <p className="mt-2 text-sm text-slate-500">
              {"Şehir merkezinden sahil otellerine kadar farklı segmentleri keşfet."}
            </p>
            <div className="mt-4 grid gap-3 text-sm">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <p className="font-semibold text-slate-700">{"Bosphorus View Hotel"}</p>
                <p className="mt-1 text-slate-500">{"Boğaz manzarası • 4.7 puan"}</p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <p className="font-semibold text-slate-700">{"Kapadokya Taş Otel"}</p>
                <p className="mt-1 text-slate-500">{"Butik konaklama • 4.8 puan"}</p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <p className="font-semibold text-slate-700">{"Ege Sahil Resort"}</p>
                <p className="mt-1 text-slate-500">{"Her şey dahil • 4.6 puan"}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/otobus"
                className="rounded-full bg-amber-500/90 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-500"
              >
                {"Otobüs servisine geç"}
              </Link>
              <Link
                href="/ucak"
                className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
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
