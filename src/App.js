import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginModal from './components/LoginModal';
import Navbar from './components/navbar';
import LandingPage from './pages/Landing';
import Profile from './pages/Profile';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginModal} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
