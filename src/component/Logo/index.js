import React,{Component} from 'react';
import './styles.css';

class Logo extends Component {
    render(){
        return(
            <div>
                <img src={require('../../assets/volkswagen.png')} className='box-shadow' />
            </div>
        )
    }
}


export default Logo;