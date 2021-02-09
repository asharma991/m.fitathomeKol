
import Ordersummary from './ordersummary';
import {colors} from './services';
let docHt = document.documentElement.clientHeight;
export default{
    colorWhite: {
      color: colors.secondary
    },
    colorPrimary:{
      color: colors.primary
    },
    colorGrey: {
      color: colors.grey
    },
    blackBG:{
      background: "#000"
    },
    greyBG:{
      background: '#111'
    },
    bgImg:{
      position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1
    },
    marginTop:{
      marginTop: '10px'
    },
    padding5:{
      padding: '5%'
    },
    padding10:{
      padding: '10%'
    },
    paddingRight5:{
      paddingRight: '5px'
    },
    spacingVertical:{
      padding: '100px 0'
    },
    lftTxt:{
      textAlign: 'left'
    },
    centerTxt:{
      textAlign: 'center'
    },
    banner:{
      height: `${docHt}px`, 
      zIndex: 1000,
      overflow: 'hidden'
    },
    fixed:{
      position: '-webkit-sticky',
      position: 'sticky',
      top: 0
    },
    relative:{
      position: 'relative'
    },
    section01:{
      color: colors.secondary,
    },
    // section03:{
    //   background: `url(${homewo})`,
    //   backgroundSize: '100%',
    //   backgroundRepeat: 'none', 
    // },
    marginBottom: {
      marginBottom: '50px'
    },
    section02:{
      background: '#111', 
      padding: '0 5%', 
      minHeight: `${docHt}px`
    },
    translucentContainer:{
      background: colors.translucentBG,
      padding: '20px'
    },
    fullHt: {
        minHeight: `${docHt}px`, background: '#111'
    },
    fullHtNoBG: {height: `${docHt}px`},
    highZ:{
        zIndex: 10000
    },
    imgWidth:{
        width: '100%'
    },
    header:{
      position: 'fixed',
      top: 0,
      left:0,
      padding: '20px',
      background: 'rgba(0,0,0,.5)',
      zIndex: 20000
    },
    footer:{
      padding: '50px',
      background: '#000',
      textAlign: 'center',
      position: 'fixed',
      bottom: '0',
    },
    popup:{position: 'fixed', top: 0, left: 0, height: '100vh', paddingTop:'120px', width: '100%', background: '#000'},
    //form styles
    formFieldContainer: {height: '85px', overflow:'hidden', marginBottom: '10px'},
    whiteColor: {color: colors.secondary},
    err: {color: colors.err},
    special: {display: 'inline-block', width: '5%', textAlign: 'center'},
    countryContainer:{display: 'inline-block', width: '15%'},
    mobileContainer: {display: 'inline-block', width: '75%'},
    ordersummarySuccessMsg: {marginBottom:'60px',marginTop:'100px'}
  }