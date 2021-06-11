import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Navbar from './components/Shared/Navbar/Navbar';
import PointTable from "./components/Shared/PointTable/PointTable";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Navbar />
            <PointTable />
          </Route>
          <Route path="/point-table">
            <PointTable />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
