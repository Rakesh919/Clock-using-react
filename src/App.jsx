import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Get hours, minutes, and seconds
  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Calculate rotation angles
  const hourDeg = hours * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const secondDeg = seconds * 6;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-3xl font-bold mb-6">🕰️ Bharat Clock</h1>

      {/* Clock Face */}
      <div className="relative w-72 h-72 bg-white rounded-full border-8 border-gray-300 shadow-2xl flex items-center justify-center">
        {/* Clock Numbers */}
        {[...Array(12)].map((_, i) => {
          const angle = (i + 1) * 30;
          const x = Math.sin((angle * Math.PI) / 180) * 100;
          const y = -Math.cos((angle * Math.PI) / 180) * 100;
          return (
            <span
              key={i}
              className="absolute text-xl font-bold text-gray-800"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              {i + 1}
            </span>
          );
        })}

        {/* Hour Hand */}
        <div
          className="absolute w-2 h-16 bg-gray-800 rounded origin-bottom"
          style={{
            transform: `translate(-50%, -100%) rotate(${hourDeg}deg)`,
            top: "50%",
            left: "50%",
          }}
        ></div>

        {/* Minute Hand */}
        <div
          className="absolute w-1.5 h-24 bg-gray-600 rounded origin-bottom"
          style={{
            transform: `translate(-50%, -100%) rotate(${minuteDeg}deg)`,
            top: "50%",
            left: "50%",
          }}
        ></div>

        {/* Second Hand */}
        <div
          className="absolute w-1 h-28 bg-red-500 rounded origin-bottom"
          style={{
            transform: `translate(-50%, -100%) rotate(${secondDeg}deg)`,
            top: "50%",
            left: "50%",
          }}
        ></div>

        {/* Clock Center Dot */}
        <div className="absolute w-4 h-4 bg-black rounded-full"></div>
      </div>

      {/* Digital Time Display */}
      <p className="text-2xl font-semibold mt-4">{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default App;
