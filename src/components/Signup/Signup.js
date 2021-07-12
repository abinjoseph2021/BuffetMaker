import './Signup.css';
import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Login extends React.Component {

    constructor() {
     
        super();
        this.state = {
            uname: '',
            email: '',
            password: '',
            accountType: '',
        }
    }

    redirectlogin = () => {
        window.location.href = window.location.protocol + '//' + window.location.host + '/login';  
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

    getemail = (evt) => {

        this.setState({
            email: evt.target.value
        });        
    }    

    getpasswrod = (evt) => {

        this.setState({
            password: evt.target.value
        });        
    }

    getaccountType = (evt) => {

        this.setState({
            accountType: evt.target.value
        });        
    }    

    submit = () => {
        
        const reqBody = {
            "accountType": "" + this.state.accountType,
            "username": "" + this.state.uname,
            "email": "" + this.state.email,
            "password": "" + this.state.password
        }

        axios.post('http://localhost:8080/api/account/signup', reqBody)
        .then((res) => {
    
            if(res.status === 201) {

                //alert(res.data);

                toast.info('Account Created!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                setTimeout(() => {
                    window.location.href = window.location.protocol + '//' + window.location.host + '/login'; 
                  }, 3500)

            } else {

            }
        })
    }

    render() {

        return (    

            <div className="Signup-Wrapper">
                
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

                <div className="s-rect-wrapper">

                    <div className="s-rect-hdn">
                        <p>Signup</p>
                    </div>
                    {/*<div className="s-rect-line"></div>*/}

                    <div className="s-rect-inside">
                        <p className="s-rect-in-p">Username:</p>
                        <input type="text" placeholder="Enter Username" className="s-rect-in-inp" onChange={ this.getuname }></input>
                        
                        <p className="s-rect-in-p p-two">Email:</p>
                        <input type="text" placeholder="Enter Email" className="s-rect-in-inp" onChange = { this.getemail }></input>
                        
                        <p className="s-rect-in-p p-two">Password:</p>
                        <input type="password" className="s-rect-in-inp" placeholder="Enter Password" onChange = { this.getpasswrod }></input>
                        
                        <p className="s-rect-in-p p-two">Account Type:</p>
                        
                        <input list="atype" placeholder="Select Account Type" className="s-rect-in-inp" name="atype" onChange = { this.getaccountType }/>
                        <datalist id="atype">
                            <option value="Startup"></option>
                            <option value="Client"></option>
                        </datalist>
                        
                        <input type="submit" className="s-rect-in-submit" onClick = { this.submit }></input>
                    </div>

                </div>

                <div className="s-rect-already">
                    <p>Already have an account? <span className="s-rect-span" onClick={ this.redirectlogin }>Login</span></p>
                </div>

                <ToastContainer />

            </div>

        );
    }
}