import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

const requiresAuth = WrappedComponent => props => {
  
    const currentUser = useSelector(state => state.user.user);
    const history = useHistory();

    return (
        <div>
            {currentUser.length > 0 ? <WrappedComponent {...props}/> : history.push("/login") }
        </div>
    );
  }
  
  export default requiresAuth;