import React from 'react'

import image1 from '../images/category-1.jpg'
import image2 from '../images/category-2.jpg'
import image3 from '../images/category-3.jpg'
import image4 from '../images/category-4.jpg'
import image5 from '../images/category-5.jpg'
import image6 from '../images/category-6.jpg'

export default function Third() {
    return (
        <div class="container-fluid h-100">
            <div>
                <div class="row row-cols-2">
                    <div class="col" style={{background: `url(${image1})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover', width: '100%'}}>
                        <div style={{paddingTop: 230, color: 'white'}}>
                            <h6 class="col">
                                Πίνακες σε Καμβά
                            </h6>
                            <div>
                                <h3 class="col" style={{paddingTop: -100}}>
                                    ΚΑΜΒΑΔΕΣ
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="col" style={{background: `url(${image2})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
                        <div style={{paddingTop: 230, color: 'white'}}>
                            <h6 class="col">
                                Αυτοκόλλητα,Αυτοκόλλητες Ταπετσαρίες
                            </h6>
                            <div>
                                <h3 class="col" style={{paddingTop: -100}}>
                                    ΤΑΠΕΤΣΑΡΙΕΣ
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-2" style={{backgroundSize: 'contain'}}>
                    <div class="col" style={{background: `url(${image3})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
                        <div style={{paddingTop: 230, color: 'white'}}>
                            <h6 class="col">
                                Κούπες, Στύλό,Δώρα
                            </h6>
                            <div>
                                <h3 class="col" style={{paddingTop: -100}}>
                                    ΑΠΕΥΘΕΙΑΣ ΕΚΤΥΠΩΣΕΙΣ
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="col" style={{background: `url(${image4})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
                        <div style={{paddingTop: 230, color: 'white'}}>
                            <h6 class="col">
                                Μπλούζες,Καπέλα, Αξεσουάρ
                            </h6>
                            <div>
                                <h3 class="col" style={{paddingTop: -100}}>
                                    ΡΟΥΧΙΣΜΟΣ
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-2" style={{backgroundSize: 'contain'}}>
                    <div class="col" style={{background: `url(${image5})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
                        <div style={{paddingTop: 230, color: 'white'}}>
                            <h6 class="col">
                                Ποτήρια
                            </h6>
                            <div>
                                <h3 class="col" style={{paddingTop: -100}}>
                                    ΠΟΛΛΑΠΛΩΝ ΧΡΗΣΕΩΝ
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="col" style={{background: `url(${image6})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
                        <div style={{paddingTop: 230, color: 'white'}}>
                            <h6 class="col">
                                Φακέλοι,Φυλλάδια, Ημερολόγια
                            </h6>
                            <div>
                                <h3 class="col" style={{paddingTop: -100}}>
                                    ΕΝΤΥΠΑ
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
