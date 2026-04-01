'use client';
// src/app/(auth)/signup/page.tsx

import { useState }  from 'react';
import { useRouter } from 'next/navigation';
import Link          from 'next/link';
import { signUp, signInWithGoogle } from '@/lib/auth';
import { useToast }  from '@/components/ui/ToastProvider';

export default function SignupPage() {
  const router = useRouter();
  const { showToast } = useToast();

  const [name,       setName]       = useState('');
  const [email,      setEmail]      = useState('');
  const [password,   setPassword]   = useState('');
  const [isStudent,  setIsStudent]  = useState(false);
  const [loading,    setLoading]    = useState(false);
  const [googleLoad, setGoogleLoad] = useState(false);

  // ── Email/Password Signup ──────────────────────────────
  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !password) {
      showToast('Please fill in all fields', 'error');
      return;
    }
    if (password.length < 6) {
      showToast('Password must be at least 6 characters', 'error');
      return;
    }

    setLoading(true);
    try {
      await signUp(email, password, name);
      showToast(`Welcome to CodeGuru AI, ${name.split(' ')[0]}! 🎉`, 'success');
      router.push('/dashboard');
    } catch (err: any) {
      const msg =
        err.code === 'auth/email-already-in-use' ? 'This email is already registered. Log in instead!' :
        err.code === 'auth/invalid-email'         ? 'Please enter a valid email.' :
        err.code === 'auth/weak-password'         ? 'Password is too weak. Use at least 6 characters.' :
        'Signup failed. Please try again.';
      showToast(msg, 'error');
    } finally {
      setLoading(false);
    }
  }

  // ── Google Signup ──────────────────────────────────────
  async function handleGoogleSignup() {
    setGoogleLoad(true);
    try {
      await signInWithGoogle();
      showToast('Account created! Welcome 🎉', 'success');
      router.push('/dashboard');
    } catch (err) {
      showToast('Google sign-in failed. Try again.', 'error');
    } finally {
      setGoogleLoad(false);
    }
  }

  return (
    <div className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-8 animate-slide-up">
      {/* Header */}
      <div className="text-center mb-7">
        <h1 className="text-2xl font-display font-bold mb-1">Start your journey</h1>
        <p className="text-sm text-[#64748B]">Free to start. Learn at your own pace.</p>
      </div>

      {/* Google Button */}
      <button
        onClick={handleGoogleSignup}
        disabled={googleLoad}
        className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-[#18182A] border border-[#2A2A3C] rounded-xl text-sm font-semibold hover:border-blue-500 hover:bg-blue-950/30 transition-all disabled:opacity-50 mb-5"
      >
        {googleLoad ? (
          <div className="w-4 h-4 border-2 border-[#2A2A3C] border-t-blue-400 rounded-full animate-spin" />
        ) : (
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path fill="#EA4335" d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"/>
            <path fill="#4285F4" d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"/>
            <path fill="#FBBC05" d="M3.88 10.78A5.54 5.54 0 013.48 9c0-.62.11-1.22.29-1.78L.86 4.96A9 9 0 000 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"/>
            <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"/>
          </svg>
        )}
        Sign up with Google
      </button>

      {/* Divider */}
      <div className="relative text-center text-xs text-[#64748B] mb-5">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#1E1E2E]" />
        </div>
        <span className="relative bg-[#12121A] px-3">or</span>
      </div>

      {/* Signup Form */}
      <form onSubmit={handleSignup} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-[#64748B] uppercase tracking-widest mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Rahul Sharma"
            className="w-full px-4 py-3 bg-[#18182A] border border-[#2A2A3C] rounded-xl text-[#E2E8F0] text-sm placeholder-[#3A4560] outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/20 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#64748B] uppercase tracking-widest mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="w-full px-4 py-3 bg-[#18182A] border border-[#2A2A3C] rounded-xl text-[#E2E8F0] text-sm placeholder-[#3A4560] outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/20 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#64748B] uppercase tracking-widest mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Min. 6 characters"
            className="w-full px-4 py-3 bg-[#18182A] border border-[#2A2A3C] rounded-xl text-[#E2E8F0] text-sm placeholder-[#3A4560] outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/20 transition-all"
          />
        </div>

        {/* Student checkbox — gets 10% discount */}
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="relative">
            <input
              type="checkbox"
              checked={isStudent}
              onChange={e => setIsStudent(e.target.checked)}
              className="sr-only"
            />
            <div className={`
              w-5 h-5 rounded border-2 transition-all flex items-center justify-center
              ${isStudent ? 'bg-green-500 border-green-500' : 'border-[#2A2A3C] bg-[#18182A]'}
            `}>
              {isStudent && <span className="text-black text-xs font-bold">✓</span>}
            </div>
          </div>
          <span className="text-sm text-[#64748B] group-hover:text-[#E2E8F0] transition-colors">
            I&apos;m a student — get extra 10% off 🎓
          </span>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading && (
            <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
          )}
          Create Free Account
        </button>
      </form>

      {/* Footer */}
      <div className="text-center mt-5 text-sm text-[#64748B]">
        Already have an account?{' '}
        <Link href="/login" className="text-green-500 font-semibold hover:underline">
          Log in
        </Link>
      </div>

      <p className="text-center text-xs text-[#3A4560] mt-4">
        By signing up, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
}
