'use client';
// src/app/dashboard/page.tsx

import Link          from 'next/link';
import { useAuth }   from '@/components/auth/AuthProvider';

const COURSES = [
  { id: 'python',     icon: '🐍', name: 'Python',     color: '#3776AB', plan: 'free',   modules: 18 },
  { id: 'javascript', icon: '⚡', name: 'JavaScript', color: '#F7DF1E', plan: 'pro',    modules: 18 },
  { id: 'html-css',   icon: '🌐', name: 'HTML / CSS', color: '#E34F26', plan: 'multi',  modules: 18 },
  { id: 'java',       icon: '☕', name: 'Java',        color: '#007396', plan: 'bundle', modules: 18 },
];

export default function DashboardPage() {
  const { profile, user } = useAuth();

  const name   = profile?.name || user?.displayName || 'Learner';
  const xp     = profile?.xp      ?? 0;
  const streak = profile?.streak  ?? 0;
  const level  = Math.floor(xp / 100) + 1;
  const completedLessons = 0; // Will come from progress store in Step 3

  const hour   = new Date().getHours();
  const greet  = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  const firstName = name.split(' ')[0];

  return (
    <div className="max-w-2xl mx-auto px-4">

      {/* ── Greeting ──────────────────────────────────────── */}
      <div className="pt-6 pb-4">
        <h1 className="text-2xl font-display font-bold mb-1">
          {greet}, {firstName}! 👋
        </h1>
        <p className="text-sm text-[#64748B]">
          {streak > 0
            ? `You're on a ${streak}-day streak. Keep it up! 🔥`
            : 'Start a lesson to begin your streak!'}
        </p>
      </div>

      {/* ── Stats Grid ────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { val: xp,               label: 'Total XP',    color: 'text-yellow-400' },
          { val: streak + ' 🔥',  label: 'Day Streak',  color: 'text-orange-400' },
          { val: completedLessons, label: 'Lessons Done', color: 'text-green-500' },
          { val: level,            label: 'Level',        color: 'text-purple-400' },
        ].map(stat => (
          <div key={stat.label} className="bg-[#12121A] border border-[#1E1E2E] rounded-xl p-4">
            <div className={`text-2xl font-display font-extrabold ${stat.color}`}>{stat.val}</div>
            <div className="text-xs text-[#64748B] mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* ── Continue Learning Card ────────────────────────── */}
      <Link
        href="/courses/python/py-m1-l1"
        className="block mb-6 bg-gradient-to-br from-green-950/60 to-blue-950/40 border border-green-800/40 rounded-2xl p-5 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
      >
        <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-400 text-xs font-bold px-2.5 py-1 rounded-full mb-3">
          ▶ Continue
        </span>
        <h3 className="font-display font-bold mb-1">Python Basics — Lesson 1</h3>
        <p className="text-xs text-[#64748B] mb-4">What is Python? · 8 min · 10 XP</p>
        <div className="h-2 bg-[#1E1E2E] rounded-full overflow-hidden">
          <div className="h-full w-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full" />
        </div>
        <p className="text-xs text-[#64748B] mt-2">0% complete</p>
      </Link>

      {/* ── Courses Section ───────────────────────────────── */}
      <div>
        <h2 className="text-xs font-bold text-[#64748B] uppercase tracking-widest mb-3">
          📚 Your Courses
        </h2>
        <div className="flex flex-col gap-3">
          {COURSES.map(course => {
            const locked = course.plan !== 'free';
            return (
              <div
                key={course.id}
                className={`
                  bg-[#12121A] border border-[#1E1E2E] rounded-xl p-4
                  flex items-center gap-4 transition-all duration-150
                  ${locked ? 'opacity-60 cursor-not-allowed' : 'hover:border-[#2A2A3C] hover:bg-[#14141E] cursor-pointer'}
                `}
              >
                <div className="text-3xl flex-shrink-0">{course.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm mb-0.5">{course.name}</div>
                  <div className="text-xs text-[#64748B]">
                    {locked ? '🔒 Upgrade to unlock' : 'Module 1 of ' + course.modules + ' · 0% complete'}
                  </div>
                  {!locked && (
                    <div className="mt-1.5 h-1 bg-[#1E1E2E] rounded-full overflow-hidden">
                      <div className="h-full w-0 bg-green-500 rounded-full" />
                    </div>
                  )}
                </div>
                {locked ? (
                  <span className="text-xs bg-yellow-950/60 text-yellow-400 border border-yellow-800/40 px-2 py-0.5 rounded-full font-semibold capitalize flex-shrink-0">
                    {course.plan}
                  </span>
                ) : (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#64748B" strokeWidth="2" className="flex-shrink-0">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Quick Actions ─────────────────────────────────── */}
      <div className="mt-6 grid grid-cols-2 gap-3 pb-4">
        <Link
          href="/playground"
          className="bg-[#12121A] border border-[#1E1E2E] rounded-xl p-4 text-center hover:border-blue-500/40 hover:bg-blue-950/20 transition-all"
        >
          <div className="text-2xl mb-1">💻</div>
          <div className="text-sm font-semibold">Playground</div>
          <div className="text-xs text-[#64748B]">Write free code</div>
        </Link>
        <Link
          href="/ai-tutor"
          className="bg-[#12121A] border border-[#1E1E2E] rounded-xl p-4 text-center hover:border-purple-500/40 hover:bg-purple-950/20 transition-all"
        >
          <div className="text-2xl mb-1">🤖</div>
          <div className="text-sm font-semibold">AI Tutor</div>
          <div className="text-xs text-[#64748B]">Ask anything</div>
        </Link>
      </div>

    </div>
  );
}
