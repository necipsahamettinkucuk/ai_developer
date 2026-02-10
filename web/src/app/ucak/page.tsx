import Link from "next/link";

export default function UcakPage() {
  return (
    <main className="bg-emerald-50/60 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-lime-50 p-8 shadow-xl shadow-emerald-200/60">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              {"Uçak Servisi"}
            </span>
            <h1 className="mt-4 text-3xl font-semibold text-emerald-950">
              {"Uçak bileti"}
            </h1>
            <p className="mt-2 text-sm text-emerald-800/70">
              {"Hızlı karşılaştır, en iyi fiyatı yakala ve rezervasyon yap."}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-100 bg-white/70 px-4 py-3">
                <p className="text-xs font-semibold uppercase text-emerald-600/70">
                  {"Kalkış"}
                </p>
                <p className="mt-1 text-sm font-medium text-emerald-900">
                  {"İstanbul (IST)"}
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-white/70 px-4 py-3">
                <p className="text-xs font-semibold uppercase text-emerald-600/70">
                  {"Varış"}
                </p>
                <p className="mt-1 text-sm font-medium text-emerald-900">
                  Berlin (BER)
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-white/70 px-4 py-3">
                <p className="text-xs font-semibold uppercase text-emerald-600/70">
                  Tarih
                </p>
                <p className="mt-1 text-sm font-medium text-emerald-900">
                  {"18 Şubat"}
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-white/70 px-4 py-3">
                <p className="text-xs font-semibold uppercase text-emerald-600/70">
                  Kabin
                </p>
                <p className="mt-1 text-sm font-medium text-emerald-900">
                  Economy
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                {"Uçuşları listele"}
              </button>
              <Link
                href="/"
                className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Ana sayfa
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-white/90 p-6">
            <h2 className="text-lg font-semibold">Servis durumu</h2>
            <p className="mt-2 text-sm text-slate-500">
              {"Uçak microservisi yüksek trafikte dahi stabil çalışır."}
            </p>
            <div className="mt-4 grid gap-3 text-sm">
              <div className="flex items-center justify-between rounded-2xl border border-emerald-100 bg-emerald-50/60 px-4 py-3">
                <span className="text-emerald-700">{"Uçuş tarifeleri"}</span>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
                  Aktif
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-emerald-100 bg-emerald-50/60 px-4 py-3">
                <span className="text-emerald-700">Fiyat optimizasyonu</span>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
                  Aktif
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-emerald-100 bg-emerald-50/60 px-4 py-3">
                <span className="text-emerald-700">Check-in entegrasyonu</span>
                <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">
                  {"İzleniyor"}
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/otobus"
                className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                {"Otobüs servisine geç"}
              </Link>
              <Link
                href="/"
                className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Ana sayfa
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
