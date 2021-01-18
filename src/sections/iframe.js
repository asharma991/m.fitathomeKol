import React from 'react';
export default function(props){
    if(!props.mode)
        return (
            <iframe width={props.wd} height={props.ht} src={props.src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={props.title}></iframe>
        )
    return (
        <iframe width={props.wd||null} height={props.ht||null} src={props.src} style={{border:"none",overflow:"hidden"}} scrolling="no" frameBorder="0" allowTransparency="true" allowFullScreen="true" title={props.title}></iframe>
    )
}