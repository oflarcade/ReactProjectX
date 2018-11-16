import React, {Component} from 'react';
import './style.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Menu extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         index: 0,
      };
    };
    
    renderHelper = (index) => {
        switch(index){
            case 0:
            return (
                <Slide left key={index}>
                    <img src={require('../../assets/293571-P7SLFB-706.jpg')} className='background' />
                </Slide>
            )
            case 1:
            return (
                <Slide left key={index}>
                    <img src={require('../../assets/bundesLiga1.jpg')} className='background' />
                </Slide>
            )
            case 2:
            return (
                <Fade right key={index}>
                    <img src={require('../../assets/bundesLiga2.jpg')} className='background' />
                </Fade>
            )
            case 3:
            return (
                <Fade left key={index}>
                    <img src={require('../../assets/bundesLiga3.jpg')} className='background' />
                </Fade>
            )
            case 4:
            return (
                <Fade  right key={index}>
                    <img src={require('../../assets/bundesLiga4.jpg')} className='background' />
                </Fade>
            )
        }
    } 
    
    test =(value)=> {
        this.setState({index: value})
        console.log(value);
    }
    
    render() {
        return (
            <div>
            {this.renderHelper(this.state.index)}
            
            <Zoom>
            <ul className='container'>
                  <li className='item'><div onClick={()=>{this.test(0)}} className='box'>Button 1</div></li>
                  <li className='item'><div  onClick={()=>{this.test(1)}}  className='box'>Button 2</div></li>
                  <li className='item'><div  onClick={()=>{this.test(2)}} className='box'>Button 3</div></li>
                  <li className='item'><div  onClick={()=>{this.test(3)}} className='box'>Button 4</div></li>
                  <li className='item'><div  onClick={()=>{this.test(4)}} className='box'>Button 5</div></li>
                  
            </ul>
            </Zoom>
            </div>
        )
    }
}


export default Menu;