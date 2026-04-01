'use client';
// src/components/layout/AppNavbar.tsx

import Link          from 'next/link';
import { useAuth }   from '@/components/auth/AuthProvider';
import { logout }    from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useState }  from 'react';
import { useToast }  from '@/components/ui/ToastProvider';
import { useXP, useStreak, useLevel, useXpInLevel } from '@/store/progressStore';

export default function AppNavbar() {
  const { user, profile }  = useAuth();
  const router    = useRouter();
  const { showToast } = useToast();
  const [menuOpen, setMenuOpen] = useState(false);

  // Read live values from progressStore — updates instantly on XP gain
  const xp       = useXP();
  const streak   = useStreak();
  const level    = useLevel();
  const xpInLevel = useXpInLevel();

  async function handleLogout() {
    try {
      await logout();
      showToast('Logged out. See you soon! 👋', 'info');
      router.push('/');
    } catch {
      showToast('Logout failed', 'error');
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#0A0A0F]/85 backdrop-blur-xl border-b border-[#1E1E2E] px-4 h-14 flex items-center justify-between">

      {/* Left — Logo */}
      <Link href="/dashboard" className="font-display font-extrabold text-lg">
        ⚡ <span className="text-green-500">Code</span>Guru
      </Link>

      {/* Right — XP Bar + Streak + Avatar */}
      <div className="flex items-center gap-3">

        {/* Streak Badge */}
        {streak > 0 && (
          <div className="flex items-center gap-1.5 bg-orange-950/50 border border-orange-800/40 text-orange-400 px-2.5 py-1 rounded-full text-xs font-bold">
            🔥 {streak}
          </div>
        )}

        {/* XP Bar */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-xs font-bold text-yellow-400 whitespace-nowrap">{xp} XP</span>
          <div className="w-20 h-1.5 bg-[#1E1E2E] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-700"
              style={{ width: `${xpInLevel}%` }}
            />
          </div>
          <span className="text-xs text-[#64748B]">Lv.{level}</span>
        </div>

        {/* User Avatar / Menu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-black font-bold text-sm"
          >
            {(profile?.name || user?.displayName || 'U')[0].toUpperCase()}
          </button>

          {/* Dropdown */}
          {menuOpen && (
            <div className="absolute right-0 top-10 w-48 bg-[#12121A] border border-[#1E1E2E] rounded-xl shadow-2xl overflow-hidden animate-slide-down z-50">
              <div className="px-4 py-3 border-b border-[#1E1E2E]">
                <div className="text-sm font-semibold truncate">{profile?.name || user?.displayName}</div>
                <div className="text-xs text-[#64748B] truncate">{user?.email}</div>
              </div>
              <div className="py-1">
                <Link
                  href="/progress"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-[#E2E8F0] hover:bg-[#18182A] transition-colors"
                >
                  📊 My Progress
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-[#18182A] transition-colors"
                >
                  🚪 Log Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Close menu on outside click */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}
