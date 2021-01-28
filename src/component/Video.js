import React from 'react'

import './video.scss'
const video = () => {

    const playvideo = e => {
        e.target.play()
    }

    const pausevideo = e => {
        e.target.pause()
    }

    return (
        
        <div class="wrapper">
            
            {/* <h1>Netflix</h1> */}
            <section id="section1">
                <a href="#section3">&#60;</a>
                <div class="item" > 
                    <video preload="auto" loop onMouseOver={playvideo} onMouseOut={pausevideo} width="350" height="256.703">
                        <source src="https://htmlreference.io/assets/HTML%205%20Video.mp4" type="video/mp4"></source>
                    </video>
                    
                </div>
                <div class="item" > 
                    <video preload="auto" loop onMouseOver={playvideo} onMouseOut={pausevideo} width="350" height="256.703">
                        <source src="https://htmlreference.io/assets/HTML%205%20Video.mp4" type="video/mp4"></source>
                    </video>
                </div>
                <div class="item" > 
                    <video preload="auto" loop onMouseOver={playvideo} onMouseOut={pausevideo} width="350" height="256.703">
                        <source src="https://htmlreference.io/assets/HTML%205%20Video.mp4" type="video/mp4"></source>
                    </video>                
                </div>
                <div class="item" > 
                    <video preload="auto" loop onMouseOver={playvideo} onMouseOut={pausevideo} width="350" height="256.703">
                        <source src="https://htmlreference.io/assets/HTML%205%20Video.mp4" type="video/mp4"></source>
                    </video>                
                </div>
                <div class="item" > 
                    <video preload="auto" loop onMouseOver={playvideo} onMouseOut={pausevideo} width="350" height="256.703">
                        <source src="https://htmlreference.io/assets/HTML%205%20Video.mp4" type="video/mp4"></source>
                    </video>                
                </div>
                <a href="#section2" >&#62;</a>
            </section>
            <section id="section2">
                <a href="#section1" >&#60;</a>
                <div class="item" > 
                    <video preload="auto" loop onMouseOver={playvideo} onMouseOut={pausevideo} width="350" height="256.703">
                        <source src="https://htmlreference.io/assets/HTML%205%20Video.mp4" type="video/mp4"></source>
                    </video>                
                </div>
                <div class="item" > 
                    <video preload="auto" loop onMouseOver={playvideo} onMouseOut={pausevideo} width="350" height="256.703">
                        <source src="https://htmlreference.io/assets/HTML%205%20Video.mp4" type="video/mp4"></source>
                    </video>                
                </div>
                <div class="item" > 
                    <video preload="auto" loop onMouseOver={playvideo} onMouseOut={pausevideo} width="350" height="256.703">
                        <source src="https://htmlreference.io/assets/HTML%205%20Video.mp4" type="video/mp4"></source>
                    </video>                
                </div>
                <div class="item" > 
                    <video preload="auto" loop onMouseOver={playvideo} onMouseOut={pausevideo} width="350" height="256.703">
                        <source src="https://htmlreference.io/assets/HTML%205%20Video.mp4" type="video/mp4"></source>
                    </video>                
                </div>
                <div class="item" > 
                    <video preload="auto" loop onMouseOver={playvideo} onMouseOut={pausevideo} width="350" height="256.703">
                        <source src="https://htmlreference.io/assets/HTML%205%20Video.mp4" type="video/mp4"></source>
                    </video>                
                </div>
                <a href="#section3" >&#62;</a>
            </section>
            <section id="section3">
                <a href="#section2" >&#60;</a>
                <div class="item" > 
                    <video preload="auto" loop onMouseOver={playvideo} onMouseOut={pausevideo} width="350" height="256.703">
                        <source src="https://htmlreference.io/assets/HTML%205%20Video.mp4" type="video/mp4"></source>
                    </video>                
                </div>
                <div class="item" > 
                    <video preload="auto" loop onMouseOver={playvideo} onMouseOut={pausevideo} width="350" height="256.703">
                        <source src="https://htmlreference.io/assets/HTML%205%20Video.mp4" type="video/mp4"></source>
                    </video>                
                </div>
                <div class="item" > 
                    <video preload="auto" loop onMouseOver={playvideo} onMouseOut={pausevideo} width="350" height="256.703">
                        <source src="https://htmlreference.io/assets/HTML%205%20Video.mp4" type="video/mp4"></source>
                    </video>                
                </div>
                <div class="item" > 
                    <video preload="auto" loop onMouseOver={playvideo} onMouseOut={pausevideo} width="350" height="256.703">
                        <source src="https://htmlreference.io/assets/HTML%205%20Video.mp4" type="video/mp4"></source>
                    </video>                
                </div>
                <div class="item" > 
                    <video preload="auto" loop onMouseOver={playvideo} onMouseOut={pausevideo} width="350" height="256.703">
                        <source src="https://htmlreference.io/assets/HTML%205%20Video.mp4" type="video/mp4"></source>
                    </video>                
                </div>
                <a href="#section1" >&#62;</a>
            </section>
            
        </div>
    )
}

export default video
