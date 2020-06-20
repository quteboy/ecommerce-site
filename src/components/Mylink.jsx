import React, { Component, Fragment } from "react";
import MyIcon from "appRoot/components/MyIcon";



class Mylink extends Component {
    render() {
        return (
            <div className="w3-bar w3-white ">

              <button className="w3-bar-item w3-button" style={{width:"20%"}}>
                  
                   <MyIcon icon="send"  xClass="w3-khaki" style={{borderRadius:"50%",padding:9}}/>
                   <p style={{marginTop:0}}> Mony</p>
                   
                   </button>
              <button className="w3-bar-item w3-button w3-cricle" style={{width:"20%"}}> 
               <MyIcon icon="view_comfy" xClass="w3-khaki" style={{borderRadius:"50%",padding:9}} />
               <p style={{marginTop:0}}>Scan</p>
               </button>
               <button className="w3-bar-item w3-button w3-cricle"style={{width:"20%"}}> 
               <MyIcon icon="stay_current_portrait"xClass="w3-khaki" style={{borderRadius:"50%",padding:9}}/>
               <p style={{marginTop:0}}>payBil</p>
               </button>
               <button className="w3-bar-item w3-button w3-cricle"style={{width:"20%"}}>
                    <MyIcon icon="monetization_on"xClass="w3-khaki" style={{borderRadius:"50%",padding:9}}/>
                    <p style={{marginTop:0}}>Offers</p>
                    </button>
               <button className="w3-bar-item w3-button w3-cricle"style={{width:"20%"}}>
                    <MyIcon icon="more_vert" xClass="w3-khaki" style={{borderRadius:"50%",padding:9}} />
                    <p style={{marginTop:0}}>more</p>
               </button>
               
               
            </div>



        )
    }
}
export default Mylink;