import React, {useState} from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { setUser } from "../../redux/reducers/user-reducer";
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

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
        <div className="App" > 
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