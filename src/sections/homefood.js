import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../app-style.js';
import { Typography} from '@material-ui/core';
import {colors, retrievePath} from '../services';
import PreloadImage from '../helpers/preloadimg'
class Homefood extends Component {
  render(){
    return (
      <Grid item container style={{...Styles.highZ, ...Styles.fullHt, ...Styles.padding5, ...Styles.greyBG}} justify="space-between" alignItems="center" direction="column" className="top">
        <Grid item style={{...Styles.padding5, ...Styles.blackBG}}>
          <Typography variant="h2" style={{color: colors.grey}}>
            Home cooked food is great but cravings always kick-in specially when access to outside food is limited. Worry not, we will keep supplying you with simple recipes to jazz up your home cooked food.
          </Typography>
        </Grid>
        <Grid item style={{...Styles.padding5, ...Styles.blackBG}}>
          <PreloadImage src={`${retrievePath()}recipe.jpg`} alt="Simple, macro-calculated recipes" style={Styles.imgWidth}/>
        </Grid>
      </Grid>
    );
  }
}

export default Homefood;
