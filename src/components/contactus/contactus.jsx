import "./contactus.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import logo from "../../images/logo.jpeg"

function Contactus() {
    return (
        <div>
            <div className="bg pb-4">
                <img src={logo} alt="logo" className="w-25 rounded rounded-circle"/>
                <h3 className="text-center text-dark bg-white container">Contact Us</h3>
                <p className="text-center container text-dark bg-white fw-bolder">Have a question? You can find a host of brilliant articles in our 
                    knowledge base. If you can't find what you're looking for, we'd be happy to point
                    you in the right direction. Please feel free to send us an email or even give us a
                    call at 123456789
                </p>
            </div>

            <div className='row mt-5 justify-content-center bg-light'>
                <div className='col col-lg-4 col-md-4 col-sm-12 col-12 border p-5'>
                    <h4>H and S department</h4>
                    <p>Vignana Jyothi Nagar,</p>
                    <p>Pragati Nagar,</p>
                    <p>Nizampet(S.O),</p>
                    <p>Hyderabad 500090</p>
                    <p>TS, India</p>
                    <br />
                </div>
                
                <div className='col col-lg-4 col-md-4 col-sm-12 col-12 border p-5'>
                    <h4 className='fw-bolder'>Contact information:</h4>
                    <h2>General Inquires</h2>
                    <p className="text-primary">diurnalis.vnrvjiet@gmail.com</p><br/>

                    <h2>Technical Support</h2>
                    <p className="text-primary">ssdmp123@gmail.com</p>
                    <p className="text-primary">gangishettyrinku@gmail.com</p><br/>
                    
                </div>

                <div className='col col-lg-4 col-md-4 col-sm-12 col-12 border p-5'>
                    <h4 className='fw-bolder'>Connect with us on social media</h4><br/>

                    <FontAwesomeIcon icon={faTwitter} className="display-6" /> <a className="h4" href="#"> Twitter</a><br/>
                    <br/>
                    <FontAwesomeIcon icon={faFacebook} className="display-6" /> <a className="h4" href="#"> Facebook</a><br/>
                    <br/>
                    <FontAwesomeIcon icon={faLinkedin} className="display-6" /> <a className="h4" href="#"> Linkedin</a><br/>
                    <br/>
                    <FontAwesomeIcon icon={faInstagram} className="display-6" /> <a className="h4" href="#"> Instagram</a><br/>
                </div>
            </div>

        </div>
    );
}
export default Contactus;