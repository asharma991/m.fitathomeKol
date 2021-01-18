import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../app-style.js';
import { Typography} from '@material-ui/core';
import {colors} from '../services';

class Publicreviews extends Component {
  render(){
    return (
      <Grid item container style={{...Styles.highZ, ...Styles.spacingVertical, ...Styles.blackBG, ...Styles.padding5}} direction="column" alignItems="center" justify="center" className="top">
              <Grid item style={{...Styles.padding5, ...Styles.marginBottom}}>
                <Typography variant="h1" style={{...Styles.colorPrimary, ...Styles.centerTxt}}>
                  Like they say - client is the king
                </Typography>
                <Typography variant="h2" style={{color: colors.grey, ...Styles.centerTxt}}>
                  This is what kings and queens are saying about us
                </Typography>
              </Grid>
              <Grid item container alignItems="center" justify="center" style={{...Styles.padding5, ...Styles.marginBottom}}>
                <Grid item xs={6} style={{...{borderRight: '1px solid #fff'}, ...Styles.centerTxt}}>
                  <Typography variant="h1" style={{...Styles.colorWhite, ...Styles.centerTxt}}>
                    4.8/5
                  </Typography>
                  <Typography variant="subtitle2" style={{...Styles.colorGrey, ...Styles.centerTxt}}>
                    Rating on Facebook
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h1" style={{...Styles.colorWhite, ...Styles.centerTxt}}>
                    4.8/5
                  </Typography>
                  <Typography variant="subtitle2" style={{...Styles.colorWhite, ...Styles.centerTxt}}>
                    Rating on Google
                  </Typography>
                </Grid>
              </Grid>
              <Grid item style={Styles.centerTxt}>
                <div className="speech-bubble">
                  <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcharan.panjwani.3%2Fposts%2F229774871476080&width=500" width="300" height="350" style={{border:"none",overflow:"hidden"}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="Client weight loss Facebook testimonial"></iframe>
                </div>
                <div className="speech-bubble">
                  <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdeepsee.gupta%2Fposts%2F2343576852336900&width=500" width="300" height="250" style={{border:"none",overflow:"hidden"}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="Client weight loss Facebook testimonial"></iframe>
                </div>
                <div className="speech-bubble">
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fharshrmb%2Fposts%2F1937028956346033&width=500" width="300" height="220" style={{border:"none",overflow:"hidden"}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="Client weight loss Facebook testimonial"></iframe>
                </div>
                <div className="speech-bubble">
                  <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Farchi.anu%2Fposts%2F1828319153947684&width=500" width="300" height="420" style={{border:"none",overflow:"hidden"}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="Client weight loss Facebook testimonial"></iframe>
                </div>
              </Grid>
            </Grid>
    );
  }
}

export default Publicreviews;
