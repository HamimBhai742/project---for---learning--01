import Link from "next/link";
import type { FooterPageKey } from "@/data/footerPages";
import { footerPages } from "@/data/footerPages";

export default function InfoPage({ pageKey }: { pageKey: FooterPageKey }) {
  const page = footerPages[pageKey];

  return (
    <div className="bg-white text-slate-900">
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-wider text-emerald-300">
            {page.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            {page.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {page.highlights.map((item) => (
            <div key={item} className="rounded-lg border border-emerald-100 bg-emerald-50 p-5">
              <p className="font-black text-[#0b7a3b]">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {page.sections.map((section) => (
            <article key={section.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-slate-950">{section.title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{section.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg bg-[#0b7a3b] p-7 text-white sm:p-8">
          <h2 className="text-2xl font-black">আরও জানতে যোগাযোগ করুন</h2>
          <p className="mt-3 max-w-2xl leading-8 text-emerald-50">
            সংগঠনের কার্যক্রম, সদস্যপদ বা সহযোগিতা সম্পর্কে জানতে আমাদের সাথে
            সরাসরি যোগাযোগ করতে পারেন।
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-white px-5 font-bold text-[#0b7a3b] transition-colors hover:bg-emerald-50"
            >
              যোগাযোগ
            </Link>
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-md border border-white/40 px-5 font-bold text-white transition-colors hover:bg-white/10"
            >
              হোমে ফিরুন
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
