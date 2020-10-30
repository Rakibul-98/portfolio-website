import './App.css';
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
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/resume">
            <Resume/>
          </Route>
          <Route path="/services">
            <Services/>
          </Route>
          <Route path="/projects">
            <Projects/>
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
