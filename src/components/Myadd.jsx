import React, { Component, Fragment } from "react";





class Myadd extends Component {
    state = {
        selectedIndex: 0
    }
    componentDidMount() {
        setInterval(() => {
            if (
                this.state.selectedIndex >= 3
            ) {
                this.setState({ selectedIndex: 0 })
            } else {
                this.setState({ selectedIndex: this.state.selectedIndex + 1 })
            }

        

        }, 70000)
    }



    render() {
        const { selectedIndex } = this.state;

        return (
            
                <div className="w3-card-4">
                    <img src="/img/img3.png" style={{ width: "100%", display: (selectedIndex === 0) ? `block` : "none" }} />
                    <img className="w3-image" src="/img/img4.jpg" style={{ width: "100%", display: (selectedIndex === 1) ? `block` : "none" }} />
                    <img className="w3-image" src="/img/img5.jpg" style={{ width: "100%", display: (selectedIndex === 2) ? `block` : "none" }} />
                    <img className="w3-image" src="/img/img6.jpeg" style={{ width: "100%", display: (selectedIndex === 3) ? `block` : "none" }} />
                </div>


            


        )
    }

}
export default Myadd;