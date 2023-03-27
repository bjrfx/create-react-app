import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deployed in <b>"Static Web App"</b> in Azure
        </p>
        <a
          className="App-link"
          href="https://brave-bay-06596e510.2.azurestaticapps.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React-test-app 
        </a>
      </header>
    </div>
  );
}

export default App;
