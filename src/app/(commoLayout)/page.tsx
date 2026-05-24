import Image from "next/image";

const stats = [
  { value: "৯+", label: "বছরের পথচলা" },
  { value: "৫০০+", label: "স্বেচ্ছাসেবী সদস্য" },
  { value: "১২০০+", label: "রক্তদাতা সংযোগ" },
  { value: "৫০+", label: "সামাজিক কার্যক্রম" },
];

const activities = [
  {
    title: "শীতবস্ত্র বিতরণ",
    text: "শীতার্ত মানুষের পাশে দাঁড়াতে প্রতিবছর কম্বল ও উষ্ণ পোশাক বিতরণ।",
    tag: "মানবসেবা",
    date: "৩০ ডিসেম্বর, ২০২৫",
  },
  {
    title: "ফ্রি ব্লাড গ্রুপিং",
    text: "গ্রামে গ্রামে ক্যাম্পেইনের মাধ্যমে তরুণদের রক্তদানে উৎসাহিত করা।",
    tag: "স্বাস্থ্য",
    date: "১৬ এপ্রিল, ২০২৬",
  },
  {
    title: "বৃক্ষরোপণ কর্মসূচি",
    text: "সবুজ পরিবেশ গড়তে শিক্ষার্থী ও এলাকাবাসীকে সঙ্গে নিয়ে বৃক্ষরোপণ।",
    tag: "পরিবেশ",
    date: "১৩ এপ্রিল, ২০২৬",
  },
];

const projects = [
  {
    id: "winter",
    title: "শীতবস্ত্র বিতরণ",
    label: "উষ্ণতার উপহার",
    text: "দরিদ্র ও শীতার্ত পরিবারের কাছে কম্বল, উষ্ণ পোশাক এবং প্রয়োজনীয় সামগ্রী পৌঁছে দেওয়া হয়।",
    impact: "২০০+ পরিবার",
  },
  {
    id: "tree",
    title: "বৃক্ষরোপণ",
    label: "সবুজ বাংলাদেশ",
    text: "স্থানীয় শিক্ষা প্রতিষ্ঠান, রাস্তা ও জনসমাগমস্থলে ফলজ, বনজ ও ঔষধি গাছ রোপণ করা হয়।",
    impact: "১৩,০০০+ গাছ",
  },
  {
    id: "education",
    title: "শিক্ষা সহায়তা",
    label: "শিক্ষার আলো",
    text: "দরিদ্র ও মেধাবী শিক্ষার্থীদের বই, খাতা, কলম, ফি এবং পরামর্শ সহায়তা দেওয়া হয়।",
    impact: "৫০+ শিক্ষার্থী",
  },
  {
    id: "health",
    title: "স্বাস্থ্য সেবা",
    label: "সুস্থ দেহ সুন্দর জীবন",
    text: "বিনামূল্যে স্বাস্থ্য ক্যাম্প, ওষুধ বিতরণ, রক্তের গ্রুপ নির্ণয় এবং স্বাস্থ্য সচেতনতা কার্যক্রম পরিচালনা করা হয়।",
    impact: "নিয়মিত ক্যাম্প",
  },
];

const advisers = [
  {
    name: "মোঃ আরমান রহমান",
    title: "প্রধান উপদেষ্টা",
    meta: "সংগঠনের উপদেষ্টা",
  },
  {
    name: "মোঃ সায়হান সৈকত",
    title: "প্রতিষ্ঠাতা উপদেষ্টা",
    meta: "প্রতিষ্ঠাতা, শিশু কিশোর সমাজ সেবা সংগঠন",
  },
  {
    name: "সম্মানিত উপদেষ্টা",
    title: "সামাজিক উপদেষ্টা",
    meta: "সংগঠনের সামাজিক উপদেষ্টা",
  },
];

const executiveCommittee = [
  { name: "সভাপতি", role: "সংগঠনের সামগ্রিক নেতৃত্ব" },
  { name: "সাধারণ সম্পাদক", role: "কার্যক্রম পরিকল্পনা ও সমন্বয়" },
  { name: "অর্থ সম্পাদক", role: "আর্থিক হিসাব ও স্বচ্ছতা" },
  { name: "সাংগঠনিক সম্পাদক", role: "সদস্য ও টিম ব্যবস্থাপনা" },
  { name: "প্রচার সম্পাদক", role: "মিডিয়া ও যোগাযোগ" },
  { name: "রক্তদান সমন্বয়ক", role: "ডোনার নেটওয়ার্ক পরিচালনা" },
];

