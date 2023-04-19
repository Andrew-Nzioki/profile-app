import "./App.css";
import Persons from "./components/Persons";
import data from "./components/data";//import of the data
//Main parent
function App() {
  return (
    <div className="App">
      <Persons item={data}/>
    </div>
  );
}

export default App;

//props ,Its passing data from the parent