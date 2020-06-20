import React, { Component, Fragment } from "react";





class Galary extends Component {
    state = {
        selectedIndex: 0
    }
    componentDidMount() {
        this.setState({ selectedIndex: 0 })
        setInterval(() => {
            if (
                this.state.selectedIndex >= 2
            ) {
                this.setState({ selectedIndex: 0 })
            } else {
                this.setState({ selectedIndex: this.state.selectedIndex + 1 })
            }



        }, 3000)
    }



    render() {
        const { selectedIndex = 0 } = this.state;

        return (



            <div className="w3-card-4" >
                <img className=" w3-image " src="./img/img0.jpg" style={{ width: "100%", display: (selectedIndex === 0) ? `block` : "none" }} />
                <img className="w3-image " src="./img/img1.jpeg" style={{ width: "100%", display: (selectedIndex === 1) ? `block` : "none" }} />
                <img className="w3-image" src="./img/img2.jpeg" style={{ width: "100%", display: (selectedIndex === 2) ? `block` : "none" }} />
            </div>





        )
    }

}
export default Galary;