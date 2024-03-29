
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = () => {
const pageSize = 6;
const  apiKey = process.env.REACT_APP_NEWS_API;
 
const [progress,setProgress] = useState(0)
 

  
    return (
      <div>
       <Router >
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
          <Routes>
            <Route exact path='/' element={<News setProgress={ setProgress} apiKey = { apiKey} key='home' category='general' pageSize={ pageSize} country='in' />}></Route>
            <Route exact path='/business' element={<News setProgress={ setProgress} apiKey = { apiKey} key='business' category='business' pageSize={ pageSize} country='in' />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={ setProgress} apiKey = { apiKey} key='entertainment' category='entertainment' pageSize={ pageSize} country='in'  />}></Route>
            <Route exact path='/general' element={<News setProgress={ setProgress} apiKey = { apiKey} key='general' category='general' pageSize={ pageSize} country='in' />}></Route>
            <Route exact path='/health' element={<News setProgress={ setProgress} apiKey = { apiKey} key='health' category='health' pageSize={ pageSize} country='in'  />}></Route>
            <Route exact path='/science' element={<News setProgress={ setProgress} apiKey = { apiKey} key='science' category='science' pageSize={ pageSize} country='in'  />}></Route>
            <Route exact path='/sports' element={<News setProgress={ setProgress} apiKey = { apiKey} key='sports' category='sports' pageSize={ pageSize} country='in' />}></Route>
            <Route exact path='/technology' element={<News setProgress={ setProgress} apiKey = { apiKey} key='technology' category='technology' pageSize={ pageSize} country='in'  />}></Route>
          </Routes>
        </Router>
      </div>
    )
  
}

export default App;