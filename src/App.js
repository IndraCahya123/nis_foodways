import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {UserContextProvider} from './contexts/userContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-modal/css/react-router-modal.css';
import './App.css';

import Navbar from './components/navbar';
import LoginPrivateRoute from './components/LoginPrivateRoute';

import LandingPage from './pages/Landing';
import Profile from './pages/Profile';
import RestaurantProductDetail from './pages/RestaurantProductDetail';
import AddProduct from './pages/AddProduct';
import PartnerLoggedLandingPage from './pages/PartnerLogged';

function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <LoginPrivateRoute exact path="/profile/:role" component={Profile} />
            <LoginPrivateRoute exact path="/add-product" component={AddProduct} />
            <Route exact path="/restaurant-product-detail/:id" component={RestaurantProductDetail} />
            <LoginPrivateRoute exact path="/partner" component={PartnerLoggedLandingPage} />
          </Switch>
        </Router>
      </UserContextProvider>
    </>
  );
}

export default App;
