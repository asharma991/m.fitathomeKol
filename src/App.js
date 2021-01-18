import React, {Component} from 'react';
import Header from './sections/header';
import Footer from './sections/footer';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import ScrollToTop from './scrolltotop';
import theme from './theme';
import {docHt, updateLoc} from './services';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './home';
import Package from './package';
import Secret from './secretworkout';
import Ordersummary from './ordersummary';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-86957619-1');
ReactGA.pageview(window.location.pathname + window.location.search);
ReactGA.pageview('/');
ReactGA.pageview('/packages');
ReactGA.pageview('/secret');
ReactGA.pageview('/summary');


class App extends Component{
  constructor(){
    super();
    this.state={      
      scrollStatus: false
    }
  }
  componentDidMount() {
    updateLoc();
  }
  freezeScroll(val){
    this.setState({scrollStatus: val})
  }  
  render(){
    let {scrollStatus} = this.state;
    return (
      <Router>
        <ScrollToTop/>
        <ThemeProvider theme={theme}>
          <CssBaseline >
            <Grid container direction="column" className="app" style={scrollStatus?{overflow: 'hidden', height: `${docHt()}px`}:{}}>
              <Header/>
              <Switch>
                <Route path="/" exact>
                  <Home freezeScroll={(val)=>{this.freezeScroll(val)}}/>
                </Route>
                <Route path="/secret" component = {Secret}/>
                <Route path="/packages">
                    <Package freezeScroll={(val)=>{this.freezeScroll(val)}}/>
                  </Route>
                <Route path="/thank_you/summary/:orderId" component = {Ordersummary}/>
              </Switch>
              <Footer/>
            </Grid>
          </CssBaseline>
        </ThemeProvider>
        
      </Router>
    )
  }
}
export default App