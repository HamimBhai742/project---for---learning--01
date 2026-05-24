const donationAmounts = ["৫০০", "১,০০০", "২,০০০", "৫,০০০"];

const purposes = [
  "শীতবস্ত্র বিতরণ",
  "শিক্ষা সহায়তা",
  "স্বাস্থ্য সেবা",
  "বৃক্ষরোপণ",
  "রক্তদান কার্যক্রম",
  "সাধারণ তহবিল",
];

const paymentMethods = [
  { name: "জিমেইল", number: "shishukishursocialservice@gmail.com", type: "Contact" },
  { name: "হোয়াটসঅ্যাপ", number: "whatsapp.com/dl", type: "Message" },
  { name: "ব্যাংক", number: "যোগাযোগ করুন", type: "Account Details" },
];

export default function DonatePage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-wider text-emerald-300">
            দান করুন
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
            আপনার সহযোগিতা একটি মানবিক কাজকে এগিয়ে নিতে পারে
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            শিশু কিশোর সমাজ সেবা সংগঠনের শিক্ষা, স্বাস্থ্য, রক্তদান, শীতবস্ত্র এবং
            পরিবেশ প্রকল্পে নিরাপদে অনুদান দিন।
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <aside className="rounded-lg bg-[#0b7a3b] p-7 text-white sm:p-8">
          <p className="text-sm font-black uppercase tracking-wider text-emerald-100">
            অনুদানের মাধ্যম
          </p>
          <h2 className="mt-3 text-3xl font-black">পেমেন্ট তথ্য</h2>
          <div className="mt-6 grid gap-4">
            {paymentMethods.map((method) => (
              <div key={method.name} className="rounded-md border border-white/15 bg-white/10 p-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-lg font-black">{method.name}</p>
                  <span className="rounded bg-[#f3c848] px-2 py-1 text-xs font-black text-slate-950">
                    {method.type}
                  </span>
                </div>
                <p className="mt-2 font-bold text-emerald-50">{method.number}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-emerald-50">
            অনুদান পাঠানোর পর আপনার নাম, নম্বর ও ট্রানজেকশন আইডি আমাদের জানান।
          </p>
        </aside>

        <div className="rounded-lg border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-950/10 sm:p-8">
          <p className="text-sm font-black uppercase tracking-wider text-[#0b7a3b]">
            ডোনেশন ফর্ম
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950">অনুদানের তথ্য দিন</h2>

          <div className="mt-7 grid gap-6">
            <div>
              <p className="text-sm font-bold text-slate-700">অনুদানের পরিমাণ</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-4">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className="h-12 rounded-md border border-emerald-100 bg-emerald-50 font-black text-[#0b7a3b] transition-colors hover:border-[#0b7a3b] hover:bg-white"
                  >
                    ৳ {amount}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                পূর্ণ নাম
                <input
                  type="text"
                  name="donor-name"
                  placeholder="আপনার নাম"
                  className="h-11 rounded-md border border-slate-200 px-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#0b7a3b] focus:ring-2 focus:ring-emerald-100"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                মোবাইল নম্বর
                <input
                  type="tel"
                  name="donor-phone"
                  placeholder="০১XXXXXXXXX"
                  className="h-11 rounded-md border border-slate-200 px-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#0b7a3b] focus:ring-2 focus:ring-emerald-100"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                অনুদানের খাত
                <select
                  name="donation-purpose"
                  defaultValue=""
                  className="h-11 rounded-md border border-slate-200 bg-white px-3 text-slate-900 outline-none focus:border-[#0b7a3b] focus:ring-2 focus:ring-emerald-100"
                >
                  <option value="" disabled>খাত নির্বাচন করুন</option>
                  {purposes.map((purpose) => (
                    <option key={purpose}>{purpose}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                ট্রানজেকশন আইডি
                <input
                  type="text"
                  name="transaction-id"
                  placeholder="TrxID লিখুন"
                  className="h-11 rounded-md border border-slate-200 px-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#0b7a3b] focus:ring-2 focus:ring-emerald-100"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-bold text-slate-700">
              মন্তব্য
              <textarea
                name="donation-note"
                rows={4}
                placeholder="কোনো বিশেষ নির্দেশনা থাকলে লিখুন"
                className="resize-none rounded-md border border-slate-200 px-3 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#0b7a3b] focus:ring-2 focus:ring-emerald-100"
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:shishukishursocialservice@gmail.com"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#0b7a3b] px-6 font-bold text-white transition-colors hover:bg-[#086431]"
              >
                তথ্য পাঠাতে ইমেইল করুন
              </a>
              <a
                href="mailto:shishukishursocialservice@gmail.com"
                className="inline-flex h-12 items-center justify-center rounded-md border border-emerald-200 px-6 font-bold text-[#0b7a3b] transition-colors hover:bg-emerald-50"
              >
                ইমেইল করুন
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
