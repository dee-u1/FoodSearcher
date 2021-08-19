import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

const requiresAuth = WrappedComponent => props => {
  
    const currentUser = useSelector(state => state.user.user);
    const history = useHistory();

    useEffect(() => {
        if (currentUser.length < 1)
            history.push("/login")
      });

    return (
        <div>
            <WrappedComponent {...props}/>
        </div>
    );
  }
  
  export default requiresAuth;