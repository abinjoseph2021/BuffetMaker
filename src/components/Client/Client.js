import './Client.css'
import React from 'react'
import StarRatings from 'react-star-ratings';
import axios from 'axios';

export default class Login extends React.Component {

    constructor() {
     
        super();
        this.state = {
            sdata: null,
            searchinp: '',
            modal: false,
            wdata: ''
        }
    }

    componentDidMount() {

    }

    search = () => {

        /*const reqBody = {
            "work": "Web Development"
        }*/

        const reqBody = {
            "work": document.getElementById('title').value
        }

        //alert(JSON.stringify(reqBody))
        
        axios.post('http://localhost:8080/api/client/startups', reqBody)
        .then((res) => {
    
            if(res.status == 200) {

                this.setState({
                    sdata: res.data
                });

                //alert(JSON.stringify(res.data));
            } else {

            }
        })         
    }

    getinp = (evt) => {

        this.setState({
            sdata: evt.target.value
        });
    }

    logout = () => {
        window.location.href = window.location.protocol + '//' + window.location.host + '/login'; 
    }

    modalStatus = (dat) => {
    
        this.setState({
            modal: true,
            wdata: dat
        });
    }

    CloseFn = () => {
   
        this.setState({
            modal: false
        });        
    }

    render() {

        return (    

            <div className="Client-Wrapper">
                
                <div className="cl-topnav">

                    <div className="cl-top-left">
                        <p>Client</p>
                    </div>
                    
                    <div className="cl-top-right">
                        <input type="submit" value="Logout" className="cl-tr-logout" onClick={ this.logout }></input>
                    </div>
                </div>

                <div className="cl-startup-hdn">
                    
                    <p className="cl-sth-p">Name: Client1</p>

                </div>

                <div className="cl-line"></div>


                <div className="cl-search-wrx">
                    <input id='title' type="text" className="cl-search-inp" placeholder="Search any service..."></input>
                    <input type="submit" className="cl-search-btn" value="Search" onClick={ this.search }></input>
                </div>

                <div className="cl-load-rect">

                    { !this.state.sdata ? (
                                    
                        <div className="">
                            <p></p>
                        </div>                                    

                    ):( this.state.sdata.map((dat, i) => (

                        <div className="cl-in-rect1">

                            <div className="cl-xb1">
                                <p>{ JSON.parse(JSON.stringify(dat.name)) }</p>
                            </div>

                            <div className="cl-xb2">
                                
                                <p>Rating:</p>
                                <div>
                                    <StarRatings
                                        rating={ JSON.parse(JSON.stringify(dat.rating)) }
                                        starRatedColor="#aaa"
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension="15px"
                                    />
                                </div>
                            </div>

                            <div className="cl-xb3">
                                <input type="submit" className="cl-xb3-btn" value="Enter" onClick={ () => this.modalStatus(dat) }></input>
                            </div>
                        </div>

                    )))} 


                </div>

                { this.state.modal ? (

                <div className="cl-modal">
                    <div className="cl-close" onClick = { this.CloseFn }></div>

                    <div className="clm-wrx">

                        <p>Name: { JSON.parse(JSON.stringify(this.state.wdata.name)) }</p>
                        
                        <div className="clm-rate">
                            <p>Rating: </p>
                            <div>
                                <StarRatings
                                    rating={ JSON.parse(JSON.stringify(this.state.wdata.rating)) }
                                    starRatedColor="#aaa"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension="17px"
                                />
                            </div>                        
                        </div>

                        <div className="clm-proLine"></div>

                        <p className="clm-recent">Recent Works:</p>

                        <div className="clm-recent-wrx">
                            <p>{ JSON.parse(JSON.stringify(this.state.wdata.recentWorks[0])) }</p>
                            <p>{ JSON.parse(JSON.stringify(this.state.wdata.recentWorks[1])) }</p>
                            <p>{ JSON.parse(JSON.stringify(this.state.wdata.recentWorks[2])) }</p>
                        </div>
                    </div>    
                </div>

                ): (
                    <p></p>
                )}
                {/*<div className="cl-body1">

                    <div className="cl-b-left">

                        <p className="cl-b-hdn">Recent Visits</p>
                        
                        <div className="cl-b-line"></div>

                        <div className="cl-b-card">
                            <p>PricewaterhouseCoopers</p>
                        </div>

                        <div className="cl-b-card">
                            <p>Leopard Technologies</p>
                        </div>
                        
                        <div className="cl-b-card">
                            <p>NewVoiceMedia</p>
                        </div>
                    </div>

                    <div className="cl-b-right">

                        <p className="clbr-sug">Suggestions...</p>

                        <div className="clbr-wrx1">
                            
                            <div className="clbr-w1-left">
                                <p>Web Development</p>
                            </div>

                            <div className="clbr-w1-right">
                                <p>App Development</p>
                            </div>                            
                        </div>

                        <div className="clbr-wrx2">
                            
                            <div className="clbr-w2-left">
                                <p>UI/UX Designing</p>
                            </div>

                            <div className="clbr-w2-right">
                                <p>Media Work</p>
                            </div>                            
                        </div>

                    </div>

                </div>*/}

            </div>

        );
    }
}