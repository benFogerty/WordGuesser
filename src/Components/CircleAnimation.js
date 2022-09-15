import React from 'react';
import './CircleAnimation.css';


const ChangedCircleanimate = (props) => {
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
        color: 'white'
      };

    return (
    <div style={circleStyle}  id={'circle'}>
    {props.letter}</div>
    )

}


export default ChangedCircleanimate