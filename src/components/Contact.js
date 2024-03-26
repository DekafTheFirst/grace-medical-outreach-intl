import React, { useRef } from 'react'
import emailjs from "@emailjs/browser"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate()
    const showToastMessage = () => {
        toast.success("Sent Successfully !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.log("toast")
    };

    // const form = useRef();
    // const sendEmail = async (e) => {
    //     e.preventDefault();
  
    //     const send = await emailjs.sendForm('service_52kwkmi', 'template_ehat94j', form.current, 'VONmTEDog8CxIxNc5')
    //     .then(() => showToastMessage()
    //     ).catch((error)=>{
    //         console.log("error" + error)
    //     })

    //     navigate("/");
    // };

    const form = useRef();
    const sendEmail = async (e) => {
        navigate("/");
    };

    


    return (
    <div className="contact-page">
        <div className='banner'>
            <div className="banner-heading">
                <h1>CONTACT US</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Contact</li>
                    </ol>
                </nav>
            </div>
        </div>
        <ToastContainer />
        <div className="container">
            <div className="contact-content">
                <h2>What can we do for you?</h2>
                <p>Give us some info and we will surely get back to you.</p>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form row">
                        <input type="text" name="user_name" id="" placeholder="Your Name" />
                        <input type="email" name="user_email" id="" placeholder="Email" />
                        <select name="reason" id="">
                            <option value="An Unknown Reason">Reason For Contacting*</option>
                            <option value="Construction">I want to become a member</option>
                            <option value="Consultation">I Would Like to make a donation</option>
                            <option value="Building Materials">I want to know more about GMOI</option>
                            <option value="Immigration Services">General Inquries</option>
                        </select>
                        <input type="tel" name="phone_number" id="" placeholder="Phone" />
                    </div>
                    <div className='row'>
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Write in details...."></textarea>
                        <p>* indicates a required field.</p>
                    </div>
                    <button type="submit" value="Send" className="page-btn">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact