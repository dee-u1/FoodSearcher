import React, {useState} from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { setUser } from "../../redux/reducers/user-reducer";
import styles from './User.module.css';
import { Button } from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const Login = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [loginData, setLoginData] = useState({
            username: '',
            password: ''
        }
    )

    const inputChangeHandler = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name] : e.target.value
        });
    }

    const btnClickHandler = () => {
            const params = {
                username: loginData.username,
                password: loginData.password
              };

            axios.get('/checkuser', { params } )
            .then(function(response) {              
                if (response.data.length > 0){
                    //alert("Credentials found");
                    dispatch(setUser(response.data));            
                    history.push("/");
                }
                else{
                    alert("Wrong username or password");
                }
            }).catch(function(error) {
              console.log('Error on Authentication');
              alert("error");
            });
    }

    return (
        <div className={styles.login} > 
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
            <div className="loginContainer">
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoFocus
                    value={loginData.username}
                    onChange={inputChangeHandler} 
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={loginData.password}
                    onChange={inputChangeHandler} 
                />
                <Button variant="contained" color="primary" fullWidth onClick={btnClickHandler}>Log-in</Button>
            </div>
        </div>
    );
}

export default Login;