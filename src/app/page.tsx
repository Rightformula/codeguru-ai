// src/app/page.tsx
// ─────────────────────────────────────────────────────────────
// ROOT PAGE — shown at https://codeguru-ai.vercel.app/
// This is the public landing page. No auth required.
// ─────────────────────────────────────────────────────────────

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CodeGuru AI — Learn to Code with AI Mentorship',
};

// ── Static Data ───────────────────────────────────────────────
const COURSES = [
  { id: 'python',     icon: '🐍', name: 'Python',      color: '#3776AB', modules: 18, level: 'Beginner → Advanced' },
  { id: 'javascript', icon: '⚡', name: 'JavaScript',   color: '#F7DF1E', modules: 18, level: 'Beginner → Advanced' },
  { id: 'html-css',   icon: '🌐', name: 'HTML / CSS',   color: '#E34F26', modules: 18, level: 'Beginner → Advanced' },
  { id: 'java',       icon: '☕', name: 'Java',         color: '#007396', modules: 18, level: 'Beginner → Advanced' },
];

const PLANS = [
  {
    name:     'Starter',
    price:    '₹1,499',
    period:   '4 months',
    features: ['1 Language', 'All beginner lessons', 'AI Mentor', 'Coding playground'],
    popular:  false,
    cta:      'Get Started',
  },
  {
    name:     'Pro',
    price:    '₹2,999',
    period:   '6 months',
    features: ['2 Languages', 'All levels', 'Priority AI Mentor', 'Progress certificate'],
    popular:  true,
    cta:      'Get Pro',
  },
  {
    name:     'Multi',
    price:    '₹3,599',
    period:   '9 months',
    features: ['3 Languages', 'All levels + projects', 'AI debug assistant', 'Interview prep'],
    popular:  false,
    cta:      'Get Multi',
  },
  {
    name:     'Bundle',
    price:    '₹5,399',
    period:   '12 months',
    features: ['All 4 languages', 'Lifetime content', 'Unlimited AI sessions', '1-on-1 mentoring'],
    popular:  false,
    cta:      'Get Bundle',
  },
];

const STATS = [
  { value: '200+',  label: 'Lessons'   },
  { value: '72',    label: 'Modules'   },
  { value: '4',     label: 'Languages' },
  { value: 'AI',    label: 'Powered'   },
];

