import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Contacts.css';

const Contacts = () => {


    return (
        <div className="container">
            <NavBar/>
            <div className="row">
                <div className="col-md-6">
                    <h3 className="mt-5">Contact me:</h3>
                    <div className="mt-4">
                        <h6>Email: <small>rakibul.rupom2001@gmail.com</small> </h6>
                        <h6>LinkedIn: <small> <a target="_blank" style={{textDecoration:'none'}} href="https://www.linkedin.com/in/rakibul-98">https://www.linkedin.com/in/rakibul-98</a> </small> </h6>
                        <h6>GitHub: <small> <a target="_blank" style={{textDecoration:'none'}} href="https://github.com/Rakibul-98">https://github.com/Rakibul-98</a> </small> </h6>
                        <h6>UpWork: <small> <a target="_blank" style={{textDecoration:'none'}} href="https://www.upwork.com/freelancers/~01fb49f89d28a7ef34">https://www.upwork.com/freelancers/~01fb49f89d28a7ef34</a> </small> </h6>
                    </div>
                    <div className="mt-5">
                        <h3>Address:</h3>
                        <h6>Vill: Mondolpara, Manquir</h6>
                        <h6>Post: Jagonnathpur - 5810</h6>
                        <h6>City: Shibganj</h6>
                        <h6>Bogura, Bangladesh</h6>
                    </div>
                </div>
                <div className="contact-form col-md-4 mb-3 mr-5">
                    <h5>Message me: </h5>
                    <form action="https://formspree.io/f/xjvpryby" method="POST">
                        <label htmlFor="name">Your Name: </label>
                        <input className="input-one" name="name" required/>
                        <br/>
                        <label htmlFor="email">Your Email: </label>
                        <input className="input-one" name="email" required/>
                        <br/>
                        <label htmlFor="email">Your message: </label>
                        <textarea name="message" id="" cols="43" rows="6" required/>
                        <br/>
                        <button type="submit" className="submit-btn py-2">Submit</button>
                        <button type="reset" className="reset-btn py-2 ml-2">Reset Form</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;