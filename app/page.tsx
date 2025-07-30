"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [printerReady, setPrinterReady] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://oss-imin.s3.ap-southeast-1.amazonaws.com/printer_sdk/JSPrinterSDK.js";
    script.async = true;
    script.onload = () => setPrinterReady(true);
    document.body.appendChild(script);
  }, []);

  const handlePrint = (type: "USB" | "SPI" | "Bluetooth") => {
    const printer = (window as any).IminPrintInstance;
    if (printerReady && printer) {
      alert(`Trying with ${type}...`);
      printer.initPrinter(printer.PrintConnectType[type]);
      printer.setAlignment(1);
      printer.setTextSize(28);
      printer.printText(`Testing ${type} connection...\n\n`);
      printer.partialCut();
    } else {
      alert("Printer not available — use iMin Browser and wait for SDK to load.");
    }
  };


  alert((window as any).IminPrintInstance ? "printer ready" : "printer not ready");

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <button
        onClick={() => handlePrint("SPI")}
        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Test SPI
      </button>
      <button
        onClick={() => handlePrint("USB")}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Test USB
      </button>
      <button
        onClick={() => handlePrint("Bluetooth")}
        className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
      >
        Test Bluetooth
      </button>
    </div>
  );
}
