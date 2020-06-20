import React, { Component, Fragment } from "react";
import MyIcon from "appRoot/components/MyIcon";


const menus = [
    "Home", "Shop by card", "Todys Deal"
]

const items = ["Your order", "Your Wish List", "Your wish list", "Your Account"]
const lists = ["Setting", "Service", "Notification"]

class Drawer extends Component {





    render() {
        const{opened = false,onClose }=this.props
        



       ;
        return (
            <Fragment>
            
                        <div className={`w3-overlay  ${opened ? "opened" : "closed"}`} 
                        onClick={onClose}>
                             </div>

                        <div className={`my-drawer w3-card-4 ${opened ? "opened" : "closed"} w3-bar-block`}>

                            <h3 className="w3-center w3-black w3-xxlarge" style={{ marginTop: 0 }}>My Drawer</h3>
                            {

                                menus.map((menu, i) => {


                                    return (
                                        <button key={i} className="w3-bar-item w3-button  w3-xlarge  ">
                                            {menu}
                                        </button>
                                    )
                                })



                            }
                            <hr style={{ borderColor: "black" }} />

                            {
                                items.map((menu, i) => {


                                    return (
                                        <button key={i} className="w3-bar-item w3-button w3-xlarge ">
                                            {menu}
                                        </button>
                                    )
                                })
                            }                      
                                             


    
    


                    <button className="w3-bar-item w3-button w3-hover-black w3-xlarge" onClick={this.props.openDrawer2}>Features <MyIcon icon="keyboard_arrow_right" xClass="w3-right w3-button" /> </button>

                            <hr style={{ borderColor: "black" }} />
                            {
                                lists.map((menu, i) => {


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


export default Drawer;