import { useEffect, useState } from "react";
import "../../splash.css";

interface Props {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: Props) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => setFade(true), 2500);
    const finishTimeout = setTimeout(onFinish, 3500);
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onFinish]);

  return (
    <div className={`splash-container${fade ? " fade-out" : ""}`}>
      <video className="splash-video" autoPlay muted playsInline>
        <source src="/intro.mp4" type="video/mp4" />
      </video>
      <div className="splash-overlay" />
      <h1 className="splash-title">Procurement Hub AI</h1>
    </div>
  );
}
