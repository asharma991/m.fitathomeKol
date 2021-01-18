import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../app-style.js';
import { Typography} from '@material-ui/core';
import {colors} from '../services';
import Signupform from '../signupform';
class GetStarted extends Component {
  render(){
    return (
      <Grid item container direction="column" style={{...Styles.padding5, ...Styles.greyBG, ...Styles.highZ}} alignItems="center" justify="center" className="top">
        <Grid item>
          <Typography variant="h2" style={{...Styles.colorWhite, ...{textAlign: 'center'}}}>Join the community of like minded people</Typography>
          <Typography variant="subtitle1" style={{color: colors.grey, textAlign: 'center'}}>... and unlock a secret, no-equipment home-workout absolutely free of cost</Typography>
          <hr/>
        </Grid>
        <Grid item style={{...Styles.padding5}}>
          <Signupform/>
        </Grid>
      </Grid>
    );
  }
}

export default GetStarted;
