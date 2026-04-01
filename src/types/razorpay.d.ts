// src/types/razorpay.d.ts
// ─────────────────────────────────────────────────────────────
// RAZORPAY TYPE DECLARATIONS
//
// Razorpay's browser SDK (checkout.js) is loaded dynamically
// via a <script> tag, not via npm. So TypeScript doesn't know
// about it. These declarations tell TypeScript what to expect.
// ─────────────────────────────────────────────────────────────

interface RazorpayOptions {
  key:          string;
  amount:       number;          // in paise (INR * 100)
  currency:     string;
  name:         string;
  description?: string;
  order_id:     string;
  prefill?: {
    name?:    string;
    email?:   string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color?: string;
    hide_topbar?: boolean;
  };
  modal?: {
    backdropclose?: boolean;
    escape?:        boolean;
    handleback?:    boolean;
    confirm_close?: boolean;
    ondismiss?:     () => void;
    animation?:     boolean;
  };
  handler: (response: RazorpayPaymentResponse) => void;
  readonly open: () => void;
}

interface RazorpayPaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id:   string;
  razorpay_signature:  string;
}

interface RazorpayConstructor {
  new (options: RazorpayOptions): RazorpayInstance;
}

interface RazorpayInstance {
  open:   ()     => void;
  close:  ()     => void;
  on:     (event: string, handler: (...args: any[]) => void) => void;
}

interface Window {
  Razorpay: RazorpayConstructor;
}
