'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'হোম', href: '#home' },
  {
    label: 'আমাদের সম্পর্কে',
    href: '#about',
    children: [
      { label: 'আমাদের সম্পর্কে', href: '#about' },
      { label: 'বিধি মালা', href: '#rules' },
      { label: 'লক্ষ্য ও উদ্দেশ্য', href: '#mission' },
      { label: 'প্রশ্ন ও উত্তর', href: '#faq' },
    ],
  },
  {
    label: 'কমিটি',
    href: '#committee',
    children: [
      { label: 'উপদেষ্টা মন্ডলী', href: '#advisers' },
      { label: 'কার্যকরী কমিটি', href: '#executive' },
      { label: 'সাধারণ সদস্য', href: '#members' },
    ],
  },
  {
    label: 'মিডিয়া',
    href: '#media',
    children: [
      { label: 'সাম্প্রতিক কার্যক্রম', href: '#activities' },
      { label: 'ফটো গ্যালারি', href: '#gallery' },
      { label: 'ভিডিও', href: '#videos' },
    ],
  },
  {
    label: 'প্রকল্প',
    href: '#projects',
    children: [
      { label: 'শীতবস্ত্র বিতরণ', href: '#winter' },
      { label: 'বৃক্ষরোপণ', href: '#tree' },
      { label: 'শিক্ষা সহায়তা', href: '#education' },
      { label: 'স্বাস্থ্য সেবা', href: '#health' },
    ],
  },
  {
    label: 'ব্লাড ডোনেশন',
    href: '#blood',
    children: [
      { label: 'ব্লাড ডোনার তালিকা', href: '#blood-donor' },
      { label: 'ডোনার রেজিস্ট্রেশন', href: '#blood-register' },
      { label: 'ফ্রি গ্রুপ ক্যাম্পেইন', href: '#blood-campaign' },
    ],
  },
  {
    label: 'যুক্ত হউন',
    href: '#join',
    children: [
      { label: 'স্বেচ্ছাসেবক হোন', href: '#volunteer' },
      { label: 'পৃষ্ঠপোষকতা', href: '#sponsor' },
      { label: 'যোগাযোগ', href: '#contact' },
    ],
  },
];

const latestNews = 'শিশু কিশোর একসাথে - জয় করবো মানবতাকে';
const logoUrl = 'https://imglink.cc/cdn/CTOwwrd7au.png';

function PhoneIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 3a1 1 0 0 1 1-1h2.15a1 1 0 0 1 .99.84l.74 4.43a1 1 0 0 1-.54 1.06l-1.55.78a11.04 11.04 0 0 0 6.1 6.1l.78-1.55a1 1 0 0 1 1.06-.54l4.43.74a1 1 0 0 1 .84.99V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3Z" />
    </svg>
  );
}

function MailIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2.5 5.75A2.5 2.5 0 0 1 5 3.25h10a2.5 2.5 0 0 1 2.5 2.5v.18L10 9.68 2.5 5.93v-.18Z" />
      <path d="m17.5 8.12-7.05 3.53a1 1 0 0 1-.9 0L2.5 8.12v6.13A2.5 2.5 0 0 0 5 16.75h10a2.5 2.5 0 0 0 2.5-2.5V8.12Z" />
    </svg>
  );
}

function HeartIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3.17 5.17a4 4 0 0 1 5.66 0L10 6.34l1.17-1.17a4 4 0 1 1 5.66 5.66L10 17.66l-6.83-6.83a4 4 0 0 1 0-5.66Z" />
    </svg>
  );
}

