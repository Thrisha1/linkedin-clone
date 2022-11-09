import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';

function Sidebarbotm() {
  return (
    <div className="sbar about mt-2">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button about" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Recent
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body ">
                    <div className="s1 d-flex justify-content-between">
                    <BusinessIcon/> <p className="text-truncate">Microsoft Learn Student Ambassadors</p>
                    </div>
                    <div className="s1 d-flex justify-content-between">
                    <BusinessIcon/> <p className="text-truncate">Microsoft Learn Student Ambassadors</p>
                    </div>
                    <div className="s1 d-flex justify-content-between">
                    <BusinessIcon/> <p className="text-truncate">Microsoft Learn Student Ambassadors</p>
                    </div>
                    </div>  
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headiTwo">
                <button class="accordion-button about" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    Groups
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body ">
                    <div className="s1 d-flex justify-content-between">
                    <BusinessIcon/> <p className="text-truncate">Microsoft Learn Student Ambassadors</p>
                    </div>
                    <div className="s1 d-flex justify-content-between">
                    <BusinessIcon/> <p className="text-truncate">Microsoft Learn Student Ambassadors</p>
                    </div>
                    <div className="s1 d-flex justify-content-between">
                    <BusinessIcon/> <p className="text-truncate">Microsoft Learn Student Ambassadors</p>
                    </div>
                    </div>  
                </div>
            </div>
            
        </div>
    </div>

  )
}

export default Sidebarbotm