// ── Page Component ────────────────────────────────────────────
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-[#E2E8F0]">

      {/* ── Navbar ────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-[#1E1E2E]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="font-display font-extrabold text-xl">
            ⚡ <span className="text-green-500">Code</span>Guru AI
          </div>

          {/* Nav Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-semibold text-[#E2E8F0] border border-[#2A2A3C] rounded-lg hover:bg-[#12121A] transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 text-sm font-semibold bg-green-500 text-black rounded-lg hover:bg-green-400 transition-colors"
            >
              Start Free
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ──────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 pt-20 pb-16 text-center">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 bg-green-950 border border-green-800 text-green-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-in">
          🇮🇳 Built for Indian learners · Hinglish friendly
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold mb-5 animate-slide-up">
          Learn to Code with{' '}
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            AI-Powered Guidance
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-[#64748B] max-w-2xl mx-auto mb-10 animate-slide-up delay-100">
          Duolingo-style lessons + interactive coding + personal AI mentor.
          Master Python, JavaScript, Java, and more — from beginner to hired.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3 justify-center flex-wrap animate-slide-up delay-200">
          <Link
            href="/signup"
            className="px-6 py-3 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition-all hover:shadow-[0_0_24px_rgba(34,197,94,0.4)] text-base"
          >
            🚀 Start Learning Free
          </Link>
          <Link
            href="/dashboard"
            className="px-6 py-3 border border-[#2A2A3C] text-[#E2E8F0] font-semibold rounded-xl hover:bg-[#12121A] transition-colors text-base"
          >
            👀 Preview Platform
          </Link>
        </div>

        {/* Stats Row */}
        <div className="flex gap-8 sm:gap-16 justify-center mt-14 animate-fade-in delay-300">
          {STATS.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-display font-extrabold text-green-500">{stat.value}</div>
              <div className="text-xs text-[#64748B] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Courses Grid ──────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-center text-2xl font-display font-bold mb-8">
          4 Languages. One Platform.
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {COURSES.map(course => (
            <Link
              key={course.id}
              href="/signup"
              className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-5 text-center hover:border-[#2A2A3C] hover:-translate-y-1 transition-all duration-200 group"
              style={{ ['--course-color' as string]: course.color }}
            >
              <div
                className="w-full h-1 rounded-t-full mb-4 -mt-5 -mx-5 rounded-t-2xl"
                style={{ background: course.color, width: 'calc(100% + 40px)', marginLeft: '-20px' }}
              />
              <div className="text-4xl mb-3">{course.icon}</div>
              <div className="font-display font-bold text-base">{course.name}</div>
              <div className="text-xs text-[#64748B] mt-1">{course.modules} modules</div>
              <div className="text-xs text-[#64748B]">{course.level}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-center text-2xl font-display font-bold mb-10">
          Everything You Need to Learn to Code
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: '🎮', title: 'Gamified Learning',   desc: 'XP, streaks, badges — just like Duolingo but for coding.' },
            { icon: '🤖', title: 'AI Mentor',           desc: 'Ask anything. Get explained in simple, beginner-friendly language.' },
            { icon: '💻', title: 'Interactive Coding',  desc: 'Write and run real code in your browser. No installation needed.' },
            { icon: '🧠', title: 'Smart Quizzes',       desc: 'Test your knowledge after every lesson with instant AI feedback.' },
            { icon: '📊', title: 'Progress Tracking',   desc: 'See your improvement. Level up, unlock content, earn certificates.' },
            { icon: '📱', title: 'Mobile First',        desc: 'Learn on your phone during commute. Works on any device.' },
          ].map(feature => (
            <div key={feature.title} className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-5 hover:border-[#2A2A3C] transition-colors">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-display font-bold text-base mb-1">{feature.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-center text-2xl font-display font-bold mb-2">
          Simple, Honest Pricing
        </h2>
        <p className="text-center text-sm text-[#64748B] mb-8">
          Students get extra 10% off · Launch discount already applied
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLANS.map(plan => (
            <div
              key={plan.name}
              className={`
                relative bg-[#12121A] border rounded-2xl p-5
                ${plan.popular
                  ? 'border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.15)]'
                  : 'border-[#1E1E2E]'
                }
              `}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  🔥 Most Popular
                </div>
              )}

              <div className="font-display font-extrabold text-lg mb-1">{plan.name}</div>
              <div className="text-2xl font-display font-extrabold text-green-500">
                {plan.price}
                <span className="text-sm text-[#64748B] font-normal"> / {plan.period}</span>
              </div>

              <ul className="mt-4 mb-5 space-y-2">
                {plan.features.map(f => (
                  <li key={f} className="text-xs text-[#64748B] flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className={`
                  block text-center py-2 rounded-xl text-sm font-semibold transition-colors
                  ${plan.popular
                    ? 'bg-green-500 text-black hover:bg-green-400'
                    : 'border border-[#2A2A3C] text-[#E2E8F0] hover:bg-[#18182A]'
                  }
                `}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Alumni pricing note */}
        <p className="text-center text-xs text-[#64748B] mt-6">
          Post-course alumni subscriptions: Starter ₹199/month · Pro/Multi ₹299/month
        </p>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="border-t border-[#1E1E2E] mt-8 py-8 text-center">
        <div className="font-display font-extrabold text-lg text-green-500 mb-2">
          ⚡ CodeGuru AI
        </div>
        <p className="text-xs text-[#64748B]">
          Made with ❤️ for Indian learners · © 2024 CodeGuru AI
        </p>
      </footer>

    </main>
  );
}
