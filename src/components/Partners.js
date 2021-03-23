import aamft from './../res/aamft.png'
import lifeway from './../res/lifeway.png'
import mors from './../res/mors.png'
import network from './../res/network.png'
import acep from './../res/acep.png'
import saem from './../res/saem.png'
import pcma from './../res/pcma.png'
import klove from './../res/klove.png'

function Partners() {
    return (
        <div className='rootDiv' style={{ backgroundColor: '#F7F7F7' }}>
            <h1 className='text' style={{ fontSize: '50pt' }}>Our Partners</h1>
            <p classname='text' style={{ fontSize: '20pt' }}>Trusted by world-leading organizations</p>
            <div className='horizontalDiv' style={{ justifyContent: 'space-between', margin:'50px' }}>
                <img src={aamft} className='partner'></img>
                <img src={lifeway} className='partner'></img>
                <img src={mors} className='partner'></img>
            </div>
            <div className='horizontalDiv' style={{ justifyContent: 'space-around', margin:'50px' }}>
                <img src={network} className='partner'></img>
                <img src={acep} className='partner'></img>
            </div>
            <div className='horizontalDiv' style={{ justifyContent: 'space-between', margin:'50px' }}>
                <img src={saem} className='partner'></img>
                <img src={pcma} className='partner'></img>
                <img src={klove} className='partner'></img>
            </div>
        </div>
    );
}

export default Partners;