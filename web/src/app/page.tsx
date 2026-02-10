import Link from "next/link";

const highlights = [
  {
    title: "Güvenli ödeme",
    description: "Tüm işlemler SSL ve 3D Secure ile korunur.",
  },
  {
    title: "Tek ekranda karşılaştır",
    description:
      "Otobüs ve uçak alternatiflerini aynı anda gör.",
  },
  {
    title: "Hızlı iade",
    description:
      "İade ve değişiklik süreçleri tek panelden yönetilir.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-700 to-lime-500 text-white">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-56 w-56 -translate-x-24 translate-y-16 rounded-full bg-white/10 blur-3xl" />
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
              Hasobilet
            </span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              {"Türkiye'nin yolculuk merkezi"}
            </h1>
            <p className="mt-4 text-lg text-white/80">
              {"Otobüs ve uçak biletlerini tek ekranda karşılaştır, güvenle satın al."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/otobus"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-lg shadow-emerald-900/30 transition hover:-translate-y-0.5"
              >
                {"Otobüs Bileti"}
              </Link>
              <Link
                href="/ucak"
                className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                {"Uçak Bileti"}
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
              <h2 className="text-xl font-semibold">{"Hızlı arama"}</h2>
              <p className="mt-2 text-sm text-slate-500">
                {"Sadece birkaç tıklamayla doğru seferi bulun."}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-xs font-semibold uppercase text-slate-400">Nereden</p>
                  <p className="mt-1 text-sm font-medium text-slate-700">
                    {"İstanbul"}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-xs font-semibold uppercase text-slate-400">Nereye</p>
                  <p className="mt-1 text-sm font-medium text-slate-700">Ankara</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-xs font-semibold uppercase text-slate-400">Tarih</p>
                  <p className="mt-1 text-sm font-medium text-slate-700">{"12 Şubat"}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-xs font-semibold uppercase text-slate-400">Yolcu</p>
                  <p className="mt-1 text-sm font-medium text-slate-700">{"1 yetişkin"}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/otobus"
                  className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  {"Otobüs seferi ara"}
                </Link>
                <Link
                  href="/ucak"
                  className="rounded-full bg-lime-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-lime-600"
                >
                  {"Uçak bileti ara"}
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">{"Hasobilet ayrıcalıkları"}</h3>
              <p className="mt-2 text-sm text-slate-500">
                {"Yolculuğun her aşamasında sana eşlik eden servisler."}
              </p>
              <div className="mt-4 grid gap-3 text-sm text-slate-600">
                <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{"7/24 destek ve hızlı iade süreçleri"}</span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-lime-500" />
                  <span>{"Tek panelde otobüs ve uçak yönetimi"}</span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Esnek tarih ve kampanya bildirimleri</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
