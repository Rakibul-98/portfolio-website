import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Contacts.css';

const Contacts = () => {

    
const handleSubmit = () =>{
    alert('Message sent successfully...');
}

    return (
        <div className="container">
            <NavBar/>
            <div className="row">
                <div className="col-md-6">
                    <h1 className="mt-5">Contact Info:</h1>
                    <div className="mt-4">
                        <h5>Email: <small>rakibul.rupom2001@gmail.com</small> </h5>
                        <h5>LinkedIn: <small> <a target="_blank" style={{textDecoration:'none'}} href="https://www.linkedin.com/in/rakibul-98">https://www.linkedin.com/in/rakibul-98</a> </small> </h5>
                        <h5>GitHub: <small> <a target="_blank" style={{textDecoration:'none'}} href="https://github.com/Rakibul-98">https://github.com/Rakibul-98</a> </small> </h5>
                        <h5>UpWork: <small> <a target="_blank" style={{textDecoration:'none'}} href="https://www.upwork.com/freelancers/~01fb49f89d28a7ef34">https://www.upwork.com/freelancers/~01fb49f89d28a7ef34</a> </small> </h5>
                    </div>
                    <div className="mt-5">
                        <h4>Address:</h4>
                        <p>Vill: Mondolpara, Manquir</p>
                        <p>Post: Jagonnathpur - 5810</p>
                        <p>City: Shibganj</p>
                        <p>Bogura, Bangladesh</p>
                    </div>
                </div>
                <div className="contact-form col-md-4">
                    <h5>Contact me: </h5>
                    <form>
                        <label htmlFor="name">Your Name: </label>
                        <input className="input-one" name="name"/>
                        <br/>
                        <label htmlFor="email">Your Email: </label>
                        <input className="input-one" name="email"/>
                        <br/>
                        <label htmlFor="email">Your message: </label>
                        <input className="input" name="message"/>
                        <br/>
                        <button onClick={handleSubmit} className="submit-btn py-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;