# CodeGuru AI — Deployment Guide

## ═══════════════════════════════════════════
##  STEP 1: Firebase Setup (30 minutes)
## ═══════════════════════════════════════════

### 1.1 Create Firebase Project
1. Go to → https://console.firebase.google.com
2. Click "Add project" → Name: `codeguru-ai`
3. Enable Google Analytics (optional)
4. Click "Create project"

### 1.2 Enable Services
In Firebase Console:
- **Authentication** → Sign-in methods → Enable: Email/Password + Google
- **Firestore Database** → Create database → Start in production mode → Choose region: `asia-south1` (Mumbai)
- **Storage** → Enable (for profile photos later)

### 1.3 Get Firebase Config
Firebase Console → Project Settings → Your apps → Add Web App
Copy the config object. You'll need:
```
apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId
```

### 1.4 Deploy Firestore Rules
```bash
cd firebase
firebase login
firebase init firestore
firebase deploy --only firestore:rules
```

---

## ═══════════════════════════════════════════
##  STEP 2: API Keys Setup
## ═══════════════════════════════════════════

### 2.1 Anthropic (Claude) API
1. Visit: https://console.anthropic.com
2. Create account → API Keys → Create Key
3. Save as: ANTHROPIC_API_KEY

### 2.2 OpenAI API
1. Visit: https://platform.openai.com
2. API Keys → Create new key
3. Save as: OPENAI_API_KEY
4. Recommended model: gpt-4o-mini (cost-effective for debugging)

### 2.3 Judge0 (Code Execution)
1. Visit: https://rapidapi.com/judge0-official/api/judge0-ce
2. Subscribe to FREE plan (100 requests/day)
3. Get API Key from RapidAPI dashboard
4. Save as: JUDGE0_API_KEY

### 2.4 Razorpay (Payments)
1. Visit: https://razorpay.com → Create account
2. Settings → API Keys → Generate Key
3. Save Key ID and Key Secret

---

## ═══════════════════════════════════════════
##  STEP 3: Local Development Setup
## ═══════════════════════════════════════════

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/codeguru-ai
cd codeguru-ai

# 2. Install frontend dependencies
cd frontend
npm install

# 3. Setup environment variables
cp .env.local.example .env.local
# Edit .env.local with all your API keys

# 4. Run development server
npm run dev
# Open: http://localhost:3000

# 5. Install Firebase CLI (for backend)
npm install -g firebase-tools
cd ../firebase/functions
npm install
```

---

## ═══════════════════════════════════════════
##  STEP 4: Deploy to Vercel (Recommended)
## ═══════════════════════════════════════════

### Why Vercel?
- Free tier is generous (enough for MVP)
- Auto-deploys on git push
- Edge network (fast for Indian users)
- Next.js native support

### 4.1 Deploy
```bash
# Install Vercel CLI
npm install -g vercel

# From /frontend directory
cd frontend
vercel

# Follow prompts:
# - Link to existing project? No → Create new
# - Project name: codeguru-ai
# - Directory: ./  (current)
```

### 4.2 Add Environment Variables in Vercel
Vercel Dashboard → Your Project → Settings → Environment Variables

Add ALL variables from .env.local.example:
- NEXT_PUBLIC_FIREBASE_* (all Firebase vars)
- ANTHROPIC_API_KEY
- OPENAI_API_KEY
- JUDGE0_API_KEY
- RAZORPAY_KEY_SECRET
- etc.

### 4.3 Production Deploy
```bash
# After setting env vars:
vercel --prod
```

Your app will be live at: `https://codeguru-ai.vercel.app`

---

## ═══════════════════════════════════════════
##  STEP 5: Custom Domain (Optional)
## ═══════════════════════════════════════════

Recommended domains:
- `codeGuru.in` (approx ₹800/year via GoDaddy or Namecheap)
- `learn.codeguruai.com`

In Vercel: Settings → Domains → Add custom domain
Then update DNS records with your domain registrar.

---

## ═══════════════════════════════════════════
##  STEP 6: Firebase Functions Deploy
## ═══════════════════════════════════════════

```bash
cd firebase
firebase deploy --only functions
```

Functions deployed:
- `onUserCreate` → Creates Firestore user document
- `onLessonComplete` → Awards XP, checks badges
- `verifySubscription` → Validates Razorpay payment

---

## ═══════════════════════════════════════════
##  STEP 7: MVP Launch Checklist
## ═══════════════════════════════════════════

Before going live, verify:

[ ] Firebase Auth working (Email + Google)
[ ] Firestore rules deployed
[ ] .env.local has all required keys
[ ] Claude API responding (test /api/ai/explain)
[ ] Judge0 executing code (test /api/code/execute)
[ ] Razorpay payment flow tested
[ ] Mobile layout tested on Android
[ ] All 3 Python Module 1 lessons complete with content
[ ] Progress saving to Firestore
[ ] XP and streak updating correctly

---

## ═══════════════════════════════════════════
##  COST ESTIMATE (Monthly at MVP Scale)
## ═══════════════════════════════════════════

| Service       | Free Tier         | Paid (est.)          |
|---------------|-------------------|----------------------|
| Vercel        | 100GB bandwidth   | $20/month (Pro)      |
| Firebase      | 1GB storage, 50k reads/day | $25/month |
| Claude API    | —                 | ~$20 for 1000 users  |
| OpenAI API    | —                 | ~$5 for 1000 debugs  |
| Judge0        | 100 req/day free  | $10/month (basic)    |
| Domain        | —                 | ₹800/year            |
| **Total**     | **Free to start** | **~₹5000/month**    |

Revenue at just 100 paid users (Starter plan): ₹1,49,900
Cost: ~₹5,000
**Margin: ~97%** 💰

---

## ═══════════════════════════════════════════
##  QUICK START COMMANDS (TL;DR)
## ═══════════════════════════════════════════

```bash
# 1 - Clone and install
git clone https://github.com/YOUR_USERNAME/codeguru-ai
cd codeguru-ai/frontend && npm install

# 2 - Configure
cp .env.local.example .env.local
# Edit .env.local with your keys

# 3 - Run locally
npm run dev

# 4 - Deploy
vercel --prod
```

That's it! Your CodeGuru AI MVP will be live. 🚀
