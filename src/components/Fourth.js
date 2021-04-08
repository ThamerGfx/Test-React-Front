import React from 'react'

import image1 from '../images/logo-white.png'

export default function Fourth() {
    return (
        <div style={{backgroundColor: 'black'}}>
            <div class="container-fluid" style={{paddingBottom: 100, paddingTop: 20}}>
                <div class="row align-items-start">
                    <div class="col">
                        <img src={image1} alt=""/>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-3">
                        <div style={{color: 'grey'}}>
                            <h6 style={{fontSize: 15}}>
                                Sed semper, urna et viverra fermentum, turpis orci suscipit libero, 
                                at porta eros eros eget neque. Fusce est felis, dictum congue vitae, 
                                habitasse condimentum felis. Etiam velit tortor, ullamcorper conubia et cursus.
                            </h6>
                        </div>
                    </div>
                    <div class="col-3" style={{color: 'grey'}}>
                        <strong style={{color: 'white'}}>ΧΡΗΣΙΜΑ LINKS</strong> 
                        <div>Όροι χρήσης</div>
                        <div>Τρόποι Αποστολής</div>
                        <div>Τρόποι πληρωμής</div>
                        <div>Επικοινωία</div>
                    </div>
                    <div class="col" style={{color: 'grey'}}>
                        <strong style={{color: 'white'}}>ΕΠΙΚΟΙΝΩΝΙΑ</strong> 
                        <div>New York, NY 10013</div>
                        <div>(315)5512-2579</div>
                        <div>etchy@qode.com</div>
                        <div style={{marginTop: '4%'}}>
                            Get weekly newsletters
                            <div class="justify-content-end" style={{marginTop: -21}}>
                                <i class="far fa-paper-plane" style={{marginLeft: '45%'}}></i>
                        <hr class="col-5" style={{marginTop: -0.1, width: '100%'}}/>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
