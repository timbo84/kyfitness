"use client";
import { useEffect, useState } from "react";

const CalendlyPopup = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  if (!isClient) return null; // Prevent SSR mismatch

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/kylynn77/30min"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
};

export default CalendlyPopup;
