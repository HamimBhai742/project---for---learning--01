export default function ContactPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-wider text-emerald-300">
            যোগাযোগ
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
            আমাদের সাথে যোগাযোগ করুন
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            সদস্যপদ, অনুদান, রক্তদান বা যেকোনো সামাজিক কার্যক্রম সম্পর্কে জানতে
            নিচের তথ্য ব্যবহার করুন।
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-6">
          <h2 className="text-xl font-black text-slate-950">ঠিকানা</h2>
          <p className="mt-4 leading-8 text-slate-600">
            সংগঠনের অবস্থান গুগল ম্যাপে দেখুন।
          </p>
        </div>
        <div className="rounded-lg border border-emerald-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black text-slate-950">গুগল ম্যাপ</h2>
          <a href="https://maps.app.goo.gl/KxASahZDPC8kbuFD6" target="_blank" rel="noreferrer" className="mt-4 block font-black text-[#0b7a3b]">
            সংগঠনের গুগল ম্যাপ
          </a>
        </div>
        <div className="rounded-lg border border-emerald-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black text-slate-950">ইমেইল</h2>
          <a href="mailto:shishukishursocialservice@gmail.com" className="mt-4 block font-black text-[#0b7a3b]">
            shishukishursocialservice@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
