import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
class Footer extends Component{
    render(){
        return (
            <footer>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 col-6">
                            <div className="footer-logo">
                                <a href="index.html">
                                    <img src={require('../assets/img/logo-ALTA-v2.png')} alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="footer-media">
                                <span>Social Media</span>
                                <div className="footer-media-logo">
                                    <a href="index.html">
                                        <img src={require('../assets/img/ic_fb.png')} alt=""/>
                                    </a>
                                    <a href="index.html">
                                        <img src={require('../assets/img/ic-twitter.png')} alt=""/>
                                    </a>
                                    <a href="index.html">
                                        <img src={require('../assets/img/ic-instagram.png')} alt=""/>
                                    </a>
                                    <a href="index.html">
                                        <img src={require('../assets/img/ic-linkedin.png')} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-copyright">
                                <span>Copyright &copy; 2019 Alterra</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;