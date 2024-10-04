import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import CounterChange from './CounterChnage';

function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <hr/>
      <CounterChange></CounterChange>
    </div>
  );
}

export default App;
