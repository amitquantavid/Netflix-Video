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
                    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYtsiJzlvKCPCDrMrJBCmaLhVY-HkNnvMYJg&usqp=CAU" alt="Movie" width="350" height="256.703" /> */}
                    <video preload="auto" loop onMouseOver={playvideo} onMouseOut={pausevideo} width="350" height="256.703">
                        <source src="https://htmlreference.io/assets/HTML%205%20Video.mp4" type="video/mp4"></source>
                    </video>
                    
                </div>
                <div class="item" > 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThI7OWfmYOvGDMmrB7ypX8K-Rm2i9r2avglw&usqp=CAU" alt="Movie" width="350" height="256.703" />
                </div>
                <div class="item" > 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9RCLT8RnHYS1NItHA7n8SkzRCdH59m6NUZQ&usqp=CAU" alt="Movie" width="350" height="256.703" />
                </div>
                <div class="item" > 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThI7OWfmYOvGDMmrB7ypX8K-Rm2i9r2avglw&usqp=CAU" alt="Movie" width="350" height="256.703" />
                </div>
                <div class="item" > 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxpUJarUSjrlf9pJyhpsfiaN0RK6e7xG7W6A&usqp=CAU" alt="Movie" width="350" height="256.703" />
                </div>
                <a href="#section2" >&#62;</a>
            </section>
            <section id="section2">
                <a href="#section1" >&#60;</a>
                <div class="item" > 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThI7OWfmYOvGDMmrB7ypX8K-Rm2i9r2avglw&usqp=CAU" alt="Movie" width="350" height="256.703" />
                </div>
                <div class="item" > 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxpUJarUSjrlf9pJyhpsfiaN0RK6e7xG7W6A&usqp=CAU" alt="Movie" width="350" height="256.703" />
                </div>
                <div class="item" > 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMVVfc4yKxzoKu_9iMbz41b7EbofGW10GwQ&usqp=CAU" alt="Movie" width="350" height="256.703" />
                </div>
                <div class="item" > 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxpUJarUSjrlf9pJyhpsfiaN0RK6e7xG7W6A&usqp=CAU" alt="Movie" width="350" height="256.703" />
                </div>
                <div class="item" > 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMVVfc4yKxzoKu_9iMbz41b7EbofGW10GwQ&usqp=CAU" alt="Movie" width="350" height="256.703" />
                </div>
                <a href="#section3" >&#62;</a>
            </section>
            <section id="section3">
                <a href="#section2" >&#60;</a>
                <div class="item" > 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYtsiJzlvKCPCDrMrJBCmaLhVY-HkNnvMYJg&usqp=CAU" alt="Movie" width="350" height="256.703" />
                </div>
                <div class="item" > 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThI7OWfmYOvGDMmrB7ypX8K-Rm2i9r2avglw&usqp=CAU" alt="Movie" width="350" height="256.703" />
                </div>
                <div class="item" > 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9RCLT8RnHYS1NItHA7n8SkzRCdH59m6NUZQ&usqp=CAU" alt="Movie" width="350" height="256.703" />
                </div>
                <div class="item" > 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThI7OWfmYOvGDMmrB7ypX8K-Rm2i9r2avglw&usqp=CAU" alt="Movie" width="350" height="256.703" />
                </div>
                <div class="item" > 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxpUJarUSjrlf9pJyhpsfiaN0RK6e7xG7W6A&usqp=CAU" alt="Movie" width="350" height="256.703" />
                </div>
                <a href="#section1" >&#62;</a>
            </section>
            
        </div>
    )
}

export default video
