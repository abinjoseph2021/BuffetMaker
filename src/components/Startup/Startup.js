import './Startup.css'
import React from 'react'
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Login extends React.Component {

    constructor() {
     
        super();
        this.state = {
            name: '',
            rating: 0,
            recentWorks: '',
            random1: 0,
            random2: 0,
            random3: 0,
        }
    }

    componentDidMount() {

        const stData = JSON.parse(localStorage.getItem('startup-data'));
        //alert(stData.name);  

        const min = 500;
        const max = 1000;
        const rand = min + Math.random() * (max - min);
        var roundR = Math.round(rand);
        var r1 = roundR;
        var r2 = roundR + 1;
        var r3 = roundR + 2;

        this.setState({
            name: stData.name,
            rating: stData.rating,
            recentWorks: stData.recentWorks,
            random1: r1,
            random2: r2,
            random3: r3,
        });

    }    

    logout = () => {
        window.location.href = window.location.protocol + '//' + window.location.host + '/login'; 
    }

    submit = () => {

        toast.info('Idea Submitted!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        setTimeout(() => {
            window.location.reload();
          }, 3500)
        
    }

    render() {

        return (    

            <div className="Startup-Wrapper">
                
                <div className="st-topnav">

                    <div className="st-top-left">
                        <p>Startup</p>
                    </div>
                    
                    <div className="st-top-right">
                        <input type="submit" value="Logout" className="st-tr-logout" onClick={ this.logout }></input>
                    </div>
                </div>

                <div className="st-startup-hdn">
                    
                    <p className="st-sth-p">Startup Name: { this.state.name }</p>
                    
                    <div className="st-sth-wrx">

                        <p>Rating: </p>

                        <div className="st-sth-start">
                            <StarRatings
                                rating={ this.state.rating }
                                starRatedColor="#aaa"
                                numberOfStars={5}
                                name='rating'
                                starDimension="25px"
                            />
                        </div>
                    </div>

                </div>

                <div className="st-line"></div>

                <div className="st-body1">

                    <div className="st-b-left">

                        <p className="st-b-hdn">Recent Works</p>
                        
                        <div className="st-b-line"></div>

                        <div className="st-b-card">
                            <p>{ this.state.recentWorks[0] }</p>
                        </div>

                        <div className="st-b-card">
                            <p>{ this.state.recentWorks[1] }</p>
                        </div>
                        
                        <div className="st-b-card">
                            <p>{ this.state.recentWorks[2] }</p>
                        </div>
                    </div>

                    <div className="st-b-right">

                        <p className="st-b-rhdn">Current position with top companies</p>

                        <div className="st-b-line"></div>

                        <div className="st-b-pos-wrx">

                            <div className="st-b-pos1">
                                <p className="st-b-p">Company1</p>
                                <p className="st-b-p2">Position: { this.state.random1 }</p>
                            </div>

                            <div className="st-b-pos2">
                                <p className="st-b-p">{ this.state.name }</p>
                                <p className="st-b-p2">Position: { this.state.random2 }</p>
                            </div>

                            <div className="st-b-pos3">
                                <p className="st-b-p">Company2</p>
                                <p className="st-b-p2">Position: { this.state.random3 }</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="st-line2"></div>

                <div className="st-body2">

                    <p className="st-b2-hdn">Submit an idea:</p>

                    <textarea className="st-b2-inp"></textarea>
                </div>

                <div>
                    <input type="submit" value="Submit" className="st-b2-submit" onClick = { this.submit }></input>
                </div>

                <ToastContainer />
            </div>

        );
    }
}