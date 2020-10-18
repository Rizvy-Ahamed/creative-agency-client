import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loding from '../../images/Loding.gif';
import './ServicesDetail.css';

const Services = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect(() => {
        fetch('https://rocky-plains-35683.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])

    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h1 style={{ color: 'black' }}>Provide awesome services</h1>
            </div>
            <div className="d-flex justify-content-center">
                {serviceData.length === 0 ?
                    <img src={Loding} alt="" />
                    :
                    <div className="w-75 row mt-5 pt-5">
                        {serviceData.map(service =>

                            <div className="col-md-4 text-center service">
                                <Link to='/order' style={{ textDecoration: 'none' }}>
                                    <img style={{ height: '50px' }} src={service.img} alt="" />
                                    {
                                        service.image ? <img style={{ height: '50px' }} src={`data:image/png;base64,${service.image.img}`} />
                                            :
                                            <img style={{ height: '50px' }} className="img-fluid mb-3" src={`https://rocky-plains-35683.herokuapp.com/${service.img}`} alt="" />
                                    }
                                    <h5 className="mt-3 mb-3">{service.name}</h5>
                                    <p className="text-secondary">${service.Description}</p>
                                </Link>
                            </div>

                        )}
                    </div>
                }
            </div>
        </section>
    );
};

export default Services;