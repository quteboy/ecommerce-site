import React, { Component, Fragment } from "react";
import MyIcon from "./MyIcon";

const menus = [
    "Coupons", "Launchpad", "pantry", "renewed", "finder", "unlimited", "save &subscribe "
]



class Myhome extends Component {

    
    render() {
        const{openDrawer1,onClose }=this.props
        const { opened = false, list = [] } = this.props;
        
        return (
            <Fragment>
                
                <div className={` w3-overlay ${opened ? "opened" : "closed"}`}
                 onClick={onClose} > </div>
                
                <div className={`my-drawer w3-card-4 ${opened ? "opened" : "closed"} w3-bar-block`}>
                    

                    <button className={`w3-center w3-xlarge w3-transparent`} style={{ marginTop: 0,width:"100%" }} onClick={()=>{
                       openDrawer1()
                    }}> 
                        <MyIcon icon="keyboard_arrow_left" xClass="w3-left" style={{marginTop:5}}/> MAIN MENU
                            </button>
                    {

                        menus.map((menu, i) => {


                            return (
                                <button key={i} className="w3-bar-item w3-button w3-hover-black w3-xlarge  ">
                                    {menu}
                                </button>
                            )
                        })



                    }





                </div>


            </Fragment>

        )
    }
}


export default Myhome;