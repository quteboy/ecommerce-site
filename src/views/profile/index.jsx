import React,{Component,Fragment} from "react";

import Toolbar from "appRoot/components/Toolbar";
import Drawer from "appRoot/components/Drawer";
import Drawer2 from "appRoot/components/Drawer2";



class ProfileView extends Component{

    
render(){
  
    

   
    return(
        <Fragment>
          <Toolbar />
          <Drawer />
          <Drawer2/>
        
        

<div className="w3-content">
        <h3 className="w3-left w3-container"> Samsung galaxy M40 BLUE,6GB</h3>
        <div className="w3-container">
          <div>
            <img
              src="SRC_TEMPLATE/img/img10.jpeg"
              alt="Alps"
              className="w3-image"
              style={{ marginTop: 60 }}
            />
          </div>
        </div>
        <div className="w3-panel">
          <button className=" w3-block w3-xlarge" style={{ width: "100%" }}>
            <span className="w3-left">Color : MIDDLE RED</span>
            <input type="color" className="w3-right " />
          </button>
        </div>
        <h1 className=" w3-container w3-left"> Rs. 19,900</h1>
        <div className="w3-panel">
          <button
            className=" w3-block w3-xlarge w3-orange"
            style={{ width: "100%" }}
          >
            <span>Buy Now</span>
          </button>
        </div>
        <div className="w3-panel">
          <button
            className=" w3-block w3-xlarge w3-yellow"
            style={{ width: "100%" }}
          >
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
      </Fragment>




    )
}

}

export default ProfileView;