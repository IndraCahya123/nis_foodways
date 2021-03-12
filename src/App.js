import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ModalContainer, ModalRoute} from 'react-router-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-modal/css/react-router-modal.css';
import './App.css';
import LoginModal from './components/LoginModal';
import Navbar from './components/navbar';
import LandingPage from './pages/Landing';
import Profile from './pages/Profile';
import RestaurantProductDetail from './pages/RestaurantProductDetail';
import AddProduct from './pages/AddProduct';
import CustomerLoggedLandingPage from './pages/CustLogged';
import PartnerLoggedLandingPage from './pages/PartnerLogged';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/profile/:role" component={Profile} />
        <Route exact path="/add-product" component={AddProduct} />
        <Route exact path="/restaurant-product-detail/:id" component={RestaurantProductDetail} />
        <Route exact path="/customer" component={CustomerLoggedLandingPage} />
        <Route exact path="/partner" component={PartnerLoggedLandingPage} />
        <Route exact path="/login" component={LoginModal}/>
        <ModalRoute exact path='/login' parentPath="/" component={LoginModal}/>
        <ModalContainer />
      </Switch>
    </Router>
    </>
  );
}

export default App;
