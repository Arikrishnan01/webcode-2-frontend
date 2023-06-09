import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router, Switch , Route, Redirect,
} from "react-router-dom";
import Question from "./components/AddQuestion/Question";
import StackOverflow from "./components/StackOverflow";
import ViewQuestion from './components/ViewQuestion';
import Auth from './components/Auth';
import { useDispatch, useSelector } from 'react-redux';
// import { Component } from 'react';
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(
          login({
          uid: authUser.uid,
          photo: authUser.photo,
          displayName: authUser.displayName,
          email: authUser.email
          })
        );
      }
      else{
        dispatch(logout());
      }
    });
  }, [dispatch]);

const  PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
      {...rest} 
      render={(props) => 
        user? (
          <Component {...props}/>
          ) : (
            <Redirect 
              to={{
                pathname: '/auth',
                state: {
                  from: props.location,
                },
              }}
            />
          )} 
        />
      );

  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <PrivateRoute exact path='/add-question' >
            <Question/>
          </PrivateRoute>
          <Route 
            exact 
            path={user ? '/' : '/auth'} 
            component = {user ? StackOverflow : Auth} />
          <PrivateRoute exact path='/question' component = {ViewQuestion} />
          {/* <PrivateRoute exact path='/' component = {StackOverflow} /> */}
        </Switch>
      </Router>
     </div>
  );
}

export default App;
