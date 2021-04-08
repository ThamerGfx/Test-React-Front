/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import './App.css'





import Seconde from './components/Seconde'
import Third from './components/Third'
import First from './components/First'
import Fourth from './components/Fourth'
import Header from './components/Header'


// `url(${image3})`

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


/* 
<div style={{background: `url(${image2})`}}></div>
          <div class="container">
              <div class="row">
                  <div class="col-md-12" style={{marginRight: -10}}>
                      <nav class="navbar navbar-light navbar-expand-md navigation-clean" style={{fontSize: 14,lineHeight: 22,letterSpacing: 0,fontWeight: 'bold',textAlign: 'left'}}>
                          <div class="container">
                            <a class="navbar-brand" href="/" style={{background: `url(${image3})`,width: 221.078,height: 48,marginRight: 5,marginLeft: -30,marginTop: -21}}/>
                            <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1">
                              <span class="visually-hidden">Toggle navigation</span>
                              <span class="navbar-toggler-icon"/>
                            </button>
                              <div class="collapse navbar-collapse" id="navcol-1" style={{marginLeft: 4,marginRight: 327}}>
                                  <ul class="navbar-nav" style={{marginRight: -525}}>
                                      <li class="nav-item">
                                        <a class="nav-link active" href="#" style={{color: 'black'}}>
                                          Eλληνικά<br/>
                                        </a>
                                      </li>
                                      <li class="nav-item" style={{width: 214.938}}>
                                        <a class="nav-link" style={{color: 'dark'}}>
                                          EKTYΠΩΣEIΣ ENΔYMATΩN<br/>
                                        </a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" href="#" style={{color: 'dark'}}>
                                          AYTOKOΛΛHTA<br/>
                                        </a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" href="#" style={{color: 'dark'}}>
                                          KAMBAΔEΣ<br/>
                                        </a>
                                      </li>
                                      <li class="nav-item" style={{paddingTop: -33}}>
                                        <a class="nav-link" href="#" style={{color: 'dark'}}>
                                          KENTHMATA<br/>ENΔYMATΩN<br/>
                                        </a>
                                      </li>
                                      <li class="nav-item" style={{paddingRight: -23,paddingLeft: -17}}>
                                        <a class="nav-link" href="#" style={{color: 'dark'}}>
                                          OFFSET&nbsp;<br/>EKTYΠΩΣEIΣ<br/>
                                        </a>
                                      </li>
                                      <li class="nav-item" style={{paddingRight: -23,paddingLeft: -17}}>
                                          <form>
                                              <div class="float-start float-md-end mt-5 mt-md-0 search-area">
                                                <button 
                                                  class="btn btn-primary" 
                                                  type="button" 
                                                  style={{background: `url(${image4})`,backgroundPosition: 'center',backgroundRepeat: 'no-repeat',width: 33.5,marginTop: 6,height: 42,borderColor: 'white'}}
                                                ></button>
                                              </div>
                                          </form>
                                      </li>
                                      <li class="nav-item" style={{paddingRight: -23,paddingLeft: -17}}>
                                        <a class="nav-link" href="#" style={{color: 'dark'}}>
                                          <br/>
                                          <img src={image5} style={{width: 30,minWidth: 0,height: 34,marginTop: -38,minHeight: -9,marginRight: -8,maxWidth: 38}} alt=""/>
                                        </a>
                                      </li>
                                      <li class="nav-item" style={{paddingRight: -23,paddingLeft: -17}}>
                                        <a class="nav-link" href="#" style={{color: 'dark'}}>
                                          <img src={image6} style={{width: 37}} alt=""/>
                                          <br/>
                                        </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </nav>
                  </div>
              </div>
          </div>
*/