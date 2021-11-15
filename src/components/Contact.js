import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { useHistory } from 'react-router-dom'
import { send } from 'emailjs-com';
import M from 'materialize-css';
const Contact = () => {

    const history = useHistory();
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'prachiware15@gmail.com',
        message: '',
        reply_to: '',
    });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    const sendMail = (e) => {
        e.preventDefault();
        send(
            "service_mzhg7mj",
            "template_wu8bver",
            toSend,
            "user_z5EBYAKlTKwrafbwsRneP"
        )
            .then(
                (result) => {
                    console.log(result.text);
                    M.toast({ html: "Thank You For Reaching Us !", classes: "#43a047 green darken-1" })
                    //window.location.reload();
                    //history.push('/');
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section id="contact">
            <div className="contact-us">
                <h4 className="contact-Heading">CONTACT US</h4>
                <div className="contact-right">
                    <div>
                        <div className="card contact-auth-card input-field">
                            <form onSubmit={sendMail}>
                                <h6 className="contact-Heading">GET IN TOUCH</h6>
                                <input style={{ color: "#f57f17" }} type="text" name="from_name" placeholder="Name" value={toSend.from_name} onChange={handleChange} />
                                {/* <input type="text" name='to_name' placeholder='to name' value={toSend.to_name} onChange={handleChange} /> */}
                                <input style={{ color: "#f57f17" }} type="text" name='message' placeholder='Message' value={toSend.message} onChange={handleChange} />
                                <input style={{ color: "#f57f17" }} type="text" name='reply_to' placeholder='Email' value={toSend.reply_to} onChange={handleChange} />
                                <button type="submit" style={{ marginTop: "30px" }} className="waves-effect waves-light btn #f57f17 yellow darken-4" onClick={sendMail}>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="contact-left">
                    <div className="row">
                        <h5 className="contact-Heading col" style={{ marginLeft: "-10px" }}>WHERE TO FIND </h5>
                        <i class="material-icons medium col location-icon">location_on</i>
                    </div>
                    <ul>
                        <li><p className="address-details">Gharda Circle &nbsp; +91 0251 123456</p></li>
                        <li><p className="address-details">Char Rasta &nbsp; +91 0251 230119</p></li>
                        <li><p className="address-details">Manpada Road &nbsp; +91 0251 255058</p></li>
                        <li><p className="address-details">Phadake Road &nbsp; +91 12345 67891</p></li>
                    </ul>
                    <div>
                        <div className="row">
                            <ul className="social-links">
                                <SocialIcon style={{ height: '30px', width: '30px', marginRight: '10px' }} url="https://twitter.com/" />
                                <SocialIcon style={{ height: '30px', width: '30px', margin: '10px' }} url="https://instagram.com/" />
                                <SocialIcon style={{ height: '30px', width: '30px', margin: '10px' }} url="https://facebook.com/" />
                                <SocialIcon style={{ height: '30px', width: '30px', margin: '10px' }} url="https://youtube.com/" />
                                <SocialIcon style={{ height: '30px', width: '30px', margin: '10px' }} url="https://whatsapp.com/" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
