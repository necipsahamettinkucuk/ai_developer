import Link from "next/link";

export default function OtobusPage() {
  return (
    <main className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
            <span className="inline-flex items-center rounded-full bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
              {"Otobüs Servisi"}
            </span>
            <h1 className="mt-4 text-3xl font-semibold">{"Otobüs bileti"}</h1>
            <p className="mt-2 text-sm text-slate-500">
              {"Uygun seferleri listele, tek adımda güvenle satın al."}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase text-slate-400">Nereden</p>
                <p className="mt-1 text-sm font-medium text-slate-700">{"İzmir"}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase text-slate-400">Nereye</p>
                <p className="mt-1 text-sm font-medium text-slate-700">Antalya</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase text-slate-400">Tarih</p>
                <p className="mt-1 text-sm font-medium text-slate-700">{"14 Şubat"}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase text-slate-400">Yolcu</p>
                <p className="mt-1 text-sm font-medium text-slate-700">{"2 yetişkin"}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Seferleri listele
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
            <h2 className="text-lg font-semibold">Servis durumu</h2>
            <p className="mt-2 text-sm text-slate-500">
              {"Otobüs microservisi canlı durumda ve istekleri karşılıyor."}
            </p>
            <div className="mt-4 grid gap-3 text-sm">
              <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <span className="text-slate-600">Fiyat motoru</span>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
                  Aktif
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <span className="text-slate-600">{"Koltuk haritası"}</span>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
                  Aktif
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <span className="text-slate-600">{"İptal & iade"}</span>
                <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">
                  {"İzleniyor"}
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/ucak"
                className="rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-600"
              >
                {"Uçak servisine geç"}
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
