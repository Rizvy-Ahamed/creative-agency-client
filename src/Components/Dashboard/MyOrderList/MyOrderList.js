import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import OrderList from './OrderList';
import loding from '../../images/Loding.gif';

const MyOrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://rocky-plains-35683.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="services-container mt-5">

                    <div className="d-flex justify-content-center">
                        {orders.length === 0 ?
                            <img style={{width:"20px"}} src={loding} alt="" />
                            : <div>
                                {
                                    orders.map(Order =>

                                        <div class="col-md-12" >
                                            <div className="card p-3 m-5" style={{ borderRadius: '5px', height: '30vh', marginLeft: '20%' }}>
                                                <div class="card-body p-3 d-flex">
                                                    {
                                                        Order.image ? <img style={{ borderRadius: '50px' }} width="60" src={`data:image/png;base64,${Order.image.img}`} />
                                                            :
                                                            <img style={{ borderRadius: '50px' }} width="60" className="img-fluid mb-3" src={`https://rocky-plains-35683.herokuapp.com/${Order.img}`} alt="" />
                                                    }
                                                    <div>
                                                        <h6 className="text-primary">{Order.serviceName} </h6>
                                                        <input type="button" value={Order.status} />
                                                        <p>{Order.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    )}

                            </div>
                        }

                    </div>
                </div>
            </div>
        </section>








    );
};

export default MyOrderList;