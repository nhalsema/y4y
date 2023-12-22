import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const { initHour = 0, initMinute = 0, initSecond = 10 } = props;
  const [hours, setHours] = useState(initHour);
  const [minutes, setMinutes] = useState(initMinute);
  const [seconds, setSeconds] = useState(initSecond);
  const [hourInput, setHourInput] = useState(initHour.toString());
  const [minuteInput, setMinuteInput] = useState(initMinute.toString());
  const [secondInput, setSecondInput] = useState(initSecond.toString());
  const [isRunning, setIsRunning] = useState(false);
  const [rotationDegree, setRotationDegree] = useState(0); // Rotation degree for the circle line

  useEffect(() => {
    let myInterval;
    if (isRunning) {
      myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              clearInterval(myInterval);
              setIsRunning(false);
            } else {
              setHours(hours - 1);
              setMinutes(59);
              setSeconds(59);
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
        // Calculate the rotation degree based on the remaining time
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        const remainingSeconds = totalSeconds - 1;
        const degree = (remainingSeconds / totalSeconds) * 360;
        setRotationDegree(degree);
      }, 1000);
    } else {
      clearInterval(myInterval);
    }

    return () => {
      clearInterval(myInterval);
    };
  }, [hours, minutes, seconds, isRunning]);

  const handleHourChange = (event) => {
    setHourInput(event.target.value);
  };

  const handleMinuteChange = (event) => {
    setMinuteInput(event.target.value);
  };

  const handleSecondChange = (event) => {
    setSecondInput(event.target.value);
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newHours = parseInt(hourInput) || 0;
    const newMinutes = parseInt(minuteInput) || 0;
    const newSeconds = parseInt(secondInput) || 0;
    setHours(newHours);
    setMinutes(newMinutes);
    setSeconds(newSeconds);
  };

  const circleStyle = {
    transform: `rotate(${rotationDegree}deg)`,
  };

  return (
    <React.Fragment>
      <div className="wrapper">
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Hours:
              <input
                type="text"
                name="hours"
                value={hourInput}
                onChange={handleHourChange}
              />
            </label>
            <label>
              Minutes:
              <input
                type="text"
                name="minutes"
                value={minuteInput}
                onChange={handleMinuteChange}
              />
            </label>
            <label>
              Seconds:
              <input
                type="text"
                name="seconds"
                value={secondInput}
                onChange={handleSecondChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="circle-container">
          <div className="circle">
            <div className="line" style={circleStyle}></div>
          </div>
          <button onClick={handleStartStop}>
            {isRunning ? "Stop" : "Start"} Timer
          </button>
        </div>
        <React.Fragment>
          <h1>
            {hours < 10 ? `0${hours}` : hours}:
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        </React.Fragment>
      </div>
    </React.Fragment>
  );
};

export default Timer;
