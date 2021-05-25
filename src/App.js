import Landing from './Components/Landing'
import ContactUs from './Components/ContactUs'
import Support from './Components/Support'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
