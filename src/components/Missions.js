import React from 'react'
import { Link } from 'react-router-dom'


const Missions = () => {
    const missions = [
        { title: 'Mission to Gafere Kuje Area Council', date: '2026', desc: 'Outreach to Gafere Kuje Area council with Mission supporters league MSL', img: require('../imgs/new-images/kuje-3.jpeg') },
        { title: 'Mission to Wuse, Abuja, FCT', date: '2025', desc: 'Went to spread the love of crist to communities deep inside Wuse', img: require('../imgs/new-images/Wuse-3.jpeg') },
        { title: 'Mission to Wuse, Abuja, FCT', date: '2025', desc: 'Went to spread the love of crist to communities deep inside Wuse', img: require('../imgs/new-images/Wuse-3.jpeg') },

        { title: 'Mission to Igumale, Ado LGA, Benue State', date: 'Sept, 2022', desc: 'We carried out a three-day outreach mission to Igumale community and we provided medical care to the inhabitants and also performed both medical and dental surgeries.', img: require('../imgs/grace-medical/3.jpg') },
        { title: 'Mission to Tukuba Village, Kuje Area Council, F.C.T, Abuja.', date: 'March 30, 2019', desc: 'From local communities to international outreach programs, Grace Medical Outreach Intl extends its healing touch to diverse corners of', img: require('../imgs/grace-medical/32.JPG') },
        { title: 'Mission to Iyala Community, Kogi State.', date: 'March 27, 2021', desc: 'From local communities to international outreach programs, Grace Medical Outreach Intl extends its healing touch to diverse corners of', img: require('../imgs/grace-medical/41.JPG') },
        { title: 'Mission to Apo, F.C.T, Abuja', date: 'October 23, 2021', desc: 'From local communities to international outreach programs, Grace Medical Outreach Intl extends its healing touch to diverse corners of', img: require('../imgs/grace-medical/6.jpg') },
        { title: 'Mission to KWALI, ABUJA.', date: 'October 23, 2021', desc: 'G.M.O.I (GRACE MEDICAL OUTREACH INTL) IN   COLLABORATION WITH B.I.F.L.D (BAOBAB INITIATIVE FOR LIFE &  DEVELOPMENT )', img: require('../imgs/grace-medical/50.jpg') },

    ]

    return (
        <div className='page missions'>
            <div className='banner'>
                <div className="banner-heading">
                    <h1>Missions</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Missions</li>
                        </ol>
                    </nav>
                </div>
            </div>


            <section className="missions container-fluid mb-0">

                {missions.map((item, index) => (
                    <div className="row" key={index}>
                        <div className="col-md-6">
                            <img src={item.img} style={{maxHeight: 300, objectFit: 'cover'}}/>
                        </div>
                        <div className="col-md-6 p-4">
                            <h2 className='heading m-0'>{`${item.title.substring(0, 40)}...`}</h2>
                            <p className='text-muted mb-3'>{item.date}</p>

                            <p className='body-text' style={{ fontSize: 13 }}>
                                {`${item.desc.substring(0, 100)}...`}
                            </p>
                        </div>

                    </div>
                ))}
            </section>
        </div>
    )
}

export default Missions