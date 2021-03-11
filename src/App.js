import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './pages/Landing';
import LoginModal from './components/LoginModal';
import Navbar from './components/navbar';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginModal} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
