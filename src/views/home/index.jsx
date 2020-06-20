import React, { Component, Fragment } from "react";
import Toolbar from "appRoot/components/Toolbar";
import Toolbar2 from "appRoot/components/toolbar2";
import Galary from "appRoot/components/galary";
import Myadd from "appRoot/components/Myadd";
import Mylink from "appRoot/components/Mylink";
import Drawer from "appRoot/components/Drawer";
import Mycard from "appRoot/components/Mycard";
import Drawer2 from "appRoot/components/Drawer2";
import Offer from "appRoot/components/offer";
import { Link } from "react-router-dom";
// views










class HomeView extends Component {


   

    render() {

       

        return (

            <Fragment>



                <Toolbar />
                <Toolbar2 />
                <Galary />
                <div className="w3-container w3-dark-grey" style={{ height: 4 }} />

                <Myadd />
                <div className="w3-container w3-dark-grey" style={{ height: 4 }} />
                <Mylink />
                <div className="w3-container w3-dark-grey" style={{ height: 4 }} />
                <Mycard />
               
                <Offer />   
               
            </Fragment>





        )
    }

}

export default HomeView;