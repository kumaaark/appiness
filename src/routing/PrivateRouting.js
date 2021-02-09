import React from 'react'
import { Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import { Component } from 'react';

const PrivateRoute = ({component: Component,auth: isAuthenticated,...rest}) => (
    <Route {...rest} render={props=>!isAuthenticated ? (<Redirect to="/"/> ): (<Component {...props}/>) } />
)



const mapStateToProps = state => {
    return {auth: state.login.login}
}


export default connect(mapStateToProps)(PrivateRoute)