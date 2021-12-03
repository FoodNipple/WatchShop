import React from "react";

import { Router, Route, Switch } from "react-router-dom";
import createHistory from "./utils/createHistory";

// import { useSelector, useDispatch } from "react-redux";
// import useCart from "./utils/useCart";

import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/Login";
import RegisterPage from "./pages/Registerpage/Register";
import ShopPage from "./pages/ShopPage/Shop";

import { Provider } from "react-redux";
import store from "./store";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Provider store={store}>
          <Router history={createHistory}>
            <Header />
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/login" exact component={LoginPage} />
              <Route path="/register" exact component={RegisterPage} />
              <Route path="/shop" exact component={ShopPage} />
            </Switch>
          </Router>
        </Provider>
      </AuthProvider>
    </div>
  );
};

export default App;
