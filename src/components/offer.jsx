import React, { Component, Fragment } from "react";
import MyIcon from "./MyIcon";





class Myoffer extends Component {
    state = {
        selectedIndex: 0,
        selectedValue: 0
    }
    componentDidMount() {
        setInterval(() => {
            if (
                this.state.selectedIndex >= 2
            ) {
                this.setState({ selectedIndex: 0 })
            } else {
                this.setState({ selectedIndex: this.state.selectedIndex + 1 })
            }



        }, 3000)



        setInterval(() => {
            if (
                this.state.selectedValue >= 2
            ) {
                this.setState({ selectedValue: 0 })
            } else {
                this.setState({ selectedValue: this.state.selectedValue + 1 })
            }



        }, 3000)
    }


    render() {
        const { selectedIndex } = this.state;
        const { selectedValue } = this.state;


        return (
            <Fragment>

                <div className="w3-white " style={{ height: 50, fontSize: 30 }} >Deal Of The Day</div>

                <div className=" w3-white" >
                    <img className=" w3-image " src="./img/img15.jpg"
                        style={{ width: "100%", display: (selectedIndex === 0) ? `block` : "none" }} />
                    <img className="w3-image " src="./img/img11.jpeg"
                        style={{ width: "100%", display: (selectedIndex === 1) ? `block` : "none" }} />
                    <img className="w3-image" src="./img/img12.jpg"
                        style={{ width: "100%", display: (selectedIndex === 2) ? `block` : "none" }} />
                </div>
                <div className=" w3-white" >
                    <div className=" w3-image " src="./img/img0.jpg"
                        style={{ fontSize: 20, width: "100%", display: (selectedValue === 0) ? `block` : "none" }}  >
                        jbl headphone 50% off<p style={{ marginTop: 0 }}>Rs.4999 </p></div>
                    <div className="w3-image " src="./img/img1.jpeg"
                        style={{ fontSize: 20, width: "100%", display: (selectedValue === 1) ? `block` : "none" }} >
                        shoos 50% off<p style={{ marginTop: 0 }}>Rs.999 </p></div>
                    <div className="w3-image" src="./img/img2.jpeg"
                        style={{ fontSize: 20, width: "100%", display: (selectedValue === 2) ? `block` : "none" }} >
                        watch 45% off<p style={{ marginTop: 0 }}>Rs.1000 </p></div>

                        <button className={` w3-large w3-transparent`} 
                        style={{ width:"100%",color:"blue",textAlign:"left",border:"none" }}>
                            <MyIcon icon="keyboard_arrow_right" xClass="w3-right" style={{marginTop:5}}/>
                            shop deal</button>
                </div>
                


            </Fragment>

        )
    }





}
export default Myoffer;