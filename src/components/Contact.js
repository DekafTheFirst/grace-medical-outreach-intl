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


    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        const send = await emailjs.sendForm('service_3jroi2i', 'template_p3413hg', form.current, 'TYUEZQ9asPcL-O8Is')
            .then(() => {
                showToastMessage();
                
            }
            ).catch((error) => {
                toast.error("An Error Occured!", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            })

    };

    // const sendEmail = async (e) => {
    //     navigate("/");
    // };




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
                    <h2 className='m-0'>What can we do for you?</h2>
                    <p className='mb-4'>Give us some info and we will surely get back to you.</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form row">
                            <input type="text" className='form-control' name="user_name" id="" placeholder="Your Name" />
                            <input type="email" className='form-control' name="user_email" id="" placeholder="Email" />
                            <select name="reason" className='form-select' id="">
                                <option value="An Unknown Reason">Reason For Contacting*</option>
                                <option value="Construction">I want to become a member</option>
                                <option value="Consultation">I Would Like to make a donation</option>
                                <option value="Building Materials">I want to know more about GMOI</option>
                                <option value="Immigration Services">General Inquries</option>
                            </select>
                            <input type="tel" className='form-control' name="phone_number" id="" placeholder="Phone" />
                        </div>
                        <div className='row'>
                            <textarea name="message" className='form-control' id="" cols="30" rows="10" placeholder="Write in details...."></textarea>
                            <small className='text-start'>* indicates a required field.</small>
                        </div>
                        <button type="submit" value="Send" className="page-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact