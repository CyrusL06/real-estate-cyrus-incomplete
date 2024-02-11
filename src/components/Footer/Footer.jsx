import React from 'react'
import'./Footer.css'
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            {/*left slide*/}
            <div className="flexColStart f-left">
                    <img src="logo2.png" alt="" width={120}/>
                    <span className="secondaryText">
                    Our vision is to make all people
                    <br />the best place to live for them.
                    </span>
            </div>

            {/*Right slide*/}
            <div className="fllexColStart f-right">
                <span className='primaryText'>Information</span>
                <div className="secondtext">
                <span className="secondaryText">123 British Columbia, 234F3, Canada</span>
                </div>
                

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
