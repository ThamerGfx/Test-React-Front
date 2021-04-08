/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../App.css'

import image1 from '../images/yellow-PrintShop.jpg'
import image2 from '../images/image.png'
import product1 from '../images/product-1.jpg'
import product2 from '../images/product-2.jpg'
import product3 from '../images/product-3.jpg'
import product4 from '../images/product-4.jpg'


export default function Seconde() {
    return (
        <div>
            <div style={{backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div class="container" >
                    <div class="row">
                        <div class="col-8">  
                            <br/><br/>
                            <h1>
                                ΜΟΝΑΔΙΚΑ ΠΡΟÏΟΝΤΑ ΣΕ ΕΚΠΛΗΚΤΙΚΕΣ ΤΙΜΕΣ
                            </h1>  
                            <br/><br/><br/><br/><br/>
                            <button type="button" class="btn btn-outline-dark col-4" style={{color: 'black'}}>
                                ΠΡΟΣΦΟΡΕΣ
                            </button>
                        </div>	
                        <div class="col-4"> 
                            <br/><br/>
                            <img src={image2} style={{width: '100%', height: '100%'}} alt=""/>  
                        </div>	
                    </div>
                </div>
            </div>
            <div class="container">
                <br/><br/>
                <center><h1 class="col-5">ΕΒΔΟΜΑΔΙΑΙΕΣ ΠΡΟΤΑΣΕΙΣ</h1></center>
                <center><p class="col-5">Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore id</p></center>
                <div class="row">
                    <div class="col-md-12" >
                    
                        <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="2" class="active"></li>
                        </ol>   
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row">
                                    <div class="col-3">
                                        <div class="thumb-wrapper">
                                            <div class="img-box">
                                                <img src={product1} class="img-fluid" alt=""/>
                                            </div>
                                            <div class="thumb-content">
                                                    <div class="row">

                                                        <div class="col-8">
                                                            <h4 style={{textAlign: 'left'}}>BAGS</h4>
                                                            <h6 style={{textAlign: 'left', color: 'grey', fontSize: 11}}>aper bag</h6>
                                                        </div>
                                                        <div class="col-4" style={{marginTop: '4%', color: 'grey'}}>
                                                            <span class="item-price">$6.00</span> 
                                                        </div>
                                                    </div>
                                            </div>						
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="thumb-wrapper">
                                            <div class="img-box">
                                                <img src={product2} class="img-fluid" alt=""/>
                                            </div>
                                            <div class="thumb-content">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <h4 style={{textAlign: 'left'}}>CANS</h4>
                                                        <h6 style={{textAlign: 'left', color: 'grey', fontSize: 11}}>Packaging</h6>
                                                    </div>
                                                    <div class="col-6" style={{fontSize: 15, marginTop: '4%', color: 'grey'}}>
                                                        <span class="item-price"><strike>$9.00</strike> $7.00</span>
                                                    </div>
                                                </div>
                                            </div>						
                                        </div>
                                    </div>		
                                    <div class="col-3">
                                        <div class="thumb-wrapper">
                                            <div class="img-box">
                                                <img src={product3} class="img-fluid" alt=""/>
                                            </div>
                                            <div class="thumb-content">
                                                <div class="row">
                                                    <div class="col-8">
                                                        <h4 style={{textAlign: 'left'}}>SHUTTER</h4>
                                                        <h6 style={{textAlign: 'left', color: 'grey', fontSize: 11}}>Packaging</h6>
                                                    </div>
                                                    <div class="col-4" style={{marginTop: '4%', color: 'grey'}}>
                                                        <span class="item-price">$10.00</span> 
                                                    </div>
                                                </div>
                                            </div>						
                                        </div>
                                    </div>								
                                    <div class="col-3">
                                        <div class="thumb-wrapper">
                                            <div class="img-box">
                                                <img src={product4} class="img-fluid" alt=""/>
                                            </div>
                                            <div class="thumb-content">
                                                <div class="row">
                                                    <div class="col-8">
                                                        <h4 style={{textAlign: 'left'}}>CORK</h4>
                                                        <h6 style={{textAlign: 'left', color: 'grey', fontSize: 11}}>Magazine</h6>
                                                    </div>
                                                    <div class="col-4" style={{marginTop: '4%', color: 'grey'}}>
                                                        <span class="item-price">$10.00</span> 
                                                    </div>
                                                </div>
                                            </div>						
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
        </div>
    )
}
