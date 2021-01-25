import React, { Component } from 'react';
import {
    Grid,
    Typography,
    Button,
  } from "@material-ui/core";
  import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
  import ClearIcon from '@material-ui/icons/Clear';
  import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
class Thanks extends Component {
    constructor(props){
        super(props);
        this.state={
            referal:[],
            url:'',
            message:'',
        }
        
    };
    componentDidMount(){
        this.setState({url:this.props.url});
        this.setState({message:this.props.message});
        this.setState({referal:this.props.referallist});
    }
    render() {
        return (
            (this.state.referal && this.state.url && this.state.message)&&
            <Grid container xs={12}direction="column" spacing={2} align= "center">
                <Grid item>{console.log(this.state)}
                <Typography>Thank you for your references</Typography>
                </Grid>
                <Grid item container direction="column" spacing={2} alignItems= "center">
                 { this.state.referal.map(personStats=>(
                     <Grid item>
                        {personStats.mailStatus===true&&<Typography>{personStats.email}<CheckCircleOutlineIcon color='primary'/></Typography>}
                        {personStats.mailStatus!==true&&<Typography>{personStats.email}<ClearIcon color='secondary'/></Typography>}
                        </Grid>
                 ))
                 }
                 <Typography>{this.state.message}</Typography>
                 <Grid item container direction="row" spacing={2}  justify="center" alignItems = "center">
                    <Grid item container direction="column" spacing={2} alignItems = "center">   
                     <Typography>You can use this URL to directly refer your friends:</Typography> 
                     </Grid>
                 <Typography style={{borderStyle:'solid'}} >{this.state.url}</Typography>
                 <Button style={{margin:'10px'}} variant="contained" color="primary" size="small"
                    startIcon={<FileCopyOutlinedIcon />} onClick={navigator.clipboard.writeText(this.state.url)}>
                    Copy Link </Button> 
                </Grid>
                 </Grid> 
            </Grid>     
        );
    }
}

export default Thanks;