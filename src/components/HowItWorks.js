import crowd from './../res/crowd.jpeg'
import meeting from './../res/meeting.jpeg'
import HowCard from './HowCard.js';
import Button from 'react-bootstrap/Button';

function HowItWorks() {
  return (
    <div className='rootDiv' style={{ backgroundImage: 'linear-gradient(to bottom, #F7F7F7, white)' }}>
      <div className='horizontalDiv'>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          justifyContent: 'flex-start'
        }}>
          <p className='text' style={{ fontSize: '20pt' }}>Our platform is designed around 4 human motivators</p>
          <h1 className='text' style={{ fontSize: '50pt' }}>Here's how it works</h1>
          <HowCard number='1' title='Connect your Crowds' message='Onboard users around interests, strengths and desired improvement areas and allow machine learning triggers to recommend peer connections, mainstage, and breakout learning oppurtunities.'></HowCard>
          <HowCard number='2' title='Gamify the Experience' message='Deliver powerful gamification tools supporting real-time and ongoing user competition. Weighted algorithms are also designed to increase check-ins and deeper discovery through rewards and recognition.'></HowCard>
          <HowCard number='3' title='Engage with Business Growth' message='Support users and partners by facilitating business connections through live exhibit experiences, digital think-tank sessions, suggested collaboration partnerships, and skills-based visibility tools.'></HowCard>
          <HowCard number='4' title='Continuous Interaction' message='Create EQ and IQ learning pathways to engage users on all levels. From certification and badging to goal setting and performance commitments, offer a diverse set of actions for users to personally develop.'></HowCard>
        </div>

        <div class="container">
          <div class="box">
          <img className='stackedImage' src={crowd}></img>

          </div>
          <div class="overlay">
          <img className='stackedImage' src={meeting}></img>

          </div>
        </div>
      </div>
      <Button className='button' style={{backgroundColor:'#C7169C', color:'white'}} onClick={() => (alert('To Do'))}>SCHEDULE A DEMO TODAY</Button>
    </div>
  );
}

export default HowItWorks;