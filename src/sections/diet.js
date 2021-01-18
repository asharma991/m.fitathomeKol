import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../app-style.js';
import { Typography, Button, Icon} from '@material-ui/core';
import {colors, retrievePath} from '../services';
import PreloadImage from '../helpers/preloadimg'
class Diet extends Component {
  render(){
    return (
      <Grid item container style={{...Styles.highZ, ...Styles.fullHt, ...Styles.greyBG, ...Styles.greyBG, ...Styles.padding5}} justify="space-between" alignItems="center" direction="column" className="top">
        <Grid item style={{...Styles.padding5, ...Styles.blackBG}}>
          <Typography variant="h1" style={{...Styles.colorPrimary}}>
            Personalized diet
          </Typography>
          <Typography variant="h2" style={{color: colors.grey}}>
            Personalized diet created by your personal 1-to-1 coach revised twice a month. Balanced nutrition to improve your fitness and health. Vitamin and mineral plan to optimize your immunity.
          </Typography>
          <Button variant="outlined" color="secondary" startIcon={<Icon>add_box</Icon>} style={{marginTop: '20px'}} onClick={this.props.showDetails}>
            <Typography variant="subtitle2">
              How does it work?
            </Typography>
          </Button>
        </Grid> 
        <Grid item style={{...Styles.padding5, ...Styles.blackBG}}>
          <PreloadImage src={`${retrievePath()}diet.jpg`} alt="Personalized diet created by 1-to-1 coach" style={Styles.imgWidth}/>
        </Grid>             
      </Grid>
    );
  }
}

export default Diet;
