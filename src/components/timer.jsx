import React from "react";

const Timer = (props) => {
    const { initMinute = 0, initSeconds = 10 } = props
    const [minutes, setMinutes] = React.useState(initMinute)
    const [seconds, setSeconds] = React.useState(initSeconds)
  
    React.useEffect(() => {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        } if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval)
          } else {
            setMinutes(minutes - 1)
            setSeconds(59)
          }
        }
      }, 1000)
      return () => {
        clearInterval(myInterval)
      }
    })
  
    return (
      <React.Fragment>
              <div className='wrapper'>
                  { minutes === 0 && seconds === 0 ? (
                      <React.Fragment>
                          <div className="card">
                              <img 
                                  className="cardImg"
                                  src='https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif'
                                  alt='gif'
                              />
                              <div className="cardBody">
                                  <p>You still here for thirty seconds in this code, interesting <span role="img" aria-label="smiling face with sunglasses">😎</span></p>
                              </div>
                          </div>
                      </React.Fragment>
                  ) : (
                      <React.Fragment>
                          <h1>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                      </React.Fragment>
                  )}
              </div>
      </React.Fragment>
    )
  }
  
export default Timer; 