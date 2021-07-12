import './Login.css'
import React from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Login extends React.Component {

    constructor() {
     
        super();
        this.state = {
            uname: '',
            password: '',
        }
    }

    redirectSignup = () => {
        window.location.href = window.location.protocol + '//' + window.location.host + '/signup';  
    }

    signup = () => {
        window.location.href = window.location.protocol + '//' + window.location.host + '/signup'; 
    }

    login = () => {
        window.location.href = window.location.protocol + '//' + window.location.host + '/login'; 
    }

    backToHome = () => {
        window.location.href = window.location.protocol + '//' + window.location.host + '/home'; 
    }

    getuname = (evt) => {

        this.setState({
            uname: evt.target.value
        });      
    } 

    getpasswrod = (evt) => {

        this.setState({
            password: evt.target.value
        });        
    }

    submit = () => {
        
        const reqBody = {
            "username": "" + this.state.uname,
            "password": "" + this.state.password
        }

        axios.post('http://localhost:8080/api/account/login', reqBody)
        .then((res) => {
    
            if(res.status === 200) {

                if(res.data.accountType == 'Client') {
                   
                    toast.info('Login Successful!', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                    setTimeout(() => {
                        window.location.href = window.location.protocol + '//' + window.location.host + '/dashboard/client'; 
                    }, 3000)                 
                         
                } else {


                    const st = JSON.parse(localStorage.getItem('startup-found'));

                    if(st == true) {

                        toast.info('Login Successful!', {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
    
                        setTimeout(() => {
                            window.location.href = window.location.protocol + '//' + window.location.host + '/dashboard/startup'; 
                        }, 3000)                         
                    } else {
                        toast.info('Login Successful!', {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
    
                        setTimeout(() => {
                            window.location.href = window.location.protocol + '//' + window.location.host + '/dashboard/st/register'; 
                        }, 3000)  
                    }
                     
                }   

            } else {

            }
        })
    }

    render() {

        return (    

            <div className="Login-Wrapper">
                
                <div className="l-topnav">

                    <div className="l-top-left">
                        <div onClick = { this.backToHome } className="imgX"></div>
                        {/*<p>BuffettMaker</p>*/}
                    </div>
                    
                    <div className="l-top-right">

                        <div className="ltop-left">
                            <p className="xhover" onClick = { this.signup }>Signup</p>
                        </div>
                        <div className="ltop-right">
                            <p className="xhover" onClick = { this.login }>Login</p>
                        </div>
                    </div>
                </div> 

                <div className="rect-wrapper">

                    <div>
                        <p className="rect-hdn">Login</p>
                    </div>

                    <div className="rect-inside">
                        <p className="rect-in-p">Username:</p>
                        <input type="text" placeholder="Enter Username" className="rect-in-inp" onChange={ this.getuname }></input>
                        
                        <p className="rect-in-p p-two">Password:</p>
                        <input type="password" className="rect-in-inp" placeholder="Enter Password" onChange = { this.getpasswrod }></input>
                        
                        <input type="submit" className="rect-in-submit" onClick = { this.submit }></input>
                    </div>
                
                </div>
                
                <div className="s-rect-already">
                    <p>Don't have an account? <span className="s-rect-span" onClick = { this.redirectSignup }>Signup</span></p>
                </div>

                <ToastContainer />

            </div>

        );
    }
}