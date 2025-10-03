import { onCLS, onFID, onLCP, onINP } from "web-vitals";

export default function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && typeof onPerfEntry === "function") {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onLCP(onPerfEntry);
    onINP(onPerfEntry);
  }
}
