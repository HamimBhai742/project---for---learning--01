# শিশু কিশোর সমাজ সেবা সংগঠন

একটি অরাজনৈতিক সামাজিক স্বেচ্ছাসেবী সংগঠনের ওয়েবসাইট — শিক্ষা, স্বাস্থ্য, পরিবেশ, রক্তদান এবং জরুরি মানবিক সহায়তায় নিবেদিত।

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Runtime:** React 19

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with Navbar & Footer
│   ├── globals.css
│   └── (commoLayout)/
│       ├── page.tsx            # Home page
│       ├── about/              # আমাদের সম্পর্কে
│       ├── mission/            # লক্ষ্য ও উদ্দেশ্য
│       ├── rules/              # বিধি মালা
│       ├── faq/                # সাধারণ প্রশ্ন
│       ├── contact/            # যোগাযোগ
│       ├── donate/             # অনুদান
│       ├── volunteer/          # স্বেচ্ছাসেবী
│       ├── blood-donor/        # রক্তদাতা
│       └── sponsor/            # স্পনসর
├── components/
│   ├── Navbar/
│   ├── Footer/
│   └── InfoPage/
└── data/
    └── footerPages.ts          # Static content for info pages
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
