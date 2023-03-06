//import ReactDOM from 'react-dom/client';
import React, {Component} from 'react';
import $ from 'jquery';

import Header from './components/Header'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Catalog from './components/Catalog'
import Join from './components/Join'
import About from './components/About'
//import SearchBar from './components/SearchBar'

import './css/About.css';
import './css/Join.css';
import './css/Catalog.css';
import './css/Navline.css';
import './css/Header.css';



export default class App extends Component
{ 
   
  componentDidMount() { $('.'+ window.cLang).addClass('langActive');}

  render(){
  return (
    <>
    <Header/>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/About'  element={<><About/></>}/>
        <Route path='/Catalog' element={<><Catalog /></>}/>
        <Route path='/Join' element={<><Join/></>}/>
        <Route  path="/" element={<><About/></>}/>
      </Routes>
    </Router>   
    </>
  
  )
  }
};
