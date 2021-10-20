import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Details from './Components/Details/Details';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/LogIn/Login';
import Navbar from './Components/Navbar/Navbar';
import Notfound from './Components/Notfound/Notfound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Services from './Components/registration/Services';
import Treatment from './Components/Treatment/Treatment';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (

    <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/treatment">
            <Treatment></Treatment>
          </Route>
          <Route exact path="/About">
            <About></About>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/details/:id">
            <Details></Details>
          </PrivateRoute>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>

  );
}

export default App;
