import './App.sass';
import Timer from './components/Timer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <Timer
          initMinute={0}
          initSeconds={30}
      /> 
 
      <NavBar />
    </div>

  );
}

export default App;
