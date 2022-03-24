import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <div className="background-color">
        <div className="container">
          <Header></Header>
        </div>
      </div>
      <Shop></Shop>
    </div>
  );
}

export default App;
