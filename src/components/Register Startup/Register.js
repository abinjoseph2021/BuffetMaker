import './Register.css'
import React from 'react'
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Login extends React.Component {

    constructor() {
     
        super();
        this.state = {
            sname: '',
            srating: 0,
            rwork0: '',
            rwork1: '',
            rwork2: '',
            sarray: [],
        }
    }

    logout = () => {
        window.location.href = window.location.protocol + '//' + window.location.host + '/login'; 
    }

    getsname = (evt) => {

        this.setState({
            sname: evt.target.value
        });      
    }

    getsrating = (evt) => {

        this.setState({
            srating: evt.target.value
        });      
    }

    getrwork0 = (evt) => {

        this.setState({
            rwork0: evt.target.value
        });      
    }
    
    getrwork1 = (evt) => {

        this.setState({
            rwork1: evt.target.value
        });      
    }
    
    getrwork2 = (evt) => {

        this.setState({
            rwork2: evt.target.value
        });      
    }    

    submit = () => {
     
        this.state.sarray.push(this.state.rwork0);
        this.state.sarray.push(this.state.rwork1);
        this.state.sarray.push(this.state.rwork2);

        const reqBody = {
            "name": "" + this.state.sname,
            "rating": this.state.srating,
            "recentWorks": this.state.sarray
        }

        //alert(JSON.stringify(reqBody));

        axios.post('http://localhost:8080/api/company/register', reqBody)
        .then((res) => {
    
            if(res.status === 201) {

                //alert(JSON.stringify(res.data));

                localStorage.setItem('startup-found', true); 
                localStorage.setItem('startup-data', JSON.stringify(res.data));

                toast.info('Startup Registered!', {
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
                  }, 3500)

            } else {

            }
        })        
    }

    render() {

        return (    

            <div className="Register-Wrapper">
                
                <div className="r-topnav">

                    <div className="r-top-left">
                        <p>Startup</p>
                    </div>
                    
                    <div className="r-top-right">
                        <input type="submit" value="Logout" className="r-tr-logout" onClick={ this.logout }></input>
                    </div>
                </div>

                <div className="r-startup-hdn">                    
                    <p className="r-sth-p">Register Startup</p>                    
                </div>

                <div className="r-line"></div>

                <div className="r-wrx">
                    <p className="r-p">Name</p>
                    <input type="test" placeholder="Enter Startup Name" onChange={ this.getsname }></input>

                    <p className="r-p">Rating</p>
                    <input type="test" placeholder="Enter Startup Rating" onChange={ this.getsrating }></input>

                    <div>
                        <p className="r-p">Recent Works</p>    

                        <div className="r-inp-wrx">
                            <div>
                                <input className="" type="text" placeholder="Enter Recent Work"onChange={ this.getrwork0 }></input>  
                            </div> 

                            <div>
                                <input className="r-inpx"  type="text" placeholder="Enter Recent Work" onChange={ this.getrwork1 }></input>  
                            </div> 

                            <div>
                                <input className="r-inpx"  type="text" placeholder="Enter Recent Work" onChange={ this.getrwork2 }></input>  
                            </div>                             
                        </div>                    
                                                                                         
                    </div>

                    <input type="submit" className="r-submit" onClick={this.submit}></input>
                </div>
                <ToastContainer />
            </div>

        );
    }
}