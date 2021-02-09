import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//redux
import {connect} from 'react-redux'




const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: theme.spacing(25)
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginTop:theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
 
}));
const obj =JSON.parse(
    `{
    "user":[{
    "id":1,
    "name":"test1",
    "age" : "11",
    "gender":"male",
    "email" : "test1@gmail.com",
    "phoneNo" : "9415346313"
    },
    {
    "id" : 2,
    "name":"test2",
    "age" : "12",
    "gender":"male",
    "email" : "test2@gmail.com",
    "phoneNo" : "9415346314"
    },
    {
    "id":3,
    "name":"test3",
    
    "age" : "13",
    "gender":"male",
    "email" : "test3@gmail.com",
    "phoneNo" : "9415346315"
    },
    {
    "id":4,
    "name":"test4",
    "age" : "14",
    "gender":"male",
    "email" : "test4@gmail.com",
    "phoneNo" : "9415346316"
    },
    {
    "id":5,
    "name":"test5",
    "age" : "15",
    "gender":"male",
    "email" : "test5@gmail.com",
    "phoneNo" : "9415346317"
    },
    {
    "id":6,
    "name":"test6",
    "age" : "16",
    "gender":"male",
    "email" : "test6@gmail.com",
    "phoneNo" : "9415346318"
    }
    ]
    }`)

    

const tiers = obj.user.map(obj=>obj)


function Persons(props) {
  const classes = useStyles();


  const logOutHandler = () => {
       props.logOut();
       props.history.push('/')
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          Appiness Interactive
          </Typography>
          
          <Button href="#" color="primary" variant="outlined" onClick={()=>logOutHandler()} className={classes.link}>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.age} >
              <Card>
                
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h4" variant="h4" color="textPrimary">
                      {tier.name}
                    </Typography>
                    
                  </div>
                <div>
                age: {tier.age}
                </div>
                <div>
                gender: {tier.gender}
                </div>
                <div>
                email: {tier.email}
                </div>
                <div>
                phone: {tier.phoneNo}
                </div>
                </CardContent>
                
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
     
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
 return {
   auth:state.login.login
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut : ()=>dispatch({type:'LOGIN_FAIL'})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Persons)