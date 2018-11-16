///////////////////
// MenuContainer //
///////////////////
import React,{Component} from 'react';
class MenuContainer extends Component {
    constructor(props) {
      super(props)
      
      this.state = {
        activeItem: '',
        activeItemPosition: 0,
        activeItemColor: '',
        menuItems: [
          { text: 'Home' },
          { text: 'Gallery' },
          { text: 'About' },
          { text: 'Blog' },
          { text: 'Contact' },
        ],
      }
      
      this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(activeItem) {
      return e => {
        e.preventDefault()
      
        this.setState({
          activeItem,
          activeItemPosition: document.getElementById(activeItem).offsetTop,
          activeItemColor: window.getComputedStyle(document.getElementById(activeItem)).getPropertyValue('background-color'),
        })
      }
    }
    
    render() {
      const menuItems = this.state.menuItems.map(item => <MenuItem item={ item } handleClick={ this.handleClick }/>)
      return (
        <div className='menu-container'>
          <span className='menu-item--active' style={{ top: this.state.activeItemPosition, backgroundColor: this.state.activeItemColor }}/>
          { menuItems }
        </div>
      )
    }
  }

  export default MenuContainer;