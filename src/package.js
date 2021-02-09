import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { docHt, get, callAPI, getURL, updateLoc, retrievePath } from './services';
import { Typography, Button, Fade } from '@material-ui/core';
import Styles from './app-style';
import PreloadImage from './helpers/preloadimg';
import GetDiscount from './sections/getdiscount';
let baseurl="https://getsetgo.fitness";

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
            activatingDiscount:false,
            products : null,
        }
    }
    createOrder(product, index){
        let userDetails = JSON.parse(get('userDetails'));
        console.log("index",index);
        let package_id = product.service_id
        let campaign_id = get('campaign_id')===null?1:get('campaign_id');
        let affiliate_id= get("affiliate_id")===null?1:get('affiliate_id');
        this.setState({bored: false});
        if(!userDetails)
            this.setState({userData: false});
        else{//campagin create order call
            //callAPI(getURL('create_order'),'post',(data)=>{this.orderCreated(data)},(err)=>{this.errorOrderCreated(err)}, {"orderNote":`KOL ${index+1} people`,"package_id":package_id,"customer_name":userDetails.name,"customer_email":userDetails.email, "customer_phone":`${userDetails.country}-${userDetails.mobile}`, "redirect_url":"http://localhost:3000"+"/thank_you"})
            callAPI(getURL('campaign_create_order'),'post',(data)=>{this.orderCreated(data)},(err)=>{this.errorOrderCreated(err)}, {"orderNote":`KOL ${index+1} people`,"package_id":package_id,"customer_name":userDetails.name,"customer_email":userDetails.email, "customer_phone":`${userDetails.country}-${userDetails.mobile}`,"affiliate_id":affiliate_id, "redirect_url":baseurl+"/thank_you","campaign_id":campaign_id});
            console.log(affiliate_id);
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
    getproducts=()=>{
        let currency = this.state.currency;
        let campaign_id = get('campaign_id')===null?1:get('campaign_id');
         let currencytext = (currency==="₹" ? "INR":currency)||(currency==="$" ? "USD":currency)||(currency==="aed" ? "AED":currency);
        callAPI("https://api.getsetgo.fitness/base_ind/API/v1/fetch_services","post",
      data => {
          var services=data.data.services;
          //console.log(services);
          //setServices(services);
          baseurl=data.data.redirect_base_url;
          this.setState({products:services})
          
      },
      err => {
        console.log(err);
      },
    {
      "campaign_id": campaign_id,
       "currency"  : currencytext,
      }
    )
    };
    componentDidMount(){
        this.getproducts();
    }
    render(){
        let {amount,products, currency, userData, bored, offerAmount, discountDetails, discountActivated, activatingDiscount} = this.state;
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
                        {!products && <Grid item style={{...Styles.colorWhite, ...Styles.centerTxt, ...Styles.marginBottom}}>Loading services. Please wait ...</Grid>} 
                        {products&&
                        <Grid item container alignItems="center" justify="space-evenly" style={{...Styles.marginTop, ...Styles.greyBG, ...Styles.padding5}} direction="column">
                            {
                                //Object.keys(this.state.amount).map((key, indx)=>{
                                    products && products.map( (product,index) =>
                                {
                                    return(
                                        <Grid item style={{...Styles.marginBottom, ...Styles.blackBG, ...Styles.padding5}} key={index}>               
                                        {bored && 
                                        <Fade in={bored}>
                                                <PreloadImage src={imgs[index]} alt="Simple, macro-calculated recipes" style={{width: '100%', minHeight: '100px'}}/>
                                            </Fade>
                                            }         
                                            {!bored && <Fade in={!bored}>
                                                <PreloadImage src={imgsHappy[index]} alt="Simple, macro-calculated recipes" style={{width: '100%', minHeight: '100px'}}/>
                                            </Fade>}
                                            <Typography style={{...Styles.colorGrey, ...Styles.marginTop}}>(Cost: {currency} {product.pack_price} per person)</Typography>
                                            {/* <Typography variant="subtitle1" style={{...Styles.colorWhite, ...Styles.marginTop}}>{indx+1} {indx>0?'People':'Person'}</Typography>
                                            <Typography style={{...Styles.colorGrey, ...Styles.marginTop}}>{currency} {discountActivated?offerAmount[key]*(indx+1):amount[key]*(indx+1)} per month</Typography>
                                            {!(activatingDiscount || discountActivated) && <Typography style={{...Styles.colorPrimary, ...{cursor: 'pointer'}}} onClick={this.showDiscount}>Tap here for discounted price: {currency} {offerAmount[key]*(indx+1)} per month</Typography>}
                                            {activatingDiscount && !discountActivated && <Typography style={{...Styles.colorPrimary, ...{cursor: 'pointer'}}} >Validating your post. Please wait ...</Typography>}
                                            {!activatingDiscount && discountActivated && <Typography style={{...Styles.colorPrimary, ...{cursor: 'pointer'}}} >Discount activated!</Typography>}
                                            <Typography style={{...Styles.colorGrey}}>(Effective cost: {currency} {offerAmount[key]} per person)</Typography> */}
                                            <Typography variant="subtitle2" style={{...Styles.colorWhite, ...Styles.marginTop, ...{minHeight: '120px'}}}>{desc[index]}</Typography>
                                            <div>
                                                <Button variant="contained" color="primary" onClick={()=>this.createOrder(product, index)} disabled={!bored}>
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
                         }
                          <GetDiscount discountDetails={discountDetails} hideDetails={this.hideDetails} activateDiscount = {this.activateDiscount}/>
                    </React.Fragment>
                }
            </Grid>
        )
    }
}
export default Package