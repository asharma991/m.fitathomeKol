import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../app-style.js';
import { Typography, Fade} from '@material-ui/core';
import {colors} from '../services';
import PreloadImage from '../helpers/preloadimg';
import {retrievePathMobile} from '../services';

class Homeworkoutbanner extends Component {
  render(){
    return (
      <Fade in={this.props.section03} timeout={1000}>
        <Grid item container style={{...Styles.fullHt, ...Styles.highZ}} alignItems="center" justify="center" className="fixed">
        <PreloadImage src={`${retrievePathMobile()}homewo.jpg`} style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1}}/>
          <Grid item xs={7} style={{textAlign: 'center', color: colors.secondary}}>
            <Typography variant="h1">
              Home workouts that are more than just fancy cardio
            </Typography>
          </Grid>
        </Grid>
      </Fade>
    );
  }
}

export default Homeworkoutbanner;
