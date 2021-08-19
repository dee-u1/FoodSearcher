import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Login from '../component/Login/Login';
import styles from '../component/Login/User.module.css';
import '../App.css';

const authenticated = WrappedComponent => props => {
  
    const currentUser = useSelector(state => state.user.user);

    const loginErrorMessage = (
        <div className={styles.login} >
            <h1>Food Searcher</h1>
            <Login />
        </div>
    );
  
      return (
        <div>
            { currentUser.length > 0 ? <WrappedComponent {...props}/> : loginErrorMessage }
        </div>
      );
  }
  
  export default authenticated;