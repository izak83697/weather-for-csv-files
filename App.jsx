import './App.css';
import {Files} from "./components/Files"
function App() {
  return (
    <div className="App">
      <header className="App-header">
      Insert a csv file with city names and get a new file with weather data
        <Files/>
      </header>
    </div>
  );
}

export default App;
