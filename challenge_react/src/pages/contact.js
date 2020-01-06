import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

class Contact extends Component{
    render(){
        return (
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-5 contact-left">
                        <div className="contact-left-img">
                            <img src={require('../assets/img/charles-rRWiVQzLm7k-unsplash.jpg')} alt=""/>
                        </div>
                        <div className="contact-left-logo">
                            <a href="index.html">
                                <img src={require('../assets/img/logo-ALTA-v2.png')} alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="contact-right">
                            <h4>Contact Us</h4>
                            <form>
                                <div className="form-group">
                                    <label for="full-name">
                                        Full Name<span className="font-red">*</span>
                                    </label>
                                    <input type="text" className="form-control" name="full-name" id="full-name" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <label for="email">
                                        Email Address<span className="font-red">*</span>
                                    </label>
                                    <input type="email" className="form-control" name="email" id="email" placeholder="example@alterra.id" required />
                                </div>
                                <div className="form-group">
                                    <label for="phone">
                                        Phone Number<span className="font-red">*</span>
                                    </label>
                                    <input type="text" className="form-control" name="phone" id="phone" placeholder="085554447900" required />
                                </div>
                                <div className="form-group">
                                    <label for="role">
                                        Role
                                    </label>
                                    <select className="form-control" name="role" id="role">
                                        <option value="" disabled selected>Selected</option>
                                        <option value="front-end-engineer">Front-End Engineer</option>
                                        <option value="full-stack-engineer">Full-Stack Engineer</option>
                                        <option value="quality-engineer">Quality Engineer</option>
                                        <option value="ui-ux-designer">UI/UX Designer</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="message">
                                        Message
                                    </label>
                                    <textarea className="form-control" name="message" id="message" rows="5"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary contact-button">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}
export default Contact;