const generalMembers = [
  "স্বেচ্ছাসেবী সদস্য",
  "রক্তদাতা সদস্য",
  "শিক্ষা সহায়তা টিম",
  "স্বাস্থ্য ক্যাম্প টিম",
  "পরিবেশ টিম",
  "ত্রাণ সহায়তা টিম",
];

const galleryItems = [
  { title: "ইফতার ও দোয়া মাহফিল", category: "রমজান কর্মসূচি" },
  { title: "শিক্ষা উপকরণ বিতরণ", category: "শিক্ষা সহায়তা" },
  { title: "শীতবস্ত্র বিতরণ", category: "মানবিক সহায়তা" },
  { title: "বৃক্ষরোপণ অভিযান", category: "সবুজ বাংলাদেশ" },
  { title: "ফ্রি স্বাস্থ্য ক্যাম্প", category: "স্বাস্থ্য সেবা" },
  { title: "পরিচ্ছন্নতা অভিযান", category: "সচেতনতা" },
];

const videos = [
  {
    title: "শিশু কিশোর সমাজ সেবা সংগঠন",
    text: "সংগঠনের যাত্রা, মানবিক কাজ ও ভবিষ্যৎ পরিকল্পনার সংক্ষিপ্ত ভিডিও।",
  },
  {
    title: "শীতবস্ত্র বিতরণ কার্যক্রম",
    text: "শীতার্ত মানুষের কাছে উষ্ণতার উপহার পৌঁছে দেওয়ার মুহূর্ত।",
  },
  {
    title: "ব্লাড গ্রুপিং ক্যাম্পেইন",
    text: "রক্তদাতা নেটওয়ার্ক বাড়াতে তরুণদের অংশগ্রহণ।",
  },
];

const bloodDonors = [
  { name: "স্বেচ্ছাসেবী ডোনার", group: "A+", area: "সংগঠনের নেটওয়ার্ক", status: "উপলব্ধ" },
  { name: "স্বেচ্ছাসেবী ডোনার", group: "B+", area: "সংগঠনের নেটওয়ার্ক", status: "যোগাযোগ করুন" },
  { name: "স্বেচ্ছাসেবী ডোনার", group: "O+", area: "সংগঠনের নেটওয়ার্ক", status: "উপলব্ধ" },
  { name: "স্বেচ্ছাসেবী ডোনার", group: "AB+", area: "সংগঠনের নেটওয়ার্ক", status: "যোগাযোগ করুন" },
];

const rules = [
  "সংগঠনের সকল কার্যক্রম অরাজনৈতিক ও মানবিক উদ্দেশ্যে পরিচালিত হবে।",
  "সদস্যদের মধ্যে পারস্পরিক সম্মান, শৃঙ্খলা ও স্বচ্ছতা বজায় রাখতে হবে।",
  "আর্থিক সহায়তা ও অনুদানের হিসাব নিয়মিতভাবে সংরক্ষণ ও প্রকাশ করা হবে।",
  "যেকোনো সামাজিক কার্যক্রমে দলগত সিদ্ধান্ত ও দায়িত্ব বণ্টন অনুসরণ করা হবে।",
];

const goals = [
  {
    title: "শিক্ষা বিস্তার",
    text: "দরিদ্র ও মেধাবী শিক্ষার্থীদের শিক্ষা উপকরণ, পরামর্শ ও সহায়তা প্রদান।",
  },
  {
    title: "স্বাস্থ্য সেবা",
    text: "জরুরি রক্তদান, স্বাস্থ্য সচেতনতা এবং বিনামূল্যে ক্যাম্প পরিচালনা।",
  },
  {
    title: "পরিবেশ রক্ষা",
    text: "বৃক্ষরোপণ, পরিচ্ছন্নতা অভিযান এবং পরিবেশবান্ধব অভ্যাস গড়ে তোলা।",
  },
  {
    title: "মানবিক সেবা",
    text: "দুর্যোগ, শীত, রমজান বা জরুরি অবস্থায় অসহায় মানুষের পাশে দাঁড়ানো।",
  },
];

