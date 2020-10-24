import './App.css';
import DashBoard from './Components/DashBoard/DashBoard';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import Blogs from './Components/Blogs/Blogs';
import Contacts from './Components/Contacts/Contacts';
import Services from './Components/Services/Services';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/home">
            <Home/>
          </Route>
          <Route path="/services">
            <Services/>
          </Route>
          <Route path="/dashboard">
            <DashBoard/>
          </Route>
          <Route path="/blogs">
            <Blogs/>
          </Route>
          <Route path="/contact">
            <Contacts/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
