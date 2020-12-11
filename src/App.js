import React from 'react';
import {Route} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './components';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contacts';

function App() {
  return (
    <>
      <CssBaseline/>
        <Route exact path="/" component={Home}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact me" component={Contact}/>
    </>
  );
}

export default App;
