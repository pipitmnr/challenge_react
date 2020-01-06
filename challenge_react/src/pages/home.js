import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import Header from '../components/header';

class Home extends Component{
    render(){
        return (
            <div>
                <Header/>
                <div className="container-fluid home-bg">
                    <div className="container">
                        <div className="margin-atas">
                            <div className="row row-home align-items-center">
                                <div className="col-md-5 align-items-center">
                                    <div className="container-img">
                                        <img src={require('../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg')} alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-7 align-items-center">
                                    <div className="container-text">
                                        <h6>Hi, my name is</h6>
                                        <h1>Anne Sullivan</h1>
                                        <h5>I build things for the web</h5>
                                    </div>
                                    <a href="contact.html">
                                        <button className="btn btn-primary contact-button">
                                            Get In Touch
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
}
export default Home;