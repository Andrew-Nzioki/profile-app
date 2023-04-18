import "./App.css";
import Persons from "./components/Persons";
import data from "./components/data";
function App() {
  return (
    <div className="App">
      <Persons item={data}/>
    </div>
  );
}

export default App;
