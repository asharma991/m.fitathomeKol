import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../app-style.js';
import {Typography} from '@material-ui/core';
import {colors} from '../services'
import {
  Link
} from "react-router-dom";
import PreloadImage from '../helpers/preloadimg';
import Logo from "../logoElement.png";

class Header extends Component {
  render(){
    return (
      <Grid item container style={{...Styles.header}} justify="space-between">
        <Grid item >
          <Link to="/">
            <Typography variant="subtitle1" style={Styles.colorWhite}>My Health</Typography>
          </Link>
        </Grid>        
        {/* <Grid item >
          <Typography variant="subtitle1" style={Styles.colorWhite}>
            <span style={{...Styles.paddingRight5}}>By</span>
            <a href="https://getsetgo.fitness" rel="noopener noreferrer" target="_blank"><span style={{color: colors.primary}}>GetSetGo Fitness</span></a>
          </Typography>        
          
        </Grid> */}
        <Grid item>
            <a href="https://getsetgo.fitness" rel="noopener noreferrer" target="_blank">
              <PreloadImage src={Logo} alt='GetSetGo Fitness Diwali offer' style={{ width: "100px", marginRight:'10px' }}/>
              </a>
          </Grid>
      </Grid>
    );
  }
}

export default Header;
