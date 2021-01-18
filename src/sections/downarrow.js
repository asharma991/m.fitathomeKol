import React from 'react';
import Styles from '../app-style';
import {colors} from '../services'
export default function(){
    return (
        <React.Fragment>
            <div style={{...Styles.highZ, ...{position: 'absolute', bottom: '60px'}}}>
                <span style={{color: colors.secondary, lineHeight: 0}}>Scroll down</span>
            </div> 
            <div style={{...Styles.highZ, ...{position: 'absolute', bottom: '10px'}}}>
                <span className="material-icons" style={{fontSize: '4rem', color: colors.secondary, lineHeight: 0}}>
                    keyboard_arrow_down
                </span>
            </div> 
        </React.Fragment>
    )
}
    