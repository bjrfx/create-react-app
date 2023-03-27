
import './App.css';

function App() {
  let img = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Earth_icon_2.png/640px-Earth_icon_2.png";
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <p>
          Deployed in <b>"Static Web App"</b> in Azure
        </p>
        <a
          className="App-link"
          href="https://brave-bay-06596e510.2.azurestaticapps.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create-react-app
        </a>
        <a
          className="App-link"
          href="https://brave-bay-06596e510.2.azurestaticapps.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
        by <i> BJRfx </i> 
        </a>
      </header>
    </div>
  );
}

export default App;
