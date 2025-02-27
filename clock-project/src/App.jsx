import { useState, useEffect } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString()
  );

  const refreshTime = () => {
    setCurrentTime(new Date().toLocaleTimeString());
    setCurrentDate(new Date().toLocaleDateString());
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r  text-white">
      <div className="bg-white text-gray-800 shadow-xl rounded-lg p-10 w-96 text-center">
        {/* Header */}
        <h1 className="text-4xl font-bold text-green-600 mb-4">Bharat Clock</h1>
        <p className="text-gray-600">Always keeping you on time!</p>

        {/* Time & Date Display */}
        <div className="mt-6">
          <h3 className="text-lg font-medium">The current time is:</h3>
          <p className="text-3xl font-bold mt-2">{currentTime}</p>

          <h3 className="text-lg font-medium mt-4">The current date is:</h3>
          <p className="text-xl font-semibold mt-2">{currentDate}</p>
        </div>

        {/* Refresh Button */}
        <button
          onClick={refreshTime}
          className="mt-6 bg-orange-400 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out shadow-md"
        >
          Refresh Time
        </button>
      </div>
    </div>
  );
}

export default App;
