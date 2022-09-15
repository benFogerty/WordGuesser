import React from 'react';



const InitialCircle = (props) => {
    var circleStyle = {
        padding:10,
        margin:20,
        display:"inline-block",
        // position:'absolute',
        backgroundColor: props.bgColor,
        borderRadius: "50%",
        width:150,
        height:150,
        left:0,
        top:0,
        color: props.invisibleColor,
        opacity: 0.6,
        fontSize: 100,

      };

    return (
    <div style={circleStyle} >
    {props.letter}</div>
    )

}


export default InitialCircle
  
