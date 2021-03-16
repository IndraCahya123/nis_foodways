import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { UserContextProvider } from './contexts/userContext';
import { OrderContextProvider } from './contexts/orderContext';

import Navbar from './components/navbar';
import LoginPrivateRoute from './components/PrivateRoute/LoginPrivateRoute';

import LandingPage from './pages/Landing';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import RestaurantProductDetail from './pages/Customer/RestaurantProductDetail';
import AddProduct from './pages/Partner/AddProduct';
import PartnerLoggedLandingPage from './pages/Partner/PartnerLogged';
import Orders from './pages/Customer/OrderPage';

function App() {
  return (
    <>
      <UserContextProvider>
        <OrderContextProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <LoginPrivateRoute exact path="/profile" component={Profile} />
              <LoginPrivateRoute exact path="/edit-profile" component={EditProfile} />
              <LoginPrivateRoute exact path="/add-product" component={AddProduct} />
              <LoginPrivateRoute exact path="/restaurant-product-detail/:id" component={RestaurantProductDetail} />
              <LoginPrivateRoute exact path="/partner/:id" component={PartnerLoggedLandingPage} />
              <LoginPrivateRoute exact path="/orders" component={Orders} />
            </Switch>
          </Router>
        </OrderContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
