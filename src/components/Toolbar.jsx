import React, { Component, Fragment } from "react";
import MyIcon from "appRoot/components/MyIcon"
import Drawer from "appRoot/components/Drawer";
import Drawer2 from "appRoot/components/Drawer2";




const leftIcons = [
    {
        icon: "menu"
    }
];
const rightIcons = [
    {
        icon: "add_shopping_cart"
    }
];






class Toolbar extends Component {

    state = {
        drawerOpened: false,
        drawerOpened2: false,

    }
    openDrawer = (type) => (icon) => {
        console.log("abc")
        if (type === "d1") {
            this.setState({ drawerOpened: true });
            this.setState({ drawerOpened2: false })
        } else if (type === "d2") {
            this.setState({ drawerOpened2: true });
            this.setState({ drawerOpened: false });


        }
    }

   
    closeDrawer = () => {
        this.setState({ drawerOpened2: false })
        this.setState({ drawerOpened: false })
    }




    render() {
        const { title = "shopping" } = this.props;
        const { drawerOpened } = this.state;
        const { drawerOpened2 } = this.state;


        return (

            <Fragment>



                <Drawer opened={drawerOpened} onClose={this.closeDrawer} openDrawer2={this.openDrawer("d2")} />
                <Drawer2 opened={drawerOpened2} onClose={this.closeDrawer} openDrawer1={this.openDrawer("d1")}
                />

                <div className="w3-bar w3-black w3-large" style={{ position: "fixed", zIndex: 900, top: 0 }} >
                    {
                        leftIcons.map((icon, index) => {
                            return (
                                <button key={index} className="w3-bar-item w3-transparent w3-text-white "
                                    onClick={this.openDrawer("d1")}>
                                    <MyIcon icon={icon.icon} />
                                </button>
                            )
                        })
                    }

                    <span className="w3-bar-item">{title}</span>



                    <div className="w3-right  ">

                        {
                            rightIcons.map((icon, index) => {
                                return (
                                    <button key={index} className="w3-bar-item w3-transparent w3-text-white"
                                        onClick={() => {
                                            this.props.onKlick && this.props.onKlick(icon)
                                        }}>
                                        <MyIcon icon={icon.icon} />
                                    </button>
                                )
                            })
                        }

                    </div>

                </div>


            </Fragment>

        )
    }
}
export default Toolbar;