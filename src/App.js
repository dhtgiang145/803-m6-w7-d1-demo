import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BarChart from "./barchart/BarChart";
import Example from "./spheres/index";
import TreeApp from "./tree/index";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>Redux Animation</p>
        </header>
        <button>
          <a
            className="barchart"
            href="/barchart"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bar Chart
          </a>
        </button>
        <button>
          <a
            className="barchart"
            href="/spheres"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sphere Animation
          </a>
        </button>
        <button>
          <a
            className="barchart"
            href="/thirdanimation"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tree Animation
          </a>
        </button>
        <Switch>
          <Route exact path="/barchart">
            <BarChart />
          </Route>
          <Route exact path="/spheres">
            <Example />
          </Route>
          <Route exact path="/tree">
            <TreeApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
