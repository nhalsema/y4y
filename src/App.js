import './App.css';
import Timer from './components/timer';
import './components/timer.sass'

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <Timer
          initMinute={0}
          initSeconds={30}
      /> 
 
    </div>

  );
}

export default App;
