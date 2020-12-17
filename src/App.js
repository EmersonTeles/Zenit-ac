import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Content">
        <div className="Head">
          <img src={logo} alt="logo zenits"/>
        </div>
        <h1>Status Bar em busca do AC</h1>
        <div className="StatusBar">
          <div className="Progress">
              <h3>R$14.497,00</h3>
          </div>
          <h3 className="percent">59%</h3>
        </div>
        <h2>META: R$24.361,00</h2>
      </div>
    </div>
  );
}

export default App;
