import React from 'react';

// import bb from './blank.webp';
const Index = () => {
  return (
    <>
    <div class="img">
    <div className="profile-container">
      <div className="profile-content">
        <div className="about-section">
          <h2 className="about-title">A BIT ABOUT ME</h2>
          <h1 className="main-title">Who Am I?</h1>
          
          <div className="profile-image-container">
            {/* <img 
              src={bb}
              alt="Profile" 
              className="profile-image"
            /> */}
          </div>
          
          <p className="profile-description">
            Hi I'm AMRITA PATIDAR.As a dedicated Full-Stack Developer student, I am passionate about turning innovative ideas into reality. My journey through the world of web development has equipped me with a diverse skill set that spans both front-end and back-end technologies.
          </p>
          
        
        </div>
        
        <div className="skills-container">
          <div className="skill-card">
            <div className="icon-container">
             <svg
  className="skill-icon"
  style={{ width: '24px', height: '24px' }}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM9.5 13.5L6.5 10.5L5 12L9.5 16.5L19 7L17.5 5.5L9.5 13.5Z"
    fill="#F97316"
  />
</svg>
            </div>
            <h3 className="skill-title">Graphic Design</h3>
            <div className="more-container">
              <p className="more-text">MORE</p>
              <div className="more-line"></div>
            </div>
          </div>
          
          <div className="skill-card">
            <div className="icon-container">
              <svg
  className="skill-icon"
  style={{ width: '22px', height: '22px' }}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2ZM21 20H3V6H21V20Z" fill="#F97316"/>
  <path d="M12 7H7V12H12V7Z" fill="#F97316"/>
  <path d="M17 7H14V9H17V7Z" fill="#F97316"/>
  <path d="M17 10H14V12H17V10Z" fill="#F97316"/>
  <path d="M17 13H7V15H17V13Z" fill="#F97316"/>
  <path d="M17 16H7V18H17V16Z" fill="#F97316"/>
</svg>

            </div>
            <h3 className="skill-title">Web Design</h3>
            <div className="more-container">
              <p className="more-text">MORE</p>
              <div className="more-line"></div>
            </div>
          </div>
          
          <div className="skill-card">
            <div className="icon-container">
             <svg
  className="skill-icon"
  style={{ width: '22px', height: '22px' }}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z" fill="#F97316"/>
  <path d="M6.5 9H8.5V11H6.5V9Z" fill="#F97316"/>
  <path d="M9.5 9H11.5V11H9.5V9Z" fill="#F97316"/>
  <path d="M12.5 9H14.5V11H12.5V9Z" fill="#F97316"/>
  <path d="M15.5 9H17.5V11H15.5V9Z" fill="#F97316"/>
  <path d="M6.5 12H8.5V14H6.5V12Z" fill="#F97316"/>
  <path d="M9.5 12H17.5V14H9.5V12Z" fill="#F97316"/>
</svg>

            </div>
            <h3 className="skill-title">Software</h3>
            <div className="more-container">
              <p className="more-text">MORE</p>
              <div className="more-line"></div>
            </div>
          </div>
          
          <div className="skill-card">
            <div className="icon-container">
             <svg
  className="skill-icon"
  style={{ width: '22px', height: '22px' }}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M4 8H8V4H4V8Z" fill="#F97316"/>
  <path d="M10 8H14V4H10V8Z" fill="#F97316"/>
  <path d="M16 4V8H20V4H16Z" fill="#F97316"/>
  <path d="M4 14H8V10H4V14Z" fill="#F97316"/>
  <path d="M10 14H14V10H10V14Z" fill="#F97316"/>
  <path d="M16 14H20V10H16V14Z" fill="#F97316"/>
  <path d="M4 20H8V16H4V20Z" fill="#F97316"/>
  <path d="M10 20H14V16H10V20Z" fill="#F97316"/>
  <path d="M16 20H20V16H16V20Z" fill="#F97316"/>
</svg>

            </div> 
            <h3 className="skill-title">Application</h3>
            <div className="more-container">
              <p className="more-text">MORE</p>
              <div className="more-line"></div>
              
            </div>
            
          </div>
          <br /><br /><br /><br /><br />
        </div>
      </div>
      <br /><br /><br /><br /><br />
    </div>
    </div>
    </>
  );
};

export default Index;