// import React, { useState, useEffect, useRef } from "react";

// function Stopwatch() {
//   const [time, setTime] = useState(0); // Timer state in seconds
//   const [isRunning, setIsRunning] = useState(false); // Running state
//   const timerRef = useRef(null); // Reference to the timer interval

//   // Function to start the stopwatch
//   const handleStart = () => {
//     setIsRunning(true);
//     timerRef.current = setInterval(() => {
//       setTime((prevTime) => prevTime + 1);
//     }, 1000);
//   };

//   // Function to stop the stopwatch
//   const handleStop = () => {
//     setIsRunning(false);
//     clearInterval(timerRef.current);
//   };

//   // Function to reset the stopwatch
//   const handleReset = () => {
//     setIsRunning(false);
//     clearInterval(timerRef.current);
//     setTime(0);
//   };

//   // Cleanup the interval when the component unmounts
//   useEffect(() => {
//     return () => clearInterval(timerRef.current);
//   }, []);

//   // Convert time to minutes and seconds
//   const minutes = Math.floor(time / 60);
//   const seconds = time % 60;

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Stopwatch</h1>
//       <h2>Time: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
//       {!isRunning ? (
//         <button onClick={handleStart}>Start</button>
//       ) : (
//         <button onClick={handleStop}>Stop</button>
//       )}
//       <button onClick={handleReset} style={{ marginLeft: "10px" }}>
//         Reset
//       </button>
//     </div>
//   );
// }

// export default Stopwatch;

import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0); // Timer state in seconds
  const [isRunning, setIsRunning] = useState(false); // Running state
  const [intervalId, setIntervalId] = useState(null); // Interval ID state

  // Function to start the stopwatch
  const handleStart = () => {
    setIsRunning(true);
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    setIntervalId(id);
  };

  // Function to stop the stopwatch
  const handleStop = () => {
    setIsRunning(false);
    clearInterval(intervalId);
    setIntervalId(null);
  };

  // Function to reset the stopwatch
  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalId);
    setIntervalId(null);
    setTime(0);
  };

  // Cleanup the interval when the component unmounts
  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  // Convert time to minutes and seconds
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Stopwatch</h1>
      <h2>
        Time: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h2>
      {!isRunning ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handleStop}>Stop</button>
      )}
      <button onClick={handleReset} style={{ marginLeft: '10px' }}>
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;
