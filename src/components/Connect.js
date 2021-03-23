import devices from './../res/devices.png'

function HowItWorks() {
    return (
        <div class="rootDiv" style={{ background: 'linear-gradient(170deg, white 65%, #F7F7F7 65%)' }}>
            <div className='horizontalDiv' style={{ justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1 classname='text' style={{ fontSize: '50pt' }} >Connect your people.<br />No matter the medium.</h1>
                    <p classname='text' style={{ fontSize: '20pt' }} >Juno equips you to step in without the barriers of<br />location.</p>
                </div>
            </div>
            <img src={devices}></img>
        </div>
    );
}

export default HowItWorks;