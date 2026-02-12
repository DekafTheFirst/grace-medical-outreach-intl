import React from 'react'
import { Link } from 'react-router-dom'
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

const Give = () => {

    const config = {
        public_key: 'FLWPUBK_TEST-389b58373859c4c7817c4fb685d1dc45-X',
        tx_ref: Date.now(),
        amount: 100,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: 'user@gmail.com',
            phone_number: '070********',
            name: 'john doe',
        },
        customizations: {
            title: 'Grace Medical Outreach International',
            description: 'Thank you for your gift',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };

    const fwConfig = {
        ...config,
        text: 'Pay with Flutterwave!',
        callback: (response) => {
            console.log(response);
            closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => { },
    };

    return (
        <div className='give'>
            <div className='banner'>
                <div className="content">
                    <h1>DONATE TO GRACE MEDICAL OUTREACH INTERNATIONAL</h1>
                    <p>Your generous contribution empowers us to mobilize and equip our dedicated team, enabling us to maximize our impact in spreading the message of Calvary. </p>
                    <h2>BANK ACCOUNT INFO:</h2>
                    <h2>4110069925</h2>
                    <h2>Fidelity Bank</h2>
                    {/* <div className="naira">
                        <h3>Naira:</h3>
                        <p></p>
                    </div> */}
                    {/* <FlutterWaveButton className='page-btn' {...fwConfig} /> */}

                </div>
            </div>
        </div>
    )
}

export default Give