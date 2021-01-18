import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../app-style.js';
import { Typography} from '@material-ui/core';

class Yoga extends Component {
  render(){
    return (
      <Grid container item style={{...Styles.fullHt, ...Styles.highZ, ...Styles.greyBG, ...Styles.padding5}} direction="column" alignItems="center" justify="space-evenly" className="top">
        <Grid item container style={{...Styles.blackBG, ...Styles.padding10, ...Styles.blackBG}} alignItems="flex-start" justify="center" direction="column">
        <Typography variant="h1" style={Styles.colorPrimary}>
            Live at 8:30 am. 
          </Typography>                
          <Typography variant="h2" style={Styles.colorGrey}>
            Live 20 minutes yoga or meditation to make sure your day starts with positivity 
          </Typography>                
        </Grid>
      </Grid>
    );
  }
}

export default Yoga;
