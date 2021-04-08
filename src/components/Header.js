/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import image1 from '../images/worldwide.png'
import image2 from '../images/h1-top-header-line-img-1.jpg'
import image3 from '../images/logo-black.png'
import image4 from '../images/magnifying-glass.png'
import image5 from '../images/user2.png'
import image6 from '../images/shopping-carrt.png'

export default function Header() {
    return (
        <div>
            <div style={{backgroundColor: 'black'}}>
                <div class="container" style={{padding: '0.3%'}}>
                    <img src={image1} style={{width: '2%',height: '2%'}} alt="" />
                    <small style={{fontStyle: 'normal',fontFamily: 'Arimo',color: 'white', marginLeft: '0.5%'}}>
                        Eλληνικά
                    </small>
                </div>
            </div>
            <img src={image2} alt="" width="100%" height="100%" style={{marginTop: -26}}/>
            <nav class="container navbar navbar-expand-lg navbar-light bg-white">
                <a class="navbar-brand" href="#"><img src={image3} alt=""/></a>
                <button 
                    class="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent"
                    aria-expanded="true" 
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav mr-auto" style={{fontSize: 12, color: 'black'}}>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <strong>ΔΩΡΑ</strong> 
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <strong>ΕΚΤΥΠΩΣΕΙΣ ΕΝΔΥΜΑΤΩΝ</strong>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <strong>ΑΥΤΟΚΟΛΛΗΤΑ</strong>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <strong>ΚΑΜΒΑΔΕΣ</strong>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <strong>ΚΕΝΤΗΜΑΤΑ ΕΝΔΥΜΑΤΩΝ</strong>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <strong>OFFSET ΕΚΤΥΠΩΣΕΙΣ</strong>
                            </a>
                        </li>
                    </ul>
                    <img style={{width: '2%', height: '2%', margin: '1%'}} src={image4} alt=""/>
                    <img style={{width: '2%', height: '2%', margin: '1%'}} src={image5} alt=""/>
                    <img style={{width: '2%', height: '2%', margin: '1%'}} src={image6} alt=""/>
                </div>
            </nav>
        </div>
    )
}