function ChevronDownIcon({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full font-sans">
      <div
        className={`overflow-hidden bg-[#0b7a3b] text-white shadow-sm transition-all duration-300 ${
          scrolled ? 'max-h-0' : 'max-h-12'
        }`}
      >
        <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-center gap-x-5 gap-y-1 px-3 py-1.5 text-[12px] font-medium sm:justify-between sm:px-5 sm:text-sm lg:px-8">
          <p className="hidden sm:block">শিশু কিশোর একসাথে - জয় করবো মানবতাকে</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <a href="https://whatsapp.com/dl/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-emerald-100">
              <PhoneIcon className="h-3.5 w-3.5" />
              হোয়াটসঅ্যাপ
            </a>
            <a href="mailto:shishukishursocialservice@gmail.com" className="inline-flex items-center gap-1.5 transition-colors hover:text-emerald-100">
              <MailIcon className="h-3.5 w-3.5" />
              shishukishursocialservice@gmail.com
            </a>
          </div>
        </div>
      </div>

      <nav
        className={`border-b border-emerald-900/10 bg-white/95 backdrop-blur transition-all duration-300 ${
          scrolled ? 'shadow-lg shadow-emerald-950/10' : 'shadow-md shadow-emerald-950/5'
        }`}
      >
        <div className="mx-auto flex min-h-[68px] max-w-7xl items-center justify-between gap-3 px-3 py-2 sm:px-5 lg:px-8">
          <Link href="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-[#f3c848] bg-white text-xl font-black text-[#0b7a3b] shadow-sm ring-2 ring-emerald-100 transition-colors group-hover:bg-emerald-50 sm:h-14 sm:w-14">
              <img
                src={logoUrl}
                alt="শিশু কিশোর সমাজ সেবা সংগঠন"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-[15px] font-extrabold text-[#0b7a3b] sm:text-lg">
                শিশু কিশোর সমাজ সেবা সংগঠন
              </span>
              <span className="mt-0.5 hidden text-xs font-medium text-slate-500 sm:block">
                একটি অরাজনৈতিক সামাজিক স্বেচ্ছাসেবী সংগঠন
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((link) => (
              <li key={link.href} className="group/menu relative">
                <a
                  href={link.href}
                  className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-emerald-50 hover:text-[#0b7a3b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b7a3b]"
                >
                  {link.label}
                  {link.children ? (
                    <ChevronDownIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover/menu:rotate-180" />
                  ) : null}
                </a>
                {link.children ? (
                  <div className="invisible absolute left-0 top-full z-50 min-w-56 translate-y-3 pt-3 opacity-0 transition-all duration-200 group-hover/menu:visible group-hover/menu:translate-y-0 group-hover/menu:opacity-100 group-focus-within/menu:visible group-focus-within/menu:translate-y-0 group-focus-within/menu:opacity-100">
                    <div className="overflow-hidden rounded-md border border-emerald-100 bg-white py-2 shadow-xl shadow-emerald-950/10">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="block whitespace-nowrap px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-emerald-50 hover:text-[#0b7a3b] focus-visible:bg-emerald-50 focus-visible:text-[#0b7a3b] focus-visible:outline-none"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="/donate"
              className="hidden items-center gap-2 rounded-full bg-[#e3322b] px-4 py-2.5 text-sm font-bold text-white shadow-sm shadow-red-700/20 transition-colors hover:bg-[#c82520] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e3322b] sm:inline-flex"
            >
              <HeartIcon />
              দান করুন
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="grid h-11 w-11 place-items-center rounded-md border border-emerald-100 text-[#0b7a3b] transition-colors hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b7a3b] xl:hidden"
            >
              <span className="sr-only">মেনু</span>
              <span className="flex h-5 w-6 flex-col justify-between">
                <span className={`block h-0.5 rounded bg-current transition-all duration-300 ${menuOpen ? 'translate-y-[9px] rotate-45' : ''}`} />
                <span className={`block h-0.5 rounded bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 rounded bg-current transition-all duration-300 ${menuOpen ? '-translate-y-[9px] -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </div>

        <div className={`xl:hidden overflow-hidden border-t border-emerald-100 bg-white transition-all duration-300 ${
          menuOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mx-auto max-w-7xl px-3 py-3 sm:px-5">
            <ul className="grid gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.children ? (
                    <details className="group rounded-md">
                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-emerald-50 hover:text-[#0b7a3b]">
                        <span>{link.label}</span>
                        <ChevronDownIcon className="h-4 w-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="mb-1 ml-3 grid gap-1 border-l border-emerald-100 pl-3">
                        <a
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-emerald-50 hover:text-[#0b7a3b]"
                        >
                          {link.label}
                        </a>
                        {link.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            onClick={() => setMenuOpen(false)}
                            className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-emerald-50 hover:text-[#0b7a3b]"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-md px-3 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-emerald-50 hover:text-[#0b7a3b]"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
              <li className="pt-2 sm:hidden">
                <a
                  href="/donate"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#e3322b] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#c82520]"
                >
                  <HeartIcon />
                  দান করুন
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="border-b border-emerald-900/10 bg-white shadow-sm">
        <div className="mx-auto flex h-10 max-w-7xl items-center overflow-hidden px-3 sm:px-5 lg:px-8">
          <div className="flex h-full shrink-0 items-center bg-[#0b7a3b] px-3 text-sm font-bold text-white">
            সর্বশেষ
          </div>
          <div className="relative flex min-w-0 flex-1 items-center overflow-hidden bg-emerald-50/80">
            <span className="ml-3 shrink-0 rounded bg-[#e3322b] px-2 py-0.5 text-[11px] font-black text-white">
              LIVE
            </span>
            <div className="news-marquee flex min-w-max items-center gap-10 px-4 text-sm font-semibold text-slate-700">
              <span>{latestNews}</span>
              <span>{latestNews}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
