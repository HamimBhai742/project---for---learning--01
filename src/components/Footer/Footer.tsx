import Link from "next/link";

const importantLinks = [
  { label: "আমাদের সম্পর্কে", href: "/about" },
  { label: "বিধি মালা", href: "/rules" },
  { label: "লক্ষ্য ও উদ্দেশ্য", href: "/mission" },
  { label: "প্রশ্ন ও উত্তর", href: "/faq" },
];

const usefulLinks = [
  { label: "সংগঠনের গঠনতন্ত্র", href: "https://drive.google.com/file/d/1A6aCDjjU2JpjxJnvPjgddggiHgLK3jci/view?usp=drivesdk" },
  { label: "সংগঠনের গুগল ম্যাপ", href: "https://maps.app.goo.gl/KxASahZDPC8kbuFD6" },
  { label: "সংগঠনের ফেসবুক পেজ", href: "https://www.facebook.com/sisu.kisora.samaja.seba.sangathana" },
  { label: "অনলাইন ডোনেশন", href: "/donate" },
];

const joinCards = [
  {
    title: "দান",
    text: "নিয়মিত বা এককালীন আর্থিক সহায়তার মাধ্যমে আমাদের কার্যক্রমকে আরও বিস্তৃত করতে পারেন।",
    href: "/donate",
  },
  {
    title: "স্বেচ্ছাসেবক",
    text: "শুধু অর্থ নয়, আপনার সময় ও শ্রমও মানবতার সেবায় বিনিয়োগ করতে পারেন।",
    href: "/volunteer",
  },
  {
    title: "পৃষ্ঠপোষকতা",
    text: "কর্পোরেট প্রতিষ্ঠান, এনজিও ও ব্যক্তিগতভাবে যেকেউ পৃষ্ঠপোষকতা করতে পারেন।",
    href: "/sponsor",
  },
];

const developerCredit = {
  name: "Hamim",
  href: "https://www.facebook.com/mdhamim42",
};

const logoUrl = "https://imglink.cc/cdn/CTOwwrd7au.png";

function ArrowIcon() {
  return <span className="text-[#f3c848]" aria-hidden="true">›</span>;
}

function SocialIcon({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-[#f3c848] hover:bg-[#f3c848] hover:text-slate-950"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer id="footer-contact" className="bg-slate-950 text-white">
      <section className="border-y border-white/10 bg-[#0b7a3b]">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
          {joinCards.map((item) => (
            item.href.startsWith("http") ? (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-lg border border-white/15 bg-white/10 p-5 transition-colors hover:bg-white"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-black group-hover:text-[#0b7a3b]">{item.title}</h3>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f3c848] text-lg font-black text-slate-950">
                    ↗
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium leading-7 text-emerald-50 group-hover:text-slate-600">
                  {item.text}
                </p>
              </a>
            ) : (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-lg border border-white/15 bg-white/10 p-5 transition-colors hover:bg-white"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-black group-hover:text-[#0b7a3b]">{item.title}</h3>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f3c848] text-lg font-black text-slate-950">
                    ↗
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium leading-7 text-emerald-50 group-hover:text-slate-600">
                  {item.text}
                </p>
              </Link>
            )
          ))}
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-full border-2 border-[#f3c848] bg-white text-2xl font-black text-[#0b7a3b]">
              <img
                src={logoUrl}
                alt="শিশু কিশোর সমাজ সেবা সংগঠন"
                className="h-full w-full object-cover"
              />
            </span>
            <span>
              <span className="block text-xl font-black">শিশু কিশোর সমাজ সেবা সংগঠন</span>
              <span className="mt-1 block text-sm font-semibold text-slate-400">
                শিশু কিশোর একসাথে - জয় করবো মানবতাকে
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            আমরা একটি স্বেচ্ছাসেবী সংগঠন যা সমাজের দরিদ্র ও অসহায় মানুষের পাশে
            দাঁড়াতে প্রতিশ্রুতিবদ্ধ।
          </p>
          <div className="mt-6 flex items-center gap-3">
            <SocialIcon label="Facebook" href="https://www.facebook.com/sisu.kisora.samaja.seba.sangathana">
              <span className="text-sm font-black">f</span>
            </SocialIcon>
            <SocialIcon label="Facebook account" href="https://www.facebook.com/share/1A9B5Xyhvr/">
              <span className="text-xs font-black">fb</span>
            </SocialIcon>
            <SocialIcon label="WhatsApp" href="https://whatsapp.com/dl/">
              <span className="text-xs font-black">☎</span>
            </SocialIcon>
          </div>
        </div>

        <div>
          <h3 className="text-base font-black">গুরুত্বপূর্ণ লিংক</h3>
          <ul className="mt-5 grid gap-3">
            {importantLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-[#f3c848]">
                  <ArrowIcon />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-black">দরকারি লিংক</h3>
          <ul className="mt-5 grid gap-3">
            {usefulLinks.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("http") ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-[#f3c848]"
                  >
                    <ArrowIcon />
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-[#f3c848]"
                  >
                    <ArrowIcon />
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-black">যোগাযোগের ঠিকানা</h3>
          <address className="mt-5 not-italic text-sm leading-7 text-slate-300">
            সংগঠনের অবস্থান গুগল ম্যাপে দেখুন।
          </address>
          <div className="mt-5 grid gap-2 text-sm font-semibold text-slate-300">
            <a href="https://maps.app.goo.gl/KxASahZDPC8kbuFD6" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#f3c848]">
              সংগঠনের গুগল ম্যাপ
            </a>
            <a href="mailto:shishukishursocialservice@gmail.com" className="transition-colors hover:text-[#f3c848]">
              shishukishursocialservice@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm font-medium text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© ২০১৭-২০২৬ শিশু কিশোর সমাজ সেবা সংগঠন — সর্বস্বত্ব সংরক্ষিত</p>
          <p>
            Design & Developed by{" "}
            <a
              href={developerCredit.href}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#f3c848] hover:text-white"
            >
              {developerCredit.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
