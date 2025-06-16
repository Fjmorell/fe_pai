import { useState } from "react";
import App from "./presentation/App.js";
import SplashScreen from "./presentation/components/SplashScreen.js";

export default function Root() {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} />
  ) : (
    <App />
  );
}
