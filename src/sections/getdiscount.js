import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../app-style.js';
import { Typography, Button, Fade} from '@material-ui/core';
import {colors, docHt} from '../services';
import { FacebookProvider, Share } from 'react-facebook';
import Iframe from './iframe';

class GetDiscount extends Component {
  
  render(){
    let {discountDetails, hideDetails, activateDiscount} = this.props;
    return (
      <Fade in={discountDetails} timeout={200}>
        <Grid container style={{...Styles.highZ, ...Styles.popup, ...{overflowY: discountDetails?'scroll':'hidden'}}} alignItems="center" justify="flex-start" direction="column">
          <div style={{position: 'absolute', left: '48%', top: '100px'}}>
            <Button variant="outlined" color="secondary" onClick={hideDetails} style={{padding: '10px', borderRadius: '20px', height: 'auto', width: 'auto', minWidth: 0,}}>
              <span className="material-icons" style={{fontSize: '1rem'}}>
                close
              </span>
            </Button>
          </div>
          <Grid item style={{...Styles.marginBottom, ...Styles.padding5, ...Styles.marginTop}}>
            <Typography variant="subtitle1" style={{...Styles.colorWhite}}>
                What's the best gift you can give your friends and family?
            </Typography>
              <Typography variant="subtitle1" style={{...Styles.colorWhite}}>
                   It is to help them stay fit, active and engaged during this lockdown
              </Typography>
              <Typography variant="subtitle1" style={{...Styles.colorWhite, ...Styles.marginBottom}}>
                   And we understand that all good deeds deserve a reward! <span style={{...Styles.colorPrimary}}>Simply share the post</span> below on your facebook wall and we will <span style={{...Styles.colorPrimary}}>offer you a discount</span> as a gesture of appreciation.
              </Typography>
              <div style={{...Styles.marginBottom}}>
                <Iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgetsetgofit%2Fposts%2F1123620191321750&show_text=true&width=552&appId=699961707425056" title="Fit at home. Corona special" mode="facebook"/>
              </div>
              <div onClick={activateDiscount}>
                    <FacebookProvider appId="276766459459069">
                        <Share href="https://www.facebook.com/getsetgofit/posts/1123620191321750" hashtag="#FitAtHome">
                            {({ handleClick, loading }) => (
                                <Button type="button" variant="contained" color="primary" disabled={loading} onClick={handleClick}>
                                    <Typography variant="subtitle1">Share now to avail discount</Typography>
                                </Button>
                            )}
                        </Share>
                    </FacebookProvider>
                </div>
          </Grid>
        </Grid> 
      </Fade>
    );
  }
}

export default GetDiscount;
