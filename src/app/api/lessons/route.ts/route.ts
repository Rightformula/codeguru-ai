import { NextResponse } from "next/server";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// 🔐 Firebase init (run once)
const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
};

if (!global._firebaseAdmin) {
  initializeApp({
    credential: cert(serviceAccount as any),
  });
  global._firebaseAdmin = true;
}

const db = getFirestore();

// 📚 GET API → fetch all lessons
export async function GET() {
  try {
    const snapshot = await db.collection("lessons").get();

    const lessons = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ success: true, data: lessons });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to fetch lessons" });
  }
}
