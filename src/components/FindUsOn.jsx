import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const FindUsOn = () => {
    return (
        <div className='mt-4'>
            <h1 className='mb-4'>Find Us On</h1>
            <div>
                <div className="join flex join-vertical ">
                    <button className="btn join-item  justify-start"> <FaFacebook></FaFacebook> Facebook</button>
                    <button className="btn join-item justify-start"><BsTwitter></BsTwitter> Twitter</button>
                    <button className="btn join-item justify-start"><BsInstagram> </BsInstagram> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUsOn;