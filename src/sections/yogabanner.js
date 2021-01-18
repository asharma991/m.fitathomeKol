import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../app-style.js';
import { Fade } from '@material-ui/core';
import PreloadImage from '../helpers/preloadimg';
import {retrievePathMobile} from '../services';

class Yogabanner extends Component {
  
  render(){
    return (
      
        <Grid item container style={{...Styles.section02, ...Styles.highZ}} className='fixed'>
          <Grid item style={{height: `100%`, background: '#000', width: '100%', overflow: 'hidden', textAlign: 'center', paddingTop: '5%'}}>
            <Fade in={this.props.section02} timeout={1000}>
              <PreloadImage src={`${retrievePathMobile()}yoga.jpg`} alt="Start your day with meditation or yoga" style={{width: '90%', margin: '0 auto'}}/>
            </Fade>
          </Grid>
        </Grid>
    );
  }
}

export default Yogabanner;
