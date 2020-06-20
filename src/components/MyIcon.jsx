import React from "react";






const MyIcon = ({ icon = "star", size = 24, xClass = "",style ={} }) => {
    return (
        <i className={`material-icons md-${size} ${xClass}`} style ={{ ...style,fontSize:`${size}px` ,lineHeight:`${size}px`, verticalAlign:`Middle`}}>{icon}</i>
    )
};
export default MyIcon;