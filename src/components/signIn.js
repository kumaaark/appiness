import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//redux
import {connect} from 'react-redux'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(30),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn(props) {
  const classes = useStyles();
  const user = {
    username:"hruday@gmail.com",
   password :"hruday123"
}

const [formData,setFormData] = useState({
  username: '',
  password: '',
  helperText: '',
  error:false
})

  const changeHandler = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
    
  }

  

  const submitHandler = (e) => {
    e.preventDefault()
   if(formData.username===user.username && formData.password===user.password){
     props.loginSuccess()
     props.history.push('/persons')
   }else{
     setFormData({
       ...formData,
       helperText:"Password or email is wrong",
       error:true
     })
   
     props.loginFail()
     
   }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={(e)=>submitHandler(e)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Email Address"
            onChange={(e)=>changeHandler(e)}
            value={formData.username}
            error={formData.error}
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            error={formData.error}
            helperText={formData.helperText} 
            onChange={(e)=>changeHandler(e)}
            value={formData.password}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>
  );
}
const mapStateToProps = (state) =>{ 
  return {auth:state.login.login}
}

const mapDispatchToProps = (dispatch) => {
  return {loginSuccess:()=>dispatch({type:'LOGIN_SUCCESS'}),
          loginFail:()=>dispatch({type:'LOGIN_FAIL'})} 
}


export default connect(mapStateToProps,mapDispatchToProps)(SignIn)