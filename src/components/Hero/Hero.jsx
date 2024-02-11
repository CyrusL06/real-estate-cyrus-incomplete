import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from "react-countup"
    const Hero = () => {
        return(
            <section className="hero-wrapper">
                <div className="paddings innerWidth flexCenter hero-container ">

                    <div className="flexColStart hero-left">
                              {/**LEFT SIDE TITLE */}
                        <div className="hero-title">
                         <div className="orange-circle"></div>
                            <h1>
                              Discover<br/ > 
                               Most Suitable<br/ >
                               Property<br/ >
                            </h1>
                            </div>
                              {/**DESCRIPTION */}
                            <div className="flexColStart hero-des">  
                             <span className='secondaryText'>   Find a variety of properties that suit you very easilty</span>
                             <span className='secondaryText'>   Forget all difficulties in finding a residence for you</span>
                            </div>

                            <div className="flexCenter search-bar">
                                <HiLocationMarker color="var(--blue)" size={25} />
                                <input type='text'/>
                                <button className="button">Search</button>
                            </div>
                        

                            {/**Count start 1*/}
                        <div className="flexCenter stats">
                            <div className="flexColStart stat">
                                <span>
                                    <CountUp start={8800} end={9000} duration={4} />
                                    <span>+</span>
                                    </span><span className='secondaryText'>
                                        Premium Product
                                    </span>
                            </div>
                             {/**Count start 2*/}
                       
                            <div className="flexColStart stat">
                                <span>
                                    <CountUp start={1950} end={2000} duration={4} />
                                    <span>+</span>
                                    </span><span className='secondaryText'>
                                        Happy Customer
                                    </span>
                            </div>
                            
                       
                        {/**Count start 3*/}
                       
                            <div className="flexColStart stat">
                                <span>
                                    <CountUp end={28} />
                                    <span>+</span>
                                    </span><span className='secondaryText'>
                                        Award Winning
                                    </span>
                            </div>
                            
                        
                        </div>
                      
                        
                    </div>

                    
                    {/**Right side */}
                    <div className="flexCenter hero-right">
                        <div className="image-container">
                            <img src="./hero-image.png" alt="" />
                        </div>
                        
                    </div>
                </div>
            </section>
        )
    }

    export default Hero