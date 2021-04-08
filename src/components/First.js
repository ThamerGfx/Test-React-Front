import React from 'react'

import image1 from '../images/main-banner.jpg'

const styleback = {
    'backgroundImage': `url(${image1})`,
    'backgroundSize': 'cover',
    'backgroundRepeat': 'no-repeat'
}

export default function First() {
    return (
        <div>
            <div style={styleback}>
                <div class="container">
                <br/><br/><br/><br/>
                    <div class="row">
                        <h1 class="col-6">
                            ΕΚΤΥΠΩΕΝΑ ΠΟΛΛΑΠΛΩΝ ΧΡΗΣΕΩΝ ΠΟΤΗΡΙΑ
                        </h1>
                    <div>
                        <h5 class="col-5" style={{fontSize: 10}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt, 
                            mauris quis rhoncus dignissim, nisi mauris gravida justo, eget condimentum mi 
                            lacus vitae eros. Proin cursus dui tortor, non facilisis nulla sagittis non. 
                            Aliquam at cursus nibh.
                        </h5>
                        <br/>
                    </div>
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn" role="group" aria-label="First group">
                            <button type="button" class="col btn btn-warning  btn-sm">
                                ΦΤΙΑΞΕ ΤΟ ΔΙΚΟ ΣΟΥ
                            </button>
                        </div>
                        <div class="btn" role="group" aria-label="Second group">
                            <button type="button" class="col btn btn-outline-light btn-sm">
                                ΓΙΑ ΕΠΑΓΓΕΛΜΑΤΙΕΣ
                            </button>
                        </div>
                    </div>
                    </div>
                    <br/><br/><br/><br/>
                </div>
            </div>
        </div>
    )
}