const faqs = [
  {
    question: "কিভাবে সদস্য হওয়া যাবে?",
    answer: "স্বেচ্ছাসেবক ফর্ম পূরণ করে অথবা সংগঠনের দায়িত্বশীল সদস্যদের সঙ্গে যোগাযোগ করে সদস্য হওয়া যাবে।",
  },
  {
    question: "দান বা সহযোগিতা কোথায় করা যাবে?",
    answer: "অনলাইন ডোনেশন লিংক ব্যবহার করে অথবা সংগঠনের অনুমোদিত প্রতিনিধির মাধ্যমে সহযোগিতা করা যাবে।",
  },
  {
    question: "রক্তদাতা হিসেবে যুক্ত হতে কী লাগবে?",
    answer: "নিজের রক্তের গ্রুপ, যোগাযোগ নম্বর এবং অবস্থান তথ্য দিয়ে ডোনার তালিকায় যুক্ত হতে হবে।",
  },
  {
    question: "সংগঠনটি কি রাজনৈতিক?",
    answer: "না, শিশু কিশোর সমাজ সেবা সংগঠন একটি অরাজনৈতিক সামাজিক স্বেচ্ছাসেবী সংগঠন।",
  },
];

export default function Home() {
  return (
    <div className="org-home min-h-screen bg-white text-slate-900">
      <section id="home" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/shishu-kishor-hero.png"
            alt="তরুণ স্বেচ্ছাসেবীদের সামাজিক কার্যক্রম"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/70 to-emerald-950/15" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="mx-auto grid min-h-[calc(100svh-152px)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-4 inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
              অরাজনৈতিক সামাজিক স্বেচ্ছাসেবী সংগঠন
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              শিশু কিশোর সমাজ সেবা সংগঠন
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-emerald-50 sm:text-xl">
              তরুণদের ঐক্য, মানবিকতা ও স্বেচ্ছাসেবার শক্তিতে সমাজের পাশে থাকার
              এক নির্ভরযোগ্য উদ্যোগ।
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#join"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#e3322b] px-6 text-base font-bold text-white shadow-lg shadow-red-950/20 transition-colors hover:bg-[#c82520]"
              >
                সদস্য হোন
              </a>
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/50 bg-white/10 px-6 text-base font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                কার্যক্রম দেখুন
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 overflow-hidden rounded-lg border border-emerald-100 bg-white shadow-xl shadow-emerald-950/10 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="home-card-hover border-b border-r border-emerald-100 p-5 last:border-r-0 lg:border-b-0">
              <p className="text-3xl font-black text-[#0b7a3b]">{item.value}</p>
              <p className="mt-1 text-sm font-semibold text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-40 mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-wider text-[#0b7a3b]">আমাদের সম্পর্কে</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            তরুণদের হাতে মানবিক সমাজ গড়ার অঙ্গীকার
          </h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-slate-600">
          <p>
            শিশু কিশোর সমাজ সেবা সংগঠন শিশু-কিশোর ও তরুণদের নিয়ে গড়ে ওঠা একটি সামাজিক
            সংগঠন। শিক্ষা, স্বাস্থ্য, পরিবেশ, রক্তদান এবং জরুরি মানবিক সহায়তায়
            সংগঠনটি নিয়মিত কাজ করে।
          </p>
          <p>
            আমাদের লক্ষ্য হলো স্থানীয় মানুষের বাস্তব প্রয়োজন বুঝে দ্রুত,
            সংগঠিত ও স্বচ্ছভাবে পাশে দাঁড়ানো।
          </p>
        </div>
      </section>

      <section id="rules" className="scroll-mt-40 border-y border-emerald-100 bg-emerald-50/70 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-wider text-[#0b7a3b]">বিধি মালা</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              শৃঙ্খলা, স্বচ্ছতা ও দায়িত্বের ভিত্তিতে কাজ
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              সংগঠনের প্রতিটি উদ্যোগ যেন সুশৃঙ্খল, নিরপেক্ষ ও মানুষের কল্যাণমুখী
              হয়, সে জন্য সদস্যদের জন্য কিছু মৌলিক নীতিমালা অনুসরণ করা হয়।
            </p>
          </div>

          <div className="grid gap-4">
            {rules.map((rule, index) => (
              <div key={rule} className="home-card-hover flex gap-4 rounded-lg border border-emerald-100 bg-white p-5 shadow-sm">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#0b7a3b] text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-semibold leading-7 text-slate-700">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mission" className="scroll-mt-40 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-wider text-[#0b7a3b]">লক্ষ্য ও উদ্দেশ্য</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            যে উদ্দেশ্যে আমরা কাজ করি
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            শিশু কিশোর সমাজ সেবা সংগঠনের লক্ষ্য হলো এলাকার তরুণদের মানবিক কাজে
            যুক্ত করে শিক্ষা, স্বাস্থ্য, পরিবেশ ও সামাজিক সহায়তায় টেকসই
            পরিবর্তন আনা।
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((goal) => (
            <article key={goal.title} className="home-card-hover rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 h-1.5 w-16 rounded-full bg-[#f3c848]" />
              <h3 className="text-xl font-black text-slate-950">{goal.title}</h3>
              <p className="mt-3 text-sm font-medium leading-7 text-slate-600">{goal.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="scroll-mt-40 bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-wider text-emerald-300">প্রশ্ন ও উত্তর</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              সাধারণ কিছু প্রশ্নের উত্তর
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              সদস্য হওয়া, দান, রক্তদান বা সংগঠনের ধরন সম্পর্কে দ্রুত ধারণা
              পেতে নিচের উত্তরগুলো দেখুন।
            </p>
          </div>

          <div className="grid gap-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="home-card-hover home-card-hover-dark group rounded-lg border border-white/10 bg-white/5 p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black">
                  <span>{faq.question}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-[#f3c848] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="media" className="scroll-mt-40 bg-emerald-50/70 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div id="activities" className="scroll-mt-40 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-wider text-[#0b7a3b]">মিডিয়া</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                সাম্প্রতিক কার্যক্রম
              </h2>
            </div>
            <a href="#media" className="font-bold text-[#0b7a3b] hover:text-[#086431]">
              সব কার্যক্রম দেখুন
            </a>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {activities.map((item) => (
              <article key={item.title} className="home-card-hover rounded-lg border border-emerald-100 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex rounded bg-emerald-100 px-3 py-1 text-xs font-black text-[#0b7a3b]">
                    {item.tag}
                  </span>
                  <span className="text-xs font-bold text-slate-400">{item.date}</span>
                </div>
                <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-40 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-wider text-[#0b7a3b]">ফটো গ্যালারি</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              কাজের মুহূর্তগুলো
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-slate-600">
            সংগঠনের বিভিন্ন কার্যক্রমের ছবি এখানে বিভাগভিত্তিক সাজানো হয়েছে।
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <article key={item.title} className="home-card-hover group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <div className="relative h-52 bg-emerald-100">
                <Image
                  src="/shishu-kishor-hero.png"
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: `${35 + (index % 3) * 15}% center` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded bg-[#f3c848] px-3 py-1 text-xs font-black text-slate-950">
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
                <a href="#gallery" className="mt-3 inline-flex font-bold text-[#0b7a3b] hover:text-[#086431]">
                  ছবি দেখুন
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="videos" className="scroll-mt-40 bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-wider text-emerald-300">ভিডিও</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">ভিডিও আর্কাইভ</h2>
              <p className="mt-5 leading-8 text-slate-300">
                আমাদের কার্যক্রম, ক্যাম্পেইন এবং মানবিক উদ্যোগের ভিডিওগুলো
                একসাথে দেখতে পারবেন।
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {videos.map((video) => (
                <article key={video.title} className="home-card-hover home-card-hover-dark rounded-lg border border-white/10 bg-white/5 p-5">
                  <div className="grid aspect-video place-items-center rounded-md bg-white/10">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-[#e3322b] text-xl font-black text-white">
                      ▶
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-black">{video.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{video.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-40 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-wider text-[#0b7a3b]">প্রকল্প</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              মানবিক ও টেকসই উন্নয়নের চলমান উদ্যোগ
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              শীত, শিক্ষা, পরিবেশ ও স্বাস্থ্যসেবাকে কেন্দ্র করে আমরা নিয়মিত
              মাঠ পর্যায়ে প্রকল্প পরিচালনা করি।
            </p>
            <a
              href="/donate"
              className="mt-7 inline-flex h-11 items-center rounded-md bg-[#e3322b] px-5 font-bold text-white transition-colors hover:bg-[#c82520]"
            >
              প্রকল্পে সহযোগিতা করুন
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((item, index) => (
              <article
                key={item.id}
                id={item.id}
                className="home-card-hover scroll-mt-40 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded bg-emerald-100 px-3 py-1 text-xs font-black text-[#0b7a3b]">
                    {item.label}
                  </span>
                  <span className="text-3xl font-black text-slate-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm font-black text-[#0b7a3b]">{item.impact}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="blood" className="scroll-mt-40 bg-emerald-50/70 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="home-card-hover rounded-lg bg-[#0b7a3b] p-7 text-white sm:p-8">
            <p className="text-sm font-black uppercase tracking-wider text-emerald-100">ব্লাড ডোনেশন</p>
            <h2 className="mt-3 text-3xl font-black">জরুরি রক্তের জন্য দ্রুত সংযোগ</h2>
            <p className="mt-4 leading-8 text-emerald-50">
              রক্তদাতা তালিকা, গ্রুপিং ক্যাম্প এবং সচেতনতা কার্যক্রমের মাধ্যমে
              জরুরি মুহূর্তে মানুষের পাশে থাকার চেষ্টা।
            </p>
            <a
              href="#blood-register"
              className="mt-7 inline-flex h-11 items-center rounded-md bg-white px-5 font-bold text-[#0b7a3b] transition-colors hover:bg-emerald-50"
            >
              ডোনার রেজিস্ট্রেশন
            </a>
            </div>
            <div id="blood-donor" className="home-card-hover scroll-mt-40 rounded-lg border border-emerald-100 bg-white p-6 shadow-sm">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm font-black uppercase tracking-wider text-[#0b7a3b]">ব্লাড ডোনার তালিকা</p>
                  <h3 className="mt-2 text-2xl font-black text-slate-950">নিবন্ধিত রক্তদাতা</h3>
                </div>
                <a href="https://whatsapp.com/dl/" target="_blank" rel="noreferrer" className="font-bold text-[#e3322b] hover:text-[#c82520]">
                  হোয়াটসঅ্যাপে যোগাযোগ করুন
                </a>
              </div>

              <div className="mt-6 grid gap-3">
                {bloodDonors.map((donor) => (
                  <div key={donor.name} className="home-card-hover grid gap-3 rounded-md border border-slate-100 bg-slate-50 p-4 sm:grid-cols-[0.7fr_0.35fr_0.5fr_0.45fr] sm:items-center">
                    <p className="font-bold text-slate-900">{donor.name}</p>
                    <p className="text-xl font-black text-[#e3322b]">{donor.group}</p>
                    <p className="text-sm font-semibold text-slate-600">{donor.area}</p>
                    <span className="w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-[#0b7a3b]">
                      {donor.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div id="blood-register" className="home-card-hover scroll-mt-40 rounded-lg border border-emerald-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-wider text-[#0b7a3b]">ডোনার রেজিস্ট্রেশন</p>
              <h3 className="mt-2 text-2xl font-black text-slate-950">রক্তদাতা হিসেবে যুক্ত হোন</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-slate-700">
                  পূর্ণ নাম
                  <input
                    type="text"
                    name="blood-donor-name"
                    placeholder="আপনার নাম লিখুন"
                    className="h-11 rounded-md border border-slate-200 bg-white px-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#0b7a3b] focus:ring-2 focus:ring-emerald-100"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-700">
                  রক্তের গ্রুপ
                  <select
                    name="blood-group"
                    defaultValue=""
                    className="h-11 rounded-md border border-slate-200 bg-white px-3 text-slate-900 outline-none transition-colors focus:border-[#0b7a3b] focus:ring-2 focus:ring-emerald-100"
                  >
                    <option value="" disabled>রক্তের গ্রুপ নির্বাচন করুন</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-700">
                  মোবাইল নম্বর
                  <input
                    type="tel"
                    name="blood-donor-phone"
                    placeholder="০১XXXXXXXXX"
                    className="h-11 rounded-md border border-slate-200 bg-white px-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#0b7a3b] focus:ring-2 focus:ring-emerald-100"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-700">
                  এলাকা
                  <input
                    type="text"
                    name="blood-donor-area"
                    placeholder="আপনার এলাকার নাম"
                    className="h-11 rounded-md border border-slate-200 bg-white px-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#0b7a3b] focus:ring-2 focus:ring-emerald-100"
                  />
                </label>
              </div>
              <a
                href="mailto:shishukishursocialservice@gmail.com"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-[#0b7a3b] px-5 font-bold text-white transition-colors hover:bg-[#086431]"
              >
                রেজিস্ট্রেশনের জন্য ইমেইল করুন
              </a>
            </div>

            <div id="blood-campaign" className="home-card-hover scroll-mt-40 rounded-lg border border-red-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-wider text-[#e3322b]">ফ্রি গ্রুপ ক্যাম্পেইন</p>
              <h3 className="mt-2 text-2xl font-black text-slate-950">বিনামূল্যে রক্তের গ্রুপ নির্ণয়</h3>
              <p className="mt-4 leading-8 text-slate-600">
                স্কুল, মাদ্রাসা, বাজার ও গ্রামভিত্তিক ক্যাম্পেইনের মাধ্যমে
                নতুন রক্তদাতা তৈরি এবং জরুরি রক্তদান সম্পর্কে সচেতনতা বাড়ানো হয়।
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {["ক্যাম্প পরিকল্পনা", "গ্রুপ নির্ণয়", "ডোনার তালিকাভুক্তি"].map((step) => (
                  <div key={step} className="home-card-hover rounded-md bg-red-50 p-4">
                    <p className="text-sm font-black text-[#e3322b]">{step}</p>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-[#e3322b] px-5 font-bold text-white transition-colors hover:bg-[#c82520]"
              >
                ক্যাম্প আয়োজন করুন
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="committee" className="scroll-mt-40 bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-wider text-emerald-300">কমিটি</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">দায়িত্বশীল নেতৃত্ব</h2>
              <p className="mt-4 leading-8 text-slate-300">
                উপদেষ্টা, কার্যকরী কমিটি ও সাধারণ সদস্যদের সম্মিলিত প্রচেষ্টায়
                প্রতিটি কাজ পরিকল্পিতভাবে সম্পন্ন হয়।
              </p>
            </div>
            <div id="advisers" className="scroll-mt-40 grid gap-4 sm:grid-cols-3">
              {advisers.map((person) => (
                <div key={person.name} className="home-card-hover home-card-hover-dark rounded-lg border border-white/10 bg-white/5 p-5">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-xl font-black">
                    {person.name.slice(0, 1)}
                  </div>
                  <h3 className="mt-5 text-lg font-black">{person.name}</h3>
                  <p className="mt-1 text-sm font-bold text-emerald-300">{person.title}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{person.meta}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="executive" className="scroll-mt-40 mt-14">
            <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-10 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-wider text-emerald-300">কার্যকরী কমিটি</p>
                <h3 className="mt-3 text-2xl font-black sm:text-3xl">পরিকল্পনা থেকে বাস্তবায়ন</h3>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-300">
                কার্যকরী কমিটি সংগঠনের প্রতিটি প্রকল্পের সিদ্ধান্ত, দায়িত্ব বণ্টন,
                মাঠ পর্যায়ের সমন্বয় এবং হিসাব পরিচালনা করে।
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {executiveCommittee.map((person, index) => (
                <article key={person.name} className="home-card-hover rounded-lg border border-white/10 bg-white p-5 text-slate-950">
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#0b7a3b] text-sm font-black text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="text-lg font-black">{person.name}</h4>
                      <p className="mt-1 text-sm font-medium leading-6 text-slate-600">{person.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div id="members" className="scroll-mt-40 mt-14">
            <div className="home-card-hover home-card-hover-dark rounded-lg border border-white/10 bg-white/5 p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <p className="text-sm font-black uppercase tracking-wider text-emerald-300">সাধারণ সদস্য</p>
                  <h3 className="mt-3 text-2xl font-black sm:text-3xl">সংগঠনের প্রাণ শক্তি</h3>
                  <p className="mt-4 leading-8 text-slate-300">
                    সাধারণ সদস্যরা মাঠ পর্যায়ের স্বেচ্ছাসেবা, রক্তদান, প্রচার,
                    শিক্ষাসহায়তা এবং জরুরি মানবিক কাজে সরাসরি অংশ নেন।
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {generalMembers.map((member) => (
                    <div key={member} className="home-card-hover home-card-hover-dark rounded-md border border-white/10 bg-slate-950/50 p-4">
                      <p className="font-bold text-white">{member}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="scroll-mt-40 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="home-card-hover grid overflow-hidden rounded-lg border border-emerald-100 bg-white shadow-xl shadow-emerald-950/10 lg:grid-cols-[1fr_0.8fr]">
          <div className="p-7 sm:p-10">
            <p className="text-sm font-black uppercase tracking-wider text-[#0b7a3b]">যুক্ত হউন</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              আপনার সময়, দক্ষতা বা সহযোগিতা একটি কাজকে এগিয়ে নিতে পারে
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-600">
              স্বেচ্ছাসেবক, রক্তদাতা বা পৃষ্ঠপোষক হিসেবে শিশু কিশোর সমাজ সেবা সংগঠনের
              সঙ্গে যুক্ত হয়ে মানবিক কাজে অংশ নিন।
            </p>
            <div className="mt-6 grid gap-3 text-sm font-bold text-slate-700 sm:grid-cols-3">
              <span className="home-card-hover rounded-md bg-emerald-50 px-4 py-3">স্বেচ্ছাসেবা</span>
              <span className="home-card-hover rounded-md bg-emerald-50 px-4 py-3">পৃষ্ঠপোষকতা</span>
              <span className="home-card-hover rounded-md bg-emerald-50 px-4 py-3">যোগাযোগ</span>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3 bg-emerald-50 p-7 sm:p-10">
            <a
              href="#volunteer"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#0b7a3b] px-6 font-bold text-white transition-colors hover:bg-[#086431]"
            >
              স্বেচ্ছাসেবক হোন
            </a>
            <a
              href="/donate"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#e3322b] px-6 font-bold text-white transition-colors hover:bg-[#c82520]"
            >
              দান করুন
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div id="volunteer" className="home-card-hover scroll-mt-40 rounded-lg border border-emerald-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-black uppercase tracking-wider text-[#0b7a3b]">স্বেচ্ছাসেবক হোন</p>
            <h3 className="mt-2 text-2xl font-black text-slate-950">সময় ও শ্রম দিয়ে পাশে থাকুন</h3>
            <p className="mt-4 leading-8 text-slate-600">
              কার্যক্রম পরিচালনা, রক্তদান সমন্বয়, প্রচার, শিক্ষা সহায়তা এবং
              জরুরি মানবিক কাজে স্বেচ্ছাসেবক হিসেবে যুক্ত হতে পারেন।
            </p>
            <div className="mt-6 grid gap-3">
              <input
                type="text"
                name="volunteer-name-phone"
                placeholder="নাম ও মোবাইল নম্বর"
                className="home-card-hover rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#0b7a3b] focus:ring-2 focus:ring-emerald-100"
              />
              <input
                type="text"
                name="volunteer-skill"
                placeholder="আপনার দক্ষতা"
                className="home-card-hover rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#0b7a3b] focus:ring-2 focus:ring-emerald-100"
              />
              <textarea
                name="volunteer-time"
                placeholder="কাজের সময়"
                rows={3}
                className="home-card-hover resize-none rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#0b7a3b] focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

          <div id="sponsor" className="home-card-hover scroll-mt-40 rounded-lg border border-yellow-100 bg-[#fffaf0] p-6 shadow-sm">
            <p className="text-sm font-black uppercase tracking-wider text-[#b7791f]">পৃষ্ঠপোষকতা</p>
            <h3 className="mt-2 text-2xl font-black text-slate-950">একটি প্রকল্পের দায়িত্ব নিন</h3>
            <p className="mt-4 leading-8 text-slate-600">
              ব্যক্তি, পরিবার, প্রতিষ্ঠান বা সংগঠন হিসেবে শীতবস্ত্র, শিক্ষা,
              স্বাস্থ্য ক্যাম্প বা বৃক্ষরোপণ প্রকল্পে পৃষ্ঠপোষকতা করতে পারেন।
            </p>
            <a
              href="/donate"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-[#e3322b] px-5 font-bold text-white transition-colors hover:bg-[#c82520]"
            >
              পৃষ্ঠপোষকতা করুন
            </a>
          </div>

          <div id="contact" className="home-card-hover home-card-hover-dark scroll-mt-40 rounded-lg border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
            <p className="text-sm font-black uppercase tracking-wider text-emerald-300">যোগাযোগ</p>
            <h3 className="mt-2 text-2xl font-black">আমাদের সাথে যোগাযোগ করুন</h3>
            <address className="mt-4 not-italic leading-8 text-slate-300">
              সংগঠনের অবস্থান গুগল ম্যাপে দেখুন।
            </address>
            <div className="mt-5 grid gap-2 text-sm font-bold">
              <a href="https://maps.app.goo.gl/KxASahZDPC8kbuFD6" target="_blank" rel="noreferrer" className="text-[#f3c848] hover:text-white">
                সংগঠনের গুগল ম্যাপ
              </a>
              <a href="mailto:shishukishursocialservice@gmail.com" className="text-[#f3c848] hover:text-white">
                shishukishursocialservice@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
