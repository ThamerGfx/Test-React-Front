/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './App.css'

import Seconde from './components/Seconde'
import Third from './components/Third'
import First from './components/First'
import Fourth from './components/Fourth'
import Header from './components/Header'

function App() {

  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <First/>
      </div>
      <div>
        <Seconde/>
      </div>
      <div>
        <Third/>
      </div>
      <div>
        <Fourth/>
      </div>
      <div>
        <a class="gotopbtn" href="#"> <i class="fas fa-chevron-up"></i> </a>
      </div>
    </div>
  );
}

export default App;