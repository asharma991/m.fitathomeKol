import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import _ from 'lodash'
import axios from 'axios';
import Grid from "@material-ui/core/Grid"
import Thanks from "./Thanks"
//import Container from '@material-ui/core/Container';
//import DefaultStyle from "./FormRender";
let hasError=true;
class ReferralForm extends React.Component{
  constructor(props) {
    var obj = _.cloneDeep(props.fields);
    super(props);
    this.state = {
      inputFeildRows : [obj],
      response:'',
    }
    };
 
    handleChangeInput=(row,col,e)=>{ 
      const {value} = e.target;
      const values = _.cloneDeep(this.state.inputFeildRows);
      values[row][col].value =value;
      this.setState({inputFeildRows:values});  

     }
    validate=(row,col,e)=>{
      const emailReg= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g;
      const nameReg =  /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
      const phoneReg = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/g;
      let errorMsg=null;
      const {name,value} = e.target;
      switch (name.toLowerCase()) {
        case 'name': 
        errorMsg = 
          nameReg.test(value)? null:'Please enter a valid Name';
          break;
        case 'email': 
        errorMsg = 
          emailReg.test(value)? null:'Please enter a valid email address!';
          break;
        case 'phone':
        errorMsg = 
          (phoneReg.test(value)||("/^[0-9]{10}$/g").test)? null:'Please enter a valid Phone Number';
          break;
        default:
          break;
        }
        if(errorMsg!=null) {
          hasError=true;        }
        else{
          hasError=false; 
        }
        const values = _.cloneDeep(this.state.inputFeildRows);
        values[row][col].error=errorMsg;
        this.setState({inputFeildRows:values});  
}
     handleAddRow=(row)=>{
      const values= _.cloneDeep(this.state.inputFeildRows);
      //values.push(empty);
      values.splice(row+1,0,[...this.props.fields]);
      this.setState({inputFeildRows : values});
    }
    handleRemoveRow=(row)=>{
      const values= _.cloneDeep(this.state.inputFeildRows);
      if(values.length>1)
      {
        values.splice(row,1);
        this.setState({inputFeildRows : values});
      }
    }
    handleSubmit=(e)=>{ 
      e.preventDefault();
     //let campaign_id=1//this.props.campaign_id;
      let postArray=[];
      const values = _.cloneDeep(this.state.inputFeildRows);
       let tempName, tempEmail , tempPhone;
       if(hasError===false)
       {
          values.map((rowData,row)=>{
          rowData.map((colData,col)=>{
            if(colData.displayname==="Name")
              tempName=colData.value;
            if(colData.displayname==="Email")
              tempEmail=colData.value;
            if(colData.displayname==="Phone")
              tempPhone=colData.value;
          return 0} )
        postArray.push({name:tempName,email:tempEmail,mobile:tempPhone,city:'',ip: '',mailStatus:null});
        return 0});
         axios({
           method: 'post',
           url: 'https://api.getsetgo.fitness/base_ind/API/v1/add_referrals',
           data: {
            // affiliate_fname: this.props.affiliate_name.split(' ')[0],
            // affiliate_lname: this.props.affiliate_name.split(' ')[1],
            // affiliate_email: this.props.affiliate_email,
            // affiliate_phone: this.props.affiliate_mobile,//"+919821354464",
            affiliate_id:this.props.affiliate_id,// ((this.props.affiliate_id===null)?1:this.props.affiliate_id),//this.props.affiliate_id,
            campaign_id: this.props.campaign_id,//((this.props.campaign_id===null)?1:this.props.campaign_id),//comment before comming 
             referrals: [...postArray],
           }
          }).then( 
            response => {
              let res = response.data;
              let uniqueURL=res.unique_url;
              let message=res.message;
              postArray.map((person)=>{
                person.mailStatus =((res.details[person.email]===true)?true:null);  
              return null;})
             this.setState({response:{userArray : postArray, url : uniqueURL , message : message}})
            //console.log(this.state.response);
            }
              ).catch((error)=>{console.log(error)})
            //{console.log(response.data.unique_url + response.data.message+response.data.details)}) 
        }
      }
 render(){
    return(
      <Grid >
       { (this.state.response==='')&&<Grid item container direction="column" justify="center" alignItems="center" spacing={2}>
             <h1>Enjoy free gifts and rewards points by referring more people </h1>
              <form onSubmit = {(e)=>this.handleSubmit(e)}>
              {this.state.inputFeildRows.map((inputRow,row)=>(
              <Grid item container  key={row} spacing={2} style={{backgroundColor:'#e1f5e5'}}>
                {
                inputRow.map((inputCol,col)=>(
                  <Grid item key={col}>
                <TextField  name ={inputCol.displayname} value={inputCol.value}  error={inputCol.error?true:false}
                id="outlined-basic" variant="outlined" label={inputCol.error ?inputCol.error:inputCol.displayname} 
                onChange={(e)=>this.handleChangeInput(row,col,e)} onBlur={(e)=>this.validate(row,col,e)}  style={inputCol.style? inputCol.style:null}/>
                </Grid>
              ))
            }
              <IconButton aria-label="Add" onClick={()=>this.handleAddRow(row)} > 
                <AddSharpIcon color="primary"></AddSharpIcon>
              </IconButton>
              {(row>0)&&<IconButton aria-label="Remove" onClick={() => this.handleRemoveRow(row)} > 
              <RemoveSharpIcon style={{ color: '#ff1744' }}></RemoveSharpIcon>
            </IconButton>}
            </Grid>))
            }
            <Button style ={{margin:'20px'}}variant="contained" color="primary" onClick = {(e)=>this.handleSubmit(e)} >Submit</Button>
            </form>
            </Grid>}
             {(this.state.response!=='')&&
                 <Thanks url={this.state.response.url} message={this.state.response.message}
             referallist={this.state.response.userArray}/>
             }
      </Grid>
         
      );
  }
}
  export default ReferralForm;
  //Always use arrow function easy to work around this.handleChange Input when no parma..use arrow in the call when params needs to be passed
  // {
    // "details":{"vmakwana28@gmail.com":true,"shraddha@getsetgo.fitness":true,"melvin@getsetgo.fitness":true},
  // "unique_url":"https:\/\/diwali.getsetgo.fitness\/1\/1",
  // "message":"You have successfully referred 3 friend(s)."
// }