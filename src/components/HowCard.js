import { Component } from 'react';

class HowCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='horizontalDiv' style={{justifyContent:'flex-start', borderStyle:'solid none none none', borderColor:'lightgray'}}>
                <h1 className='text' style={{width:'10%', fontSize:'80pt', color:'lightgray'}}>{this.props.number}</h1>
                <h2 className='text' style={{fontSize:'26pt', width:'35%'}}>{this.props.title}</h2>
                <p className='text' style={{width:'50%', fontSize:'16pt'}}>{this.props.message}</p>
            </div>
          );
    };
  }
  
  export default HowCard;