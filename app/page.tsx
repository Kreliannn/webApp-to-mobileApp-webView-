"use client"

export default function Home() {


  const handleClick = () => {
    alert("printing")
  }


  return (
    <div className="w-full h-screen flex items-center justify-center">
      <button onClick={handleClick} className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors duration-200" >
        Print 
      </button>
    </div>
  );
}
