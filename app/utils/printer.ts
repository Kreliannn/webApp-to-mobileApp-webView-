import { useEffect } from "react";

export function useIminPrinterSDK() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://oss-imin.s3.ap-southeast-1.amazonaws.com/printer_sdk/JSPrinterSDK.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
}
