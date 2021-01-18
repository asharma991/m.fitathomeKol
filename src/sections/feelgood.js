import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../app-style.js';
import { Typography} from '@material-ui/core';
import {colors} from '../services';

class Feelgood extends Component {
  render(){
    return (
      <Grid item container style={{...Styles.section01, ...Styles.highZ, ...Styles.greyBG, ...Styles.padding5, ...Styles.fullHt}} className="top">
        <Grid item container style={{...Styles.blackBG, ...Styles.padding5}} alignItems="center" justify="center" direction='column'>
          <Grid item>
            <Typography variant="h1" style={Styles.marginBottom}>
              Have a delightful time.
            </Typography>
          </Grid>
          <Grid item container direction="column">
            <Grid item>
                <Typography variant="h2" style={{...{color: colors.grey, textAlign: 'left'}, ...Styles.padding5}}>
                  Wake up to a soulful <span style={Styles.colorPrimary}>live yoga/meditation session</span>. Have a well-balanced breakfast.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h2" style={{...{color: colors.grey, textAlign: 'left'}, ...Styles.padding5}}>
                  Optimize your immunity with a <span style={Styles.colorPrimary}>personalized nutrition plan</span>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h2" style={{...{color: colors.grey, textAlign: 'left'}, ...Styles.padding5}}>
                  <span style={Styles.colorPrimary}>Workout at home</span> with do-it-along videos
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h2" style={{...{color: colors.grey, textAlign: 'left'}, ...Styles.padding5}}>
                  Come back for a fun, <span style={Styles.colorPrimary}>live evening session</span>
                </Typography>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Feelgood;
