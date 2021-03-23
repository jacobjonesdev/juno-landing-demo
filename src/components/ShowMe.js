import coding from './../res/coding.jpg'
import Button from 'react-bootstrap/Button';
import ReactPlayer from "react-player"

function ShowMe() {
  return (
    <div class='horizontalDiv' style={{ backgroundImage: `url(${coding})`}}>
      <div className='rootDiv'>
        <h1 className='text' style={{ fontSize: '50pt', color: 'white' }}>Show Me Juno</h1>
        <p className='text' style={{ fontSize: '20pt', color: 'white' }}>Are you ready to bring energy, creativity,<br />and connectivity to your organization?<br />JUNO will launch your vision and<br />mission iinto a virtual experience, second<br />to none.</p>
        <Button className='button' style={{ backgroundColor: '#C7169C', color: 'white' }}>SCHEDULE A DEMO TODAY</Button>
      </div>
      <ReactPlayer style={{
        flex:2,
        minHeight:'500px',
        margin:'50px'
      }}
        url="https://fast.wistia.net/embed/iframe/nzvwflxfgw"
      />
    </div>
  );
}

export default ShowMe;