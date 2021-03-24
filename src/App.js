
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Page } from "./components/Page";
import './App.css';

function App() {
  return <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page/page01">Page 01</Link></li>
        <li><Link to="/page/page02">Page 02</Link></li>
        <li><Link to="/page/page03">Page 03</Link></li>
      </ul>
      <hr />
      <Switch>
        <Route path="/page/:page">
          <Page />
        </Route>
      </Switch>
    </div>
  </Router>
}

export default App
