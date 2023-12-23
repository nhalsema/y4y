import './App.sass';
import Timer from './components/Timer';
// import NavBar from './components/NavBar';
import FlyingToasters from './components/FlyingToasters';

function App() {
  return (
    <div className="App">
      <FlyingToasters />
      <h1>hello world</h1>
      <Timer
          initMinute={0}
          initSeconds={30}
      /> 
 

    </div>

  );
}

export default App;
