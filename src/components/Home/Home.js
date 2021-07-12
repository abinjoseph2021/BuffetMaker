import './Home.css'
import React from 'react'

export default class Login extends React.Component {

    constructor() {
     
        super();
        this.state = {

        }
    }

    signup = () => {
        window.location.href = window.location.protocol + '//' + window.location.host + '/signup'; 
    }

    login = () => {
        window.location.href = window.location.protocol + '//' + window.location.host + '/login'; 
    }
   

    render() {

        return (    

            <div className="Login-Wrapper">
                
                <div className="l-topnav">

                    <div className="l-top-left">
                        <div className="imgX"></div>
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

                <div className="l-main-img"></div> 
                <div className="l-main-box">
                    <p>Bulid a Connection</p>
                    <p>Between You and</p>
                    <p>Startups!</p>
                </div>    

                <div className="l-what-offers">

                    <div className="l-what-hdn">
                        <p>What BuffettMaker Offers?</p>
                    </div>

                    <div className="l-wh-grid">

                        <div className="lwh-block1">

                            <div className="lwh-b1-img1"></div>
                            
                            <p className="lwh-b1-p1">Feasibility</p>
                            <p className="lwh-b1-p">Hey you! We are here to find the feasibility of your spectacular idea!</p>
                        </div>

                        <div className="lwh-block2">

                            <div className="lwh-b1-img2"></div>
                            
                            <p className="lwh-b1-p1">Registration</p>
                            <p className="lwh-b1-p">Provides a platform to register your idea and connect with clients.</p>
                        </div>
                        
                        <div className="lwh-block3">

                            <div className="lwh-b1-img3"></div>
                            
                            <p className="lwh-b1-p1">Monitoring</p>
                            <p className="lwh-b1-p">Admin can monitor the clients and the users as well.</p>
                        </div>
                    </div>
                
                </div>

                <div className="l-footer">

                    <div className="l-first">
                        <div className="l-logox"></div>
                    </div>

                    <div className="l-second">

                        <div className="l-copyright">
                            <p>&copy;&nbsp;2021&nbsp;BuffettMaker Inc.</p>
                        </div>

                        <div className="l-group-mem">
                            <p className="l-gname-p">Abin Joseph - abinjoseph2050@gmail.com</p>
                            <p className="l-gname-p">Agin Alex - aginalex19@gmail.com</p>
                            <p className="l-gname-p">Emily Maria Thomas - emilythomas@gmail.com</p>
                            <p className="l-gname-p">Grace Sara Kurian - grace@gmail.com</p>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}