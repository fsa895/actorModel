/*eslint react/jsx-filename-extension: 0 */
/* eslint react/forbid-prop-types: 0 */
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import HomePageComponent from './HomePageComponent';

// const Rx = require('rxjs');
// const {filter, map} = require('rxjs/operators');

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        width:'80%',
        margin:'auto',
        'margin-top': '7%',

     },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: '50vw'
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },

    text: {
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
        'align-items': 'center',
        'text-align': 'center',
        'min-height': '50vh',
    },
    button: {
        'margin-top': '2%',
        
      },

  });
  

class AddGitURL extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         response : ''
    //     }
    // }

    // componentDidMount(){
    //     Rx.fromEvent(document.getElementById("outlined-email-input"), "click")
    //     .pipe(map(()=>{
    //         return document.getElementById("outlined-email-input2").value;
    //     }), 
    //     filter((data)=>{
    //        return data!==""
    //     })
    //     ).
    //     subscribe((data)=>{
    //         console.log("data",data)
    //     })
    // }

    render(){
        const { classes } = this.props;
        return(
            <div>
            <HomePageComponent />  
            <Paper className={classes.root} elevation={1}>
            <div className={classes.text}>
                <TextField
                id="outlined-email-input2"
                    label="GitURL"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"    
                />
                <Button variant="outlined" color="primary" className={classes.button} id="outlined-email-input">
                    Deploy
                 </Button> 
            </div>
                 </Paper>
                 </div>
        )
    }
}

AddGitURL.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(AddGitURL);

