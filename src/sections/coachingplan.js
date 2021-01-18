import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../app-style.js';
import { Typography, Button, Fade} from '@material-ui/core';
import {colors} from '../services';

class Coachingplan extends Component {
  
  render(){
    let {coachingDetails, hideDetails} = this.props;
    return (
      <Fade in={coachingDetails} timeout={200} className="top">
        <Grid container style={{...Styles.highZ, ...Styles.blackBG, ...Styles.padding5, ...{position: 'fixed', top: 0, left: 0, paddingTop:'120px', overflowY: coachingDetails?'scroll':'hidden', height: '100%'}}} alignItems="flex-start" justify="center" className="top">
          <div style={{position: 'absolute', left: '48%', top: '100px'}}>
            <Button variant="outlined" color="secondary" onClick={hideDetails} style={{padding: '10px', borderRadius: '20px', height: 'auto', width: 'auto', minWidth: 0,}}>
              <span className="material-icons" style={{fontSize: '1rem'}}>
                close
              </span>
            </Button>
          </div>
          <Grid item style={{paddingTop: '100px', paddingBottom: '100px'}}>
            <div style={{...Styles.centerTxt, ...Styles.marginBottom}}>
            <iframe width="300" src="https://www.youtube.com/embed/K30LM1zrw7k" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Client weight loss Youtube testimonial"></iframe>
            </div>
            <Typography variant="subtitle2" style={{color: colors.grey, ...{marginBottom: '15px'}}}>
              From diet to workout to motivation to course correction, your coach is there to guide you, hand-hold you and mentor you. We promise we will never give up on you. On your part, you need to trust the process and stay positive.
            </Typography>
            <Typography variant="subtitle1" style={{...Styles.colorWhite, ...{marginBottom: '15px'}}}>
              Onboarding call
            </Typography>
            <Typography variant="subtitle2" style={{color: colors.grey, ...{marginBottom: '15px'}}}>
              Once you sign-up, you get a very exhaustive form that covers things like ailments, injuries, sleep-cycle, lifestyle, preferences and much more. Once you fill this form, your coach gets on a call with you to drill down further.
            </Typography>
            <Typography variant="subtitle1" style={{...Styles.colorWhite, ...{marginBottom: '15px'}}}>
              First plan
            </Typography>
            <Typography variant="subtitle2" style={{color: colors.grey, ...{marginBottom: '15px'}}}>
              Your coach will create a custom diet and workout plan. Your diet will be shared on the web-app where you can view it anytime you wish to even after your plan is over. Your workout schedule will be shared over email and it will have links to the videos for form check.
            </Typography>
            <Typography variant="subtitle1" style={{...Styles.colorWhite, ...{marginBottom: '15px'}}}>
              Diet revisions
            </Typography>
            <Typography variant="subtitle2" style={{color: colors.grey, ...{marginBottom: '15px'}}}>
              Your diet will be revised twice a month. It will be based on a lot of factors like: your sleep cycle, energy levels, workout efficiency, progress and health parameters
            </Typography>
            <Typography variant="subtitle1" style={{...Styles.colorWhite, ...{marginBottom: '15px'}}}>
              1-to-1 support
            </Typography>
            <Typography variant="subtitle2" style={{...{color: colors.grey}, ...{marginBottom: '15px'}}}>
              Your coach will stay in touch with you over email. You have unlimited access to your coach and can ask any number of questions during your tenure. You can tell your coach if you cheated on your diet, ask him advice if you have plans to party or if you simply need some motivation
            </Typography>
            <Typography variant="subtitle1" style={{...Styles.colorWhite, ...{marginBottom: '15px'}}}>
              Progress checkin
            </Typography>
            <Typography variant="subtitle2" style={{...{color: colors.grey}, ...{marginBottom: '15px'}}}>
              You need to enter your progress on our web-app every week. This will help us gauge your progerss and it will help you see the visible differences in you over a perid of time. There is no bigger motivation in the world, trust us!
            </Typography>
            <Typography variant="subtitle1" style={{...Styles.colorWhite, ...{marginBottom: '15px'}}}>
              Got questions? Call us today: +91-8380047046
            </Typography>
          </Grid>
        </Grid> 
      </Fade>
    );
  }
}

export default Coachingplan;
