import logo from './../res/logo.png'
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import Button from 'react-bootstrap/Button';
import polls from './../res/polls.jpeg'

function Header() {
    return (
        <div className='rootDiv' style={{backgroundImage: `linear-gradient(to bottom, rgba(232,66,94,0.9) 0%,rgba(36,22,102,0.8) 100%), url(${polls})`}}>
            <div className='horizontalDiv' style={{justifyContent:'space-between'}}>
                <img style={{width:'200px'}} src={logo}></img>
                <div>
                    <Button className='headerButton' onClick={() => (alert('To Do'))}>Login</Button>
                    <Button className='headerButton' style={{ borderColor: 'white' }} onClick={() => (alert('To Do'))}>SIGN UP</Button>
                </div>
            </div>

            <h1 className='headerText' >Your Live &<br />On-Demand<br />Events Platform</h1>
            <p className='text' style={{color:'white', fontSize:'20pt', textAlign:'center'}}>JUNO is an online events platform built to engage<br />with your audience 365 days a year.</p>
            <Button className='button' style={{color:'gray', backgroundColor:'white'}} onClick={() => (alert('To Do'))}><PlayArrowOutlinedIcon />Get Started</Button>
            <div className='getAppDiv'>
                <Button className='appButton' onClick={() => (alert('To Do'))}><AppleIcon /></Button>
                <Button className='appButton' onClick={() => (alert('To Do'))}><AndroidIcon /></Button>
                <p className='text' style={{color:'white', fontSize:'20pt'}}>Get the app today</p>
            </div>

        </div>
    );
}

export default Header;