import React from 'react'
import './Home2.css'

import logo from './intro-video.mp4'
export default function About() {
  return (
  <>
 
  <div class="videob">
    <div className="video"> 
        <video className="loop" loop muted autoPlay> 
            <source src={logo} type="video/mp4" />
          </video> 
        </div>
        </div>
    
        </>

  )
}