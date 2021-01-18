import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { docHt, get, callAPI, getURL, updateLoc, retrievePath } from './services';
import { Typography, Button, Fade } from '@material-ui/core';
import Styles from './app-style';
import PreloadImage from './helpers/preloadimg';
import GetDiscount from './sections/getdiscount';
class Package extends Component{
    constructor(props){
        super(props);
        if(!get('products'))
        {
            updateLoc();
        }
        let products = JSON.parse(get('products'));
        this.state={
            currency: products.currency,
            amount: products.amount,
            offerAmount: products.offer,
            userData:true,
            bored: true,
            discountDetails: false,
            discountActivated:false,
            activatingDiscount:false
        }
    }
    createOrder(key, indx){
        let userDetails = JSON.parse(get('userDetails'));
        console.log("key",key);
        let package_id = this.state.discountActivated?parseInt(key)+9:key;
        this.setState({bored: false});
        if(!userDetails)
            this.setState({userData: false});
        else{
            callAPI(getURL('create_order'),'post',(data)=>{this.orderCreated(data)},(err)=>{this.errorOrderCreated(err)}, {"orderNote":`Corona Package ${indx+1} people`,"package_id":package_id,"customer_name":userDetails.name,"customer_email":userDetails.email, "customer_phone":`${userDetails.country}-${userDetails.mobile}`, "redirect_url":"http://fitathome.getsetgo.fitness/thank_you"})
        }
    }
    orderCreated(data){
        window.location.replace(data.data.paymentLink);
    }
    errorOrderCreated(err){
        this.setState({bored: true})
        console.log(err);
    }
    hideDetails=()=>{
        this.setState({
            discountDetails: false
        });
        this.props.freezeScroll(false);
    }
    showDiscount=()=>{
        this.setState({
            discountDetails: true
        });
        this.props.freezeScroll(true);
    }
    activateDiscount=()=>{
        this.setState({
            activatingDiscount: true
        })
        setTimeout(() => {
            this.setState({
                discountActivated: true,
                activatingDiscount: false
            });    
        }, 10000);        
        this.hideDetails();
    }
    render(){
        let {amount, currency, userData, bored, offerAmount, discountDetails, discountActivated, activatingDiscount} = this.state;
        let desc = [
            "Stranded alone at home? Well, no more. Join thousands of others and turn it into a great at-home-staycation for you!",
            "Running out of ideas about things to do together? Tired of binge-watching series and movies? How about getting fit together?",
            "They say the more the merrier. We can tell you it's true! Join with your complete family. It doesn't get better than this."
        ];
        let imgs = [
            `${retrievePath()}boredMan.jpg`,
            `${retrievePath()}boredCouple.jpg`,
            `${retrievePath()}boredFamily.jpg`
        ];
        let imgsHappy=[
            `${retrievePath()}happyMan.jpg`,
            `${retrievePath()}happyCouple.jpg`,
            `${retrievePath()}happyFamily.jpg`,
        ];
        return (
            <Grid  container style={{minHeight: `${docHt()-100}px`, paddingTop: '70px'}} direction="column" alignItems="center" justify="space-evenly">
                {
                    !userData && 
                    <Grid item style={{padding: '0 50px', textAlign: 'center'}}>
                        <Typography variant="h2" style={Styles.colorWhite}>Uh oh, we don't have your user details. Please go back to home and fill your details</Typography>
                        <Button variant="contained" color="primary" onClick={()=>{this.gotoHome()}}>
                            <Typography variant="subtitle1" style={Styles.colorWhite}>Click here to go to home</Typography>
                        </Button>
                    </Grid>
                }
                {userData && 
                    <React.Fragment>
                        <Grid item>
                            <Typography variant="h2" style={{...Styles.padding5, ...Styles.colorWhite, ...Styles.marginTop}}>Get started today! Your health is worth it</Typography>                            
                        </Grid>
                        <Grid item container alignItems="center" justify="space-evenly" style={{...Styles.marginTop, ...Styles.greyBG, ...Styles.padding5}} direction="column">
                            {
                                Object.keys(this.state.amount).map((key, indx)=>{
                                    return(
                                        <Grid item style={{...Styles.marginBottom, ...Styles.blackBG, ...Styles.padding5}} key={key+indx}>               
                                        {bored && <Fade in={bored}>
                                                <PreloadImage src={imgs[indx]} alt="Simple, macro-calculated recipes" style={{width: '100%', minHeight: '100px'}}/>
                                            </Fade>}         
                                            {!bored && <Fade in={!bored}>
                                                <PreloadImage src={imgsHappy[indx]} alt="Simple, macro-calculated recipes" style={{width: '100%', minHeight: '100px'}}/>
                                            </Fade>}
                                            <Typography variant="subtitle1" style={{...Styles.colorWhite, ...Styles.marginTop}}>{indx+1} {indx>0?'People':'Person'}</Typography>
                                            <Typography style={{...Styles.colorGrey, ...Styles.marginTop}}>{currency} {discountActivated?offerAmount[key]*(indx+1):amount[key]*(indx+1)} per month</Typography>
                                            {!(activatingDiscount || discountActivated) && <Typography style={{...Styles.colorPrimary, ...{cursor: 'pointer'}}} onClick={this.showDiscount}>Tap here for discounted price: {currency} {offerAmount[key]*(indx+1)} per month</Typography>}
                                            {activatingDiscount && !discountActivated && <Typography style={{...Styles.colorPrimary, ...{cursor: 'pointer'}}} >Validating your post. Please wait ...</Typography>}
                                            {!activatingDiscount && discountActivated && <Typography style={{...Styles.colorPrimary, ...{cursor: 'pointer'}}} >Discount activated!</Typography>}
                                            <Typography style={{...Styles.colorGrey}}>(Effective cost: {currency} {offerAmount[key]} per person)</Typography>
                                            <Typography variant="subtitle2" style={{...Styles.colorWhite, ...Styles.marginTop, ...{minHeight: '120px'}}}>{desc[indx]}</Typography>
                                            <div>
                                                <Button variant="contained" color="primary" onClick={()=>this.createOrder(key)} disabled={!bored}>
                                                    <Typography variant="subtitle1" style={Styles.colorWhite}>{!bored?'Please wait ...':'Buy now'}</Typography>
                                                </Button>
                                            </div>
                                        </Grid>
                                    )
                                })
                            }
                            
                            {/* <Grid item xs={4} style={{...Styles.centerTxt, ...{borderRight: '1px solid #fff', padding: '0 50px'}}}>
                                <PreloadImage src={boredCouple} alt="Simple, macro-calculated recipes" style={{width: '100%'}}/>
                                <Typography variant="subtitle1" style={{...Styles.colorWhite, ...Styles.marginTop}}>2 People</Typography>
                                <Typography style={{...Styles.colorGrey, ...Styles.marginTop}}>₹ 3000 per person per month</Typography>
                                <Typography variant="subtitle2" style={{...Styles.colorWhite, ...Styles.marginTop, ...{minHeight: '120px'}}}></Typography>
                                <div>
                                    <Button variant="contained" color="primary">
                                        <Typography variant="subtitle1" style={Styles.colorWhite}>Buy now</Typography>
                                    </Button>
                                </div>
                            </Grid>
                            <Grid item xs={4} style={{...Styles.centerTxt, ...{padding: '0 50px'}}}>
                                <PreloadImage src={boredFamily} alt="Simple, macro-calculated recipes" style={{width: '100%'}}/>
                                <Typography variant="subtitle1" style={{...Styles.colorWhite, ...Styles.marginTop}}>4 People</Typography>
                                <Typography style={{...Styles.colorGrey, ...Styles.marginTop}}>₹ 2500 per person per month</Typography>
                                <Typography variant="subtitle2" style={{...Styles.colorWhite, ...Styles.marginTop, ...{minHeight: '120px'}}}></Typography>
                                <div>
                                    <Button variant="contained" color="primary">
                                        <Typography variant="subtitle1" style={Styles.colorWhite}>Buy now</Typography>
                                    </Button>
                                </div>
                            </Grid> */}
                        </Grid>
                        <GetDiscount discountDetails={discountDetails} hideDetails={this.hideDetails} activateDiscount = {this.activateDiscount}/>
                    </React.Fragment>
                }
            </Grid>
        )
    }
}
export default Package