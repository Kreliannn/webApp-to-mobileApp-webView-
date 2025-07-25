"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://oss-sg.imin.sg/docs/en/JSPrinterSDK.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePrint = () => {
    const printer = (window as any).IminPrintInstance;
    if (printer) {
      printer.initPrinter(printer.PrintConnectType.USB);
      printer.setAlignment(1);
      printer.setTextSize(28);
      printer.printText("01 ITEM   ₱100\nTotal: ₱100\n\n");
      printer.partialCut();
    } else {
      alert("Printer not available — use Imin browser.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handlePrint}
        className="px-8 py-3 text-lg bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Print Receipt
      </button>
    </div>
  );
}
