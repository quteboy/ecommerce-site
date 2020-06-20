import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Toolbar2 extends Component{
  state = {
    auth: false,
    slide: 0, 
    lastScrollY: 0,  
  };

  componentWillMount() {
  
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
  
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state; 
    const currentScrollY = window.scrollY;


    if (currentScrollY > lastScrollY) {
      this.setState({ slide: '-48px' });
    } else {
      this.setState({ slide: '0px' });
    }
    this.setState({ lastScrollY: currentScrollY });
  };


    render(){     
      
        
        return(
            <Fragment>
           

<div
        style={{
          transform: `translate(0, ${this.state.slide})`,
          transition: 'transform 90ms linear',         
          position:`absolute`,
          top:43,
          left:0,
          right:0
        }}
      >


<form style={{padding:"0 16px",width:"100%",zIndex:1009}} className="w3-bar-item w3-black w3-large" >
            <input className="w3-round-large" type="search"  placeholder="search"style={{width:"100%"}} />
        </form>
              
            
        <div className="w3-black">
       
        <Link to="/profile"
           className="w3-bar-item w3-button w3-hover-white"
           style={{ width: "25%" }}
         >
           Prime
         </Link>
         <button
           className="w3-bar-item w3-button w3-hover-white"
           style={{ width: "25%" }}
         >
           Grocery
         </button>
         <button
           className="w3-bar-item w3-button w3-hover-white"
           style={{ width: "25%" }}
         >
           Mobile
         </button>
         <button
           className="w3-bar-item w3-button w3-hover-white"
           style={{ width: "25%" }}
         >
           Fashion
         </button>
         </div>
        </div>
        
         </Fragment>



        )
    }
}

export default Toolbar2;