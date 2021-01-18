import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../app-style.js';
import { Typography} from '@material-ui/core';
import {colors, retrievePath} from '../services';
import PreloadImage from '../helpers/preloadimg'
class Homeworkout extends Component {
  constructor(props){
    super(props);
    this.state={
      videoPlaying:false
    }
  }
  render(){
    let {videoPlaying} = this.state;
    return (
      <Grid container item style={{...Styles.highZ, ...Styles.greyBG, ...Styles.padding10}} direction="column" alignItems="center" justify="space-evenly" className="top">
        <Grid item container style={{...Styles.blackBG, ...Styles.padding5, ...Styles.marginBottom}} alignItems="flex-start" justify="center" direction="column">
        <Typography variant="h1" style={{...Styles.colorPrimary, ...Styles.marginTop}}>
            Serious workout 
          </Typography>                
          <Typography variant="h2" style={{color: colors.grey}}>
            Scientifically crafted home workouts to ensure you workout each bodypart at least twice a week. Easy to follow do-it-along videos.
          </Typography>                
        </Grid>
        <Grid container item style={{...Styles.blackBG, ...Styles.relative}} alignItems="center" justify="center" direction="column">
          <Grid item>
            <video width="300" controls={videoPlaying} ref="vidRef">
              <source src={`${retrievePath()}homewo.mp4`} type="video/mp4"/>
              Your browser does not support HTML5 video.
            </video> 
            {!videoPlaying && <div onClick={()=>{this.refs.vidRef.play(); this.setState({videoPlaying: true})}} style={{...Styles.highZ, ...{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}}><PreloadImage src={`${retrievePath()}videoframe.jpg`} alt="Start your day with meditation or yoga" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1}}/></div>
            }               
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Homeworkout;
