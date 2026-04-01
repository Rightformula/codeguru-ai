import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut,
  browserLocalPersistence,
  setPersistence
} from "firebase/auth";

const firebaseConfig = {
  apiKey:            "AIzaSyBotAxUQap99pjY8ajKpyMP29VENQ8qoYs",
  authDomain:        "codeguruai-cf5d7.firebaseapp.com",
  projectId:         "codeguruai-cf5d7",
  storageBucket:     "codeguruai-cf5d7.appspot.com",
  messagingSenderId: "353596178785",
  appId:             "1:353596178785:web:7f2a2cb265c4fd25b64520"
};

const app      = initializeApp(firebaseConfig);
const auth     = getAuth(app);
const provider = new GoogleAuthProvider();

provider.addScope("email");
provider.addScope("profile");
provider.setCustomParameters({ prompt: "select_account" });

function isMobileBrowser() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export async function loginWithGoogle() {
  try {
    await setPersistence(auth, browserLocalPersistence);
    if (isMobileBrowser()) {
      await signInWithRedirect(auth, provider);
    } else {
      const result = await signInWithPopup(auth, provider);
      return result.user;
    }
  } catch (error) {
    alert("Login error: " + error.message);
    return null;
  }
}

export async function logoutUser() {
  try {
    await signOut(auth);
    console.log("Logged out");
  } catch (error) {
    console.error("Logout error:", error.message);
    throw error;
  }
}

export async function handleRedirectOnLoad(onSuccess, onFailure) {
  try {
    const result = await getRedirectResult(auth);
    if (result && result.user) {
      onSuccess(result.user);
      return result.user;
    }
  } catch (error) {
    onFailure(error);
  }
  return null;
}

export function watchAuthState(callback) {
  return onAuthStateChanged(auth, callback);
}

export { auth };
