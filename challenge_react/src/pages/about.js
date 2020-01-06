import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import Header from '../components/header';
import Footer from '../components/footer';

class About extends Component{
    render(){
        return (
            <div>
                <Header/>
                <div className="margin-atas">
                    <div className="container-fluid exp-background">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <div className="exp-title">
                                        <h2>ABOUT ME</h2>
                                    </div>
                                </div>                        
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 about-container">
                            <p className="about-paragraf">
                                Versatile Front-end Developer with 3+ years of experience designing, developing, and managing complex e-commerce sites and internal frameworks. Specializes in AngularJS and responsive design.
                            </p>
                            <div className="education">
                                <h4>Education</h4>
                                <div className="list-edu">
                                    <ul>
                                        <li> <span>2014</span></li>
                                        <ul className="list-unstyled">
                                            <li><span>DIPLOMA</span></li>
                                            <li><div className="computer">
                                                Computer Engineering - University of Chicago
                                            </div></li>
                                        </ul> 
                                        <li><span>2018</span></li>
                                        <ul className="list-unstyled">
                                            <li><span>BACHELOR DEGREE</span></li>
                                            <li>BS Computer Engineering - University of Chicago</li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                            <div className="table-title">
                                <h3>Here’s few technologies I’ve been working with recently :</h3>
                            </div>
                            <div className="tech-table" style={{overflowX : "auto"}}>
                                <table>
                                    <tr>
                                        <td>HTML & CSS</td>
                                        <td>Serverless</td>
                                        <td>Scrum</td>
                                    </tr>
                                    <tr>
                                        <td>Programming</td>
                                        <td>Restful API</td>
                                        <td>Test-Driven Dev</td>
                                    </tr>
                                    <tr>
                                        <td>Database</td>
                                        <td>Javascript</td>
                                        <td>Software Testing</td>
                                    </tr>
                                    <tr>
                                        <td>Git & Github</td>
                                        <td>Single Page App</td>
                                        <td>UX/UI Designer</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-5 about-container">
                            <div className="about-img">
                                <img src={require('../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg')} alt=""/>
                                <div className="about-dot">
                                    <img src={require('../assets/img/img-dot.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default About;