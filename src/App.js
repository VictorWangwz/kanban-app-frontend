import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./components/NavBar";
import ProjectBoard from "./components/ProjectBoard";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddProjectTask from './components/ProjectTask/AddProjectTask';
import {Provider} from "react-redux";
import store from "./store"

class App extends Component {
  render() {
    return (
      <Router>
      <Provider store={store}>

        <div className="App">

          <Navbar />
          <Route exact path="/" component={ProjectBoard}></Route>
          <Route exact path="/addProjectTask" component={AddProjectTask}></Route>
        </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
