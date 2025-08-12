"use client"
import { useState } from "react";

declare global {
  interface Window {
    Android: {
      triggerPrint: () => void;
    };
  }
}


export default function Home() {

  const [isGreen, setIsGreen] = useState(true)

  const handleClick = () => {
    alert("printing")
    setIsGreen((prev) => !prev)
    if (window.Android && window.Android.triggerPrint) {
      window.Android.triggerPrint();
    }
  }


  return (
    <div className="w-full h-screen flex items-center justify-center">

      <div className={`${isGreen ? "bg-green-500" : "bg-red-500"} w-[100px] h-[100px]`}>

      </div>

      <button onClick={handleClick} className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors duration-200" >
        Print 
      </button>
    </div>
  );
}