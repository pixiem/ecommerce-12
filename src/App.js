import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Addproducts from './components/addproducts/Addproducts';
import Addtocart from './components/AddToCart/Addtocart';

import Allproducts from './components/Allproducts/Allproducts';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Makeadmin from './components/makeadmin/Makeadmin';
import Manageorder from './components/manageorder/Manageorder';
import Myorder from './components/MyOrders/Myorder';
import Navigation from './components/Navigation/Navigation';
import Pay from './components/Pay/Pay';
import PrivateRoute from './components/Private/PrivateRoute';
import Register from './components/Register/Register';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Navigation></Navigation>
      <Switch>
        <PrivateRoute exact path="/addtocart">
       <Addtocart></Addtocart>
        </PrivateRoute>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/shop">
          <Shop></Shop>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
        <PrivateRoute exact path="/placeorder/:productId">
          <Addtocart></Addtocart>
        </PrivateRoute>
        <PrivateRoute exact path="/allmyorder">
          <Myorder></Myorder>
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute exact path="/pay">
          <Pay></Pay>
        </PrivateRoute>
        <PrivateRoute exact path="/addproduct">
          <Addproducts></Addproducts>
        </PrivateRoute>
        <PrivateRoute exact path="/makeadmin">
          <Makeadmin></Makeadmin>
        </PrivateRoute>
        <PrivateRoute exact path="/manageorder">
          <Manageorder></Manageorder>
        </PrivateRoute>
        <PrivateRoute exact path="/review">
          <Review></Review>
        </PrivateRoute>
        
        <Route exact path="/allproducts">
          <Allproducts></Allproducts>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
