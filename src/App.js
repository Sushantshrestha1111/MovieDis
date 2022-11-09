import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import Detail from './components/Detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
       
      
  
      

      <Router>
      <Header />
      
      <Switch>
      
        <Switch>
          <Route path="/detail">
          <Detail/>

          </Route>
          <Route path="/">
          <Home/>
        </Route>
          
        </Switch>
       
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
