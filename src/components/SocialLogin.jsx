import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
const SocialLogin = () => {
    return (
        <div className='*:w-full'>
            <h1 className='font-semibold mb-5 '>Login With</h1>
            <button className='btn text-blue-400 mb-2'> <FaGoogle></FaGoogle> Login With Google</button>
            <button className='btn'> <FaGithub></FaGithub> Login With Github</button>
        </div>
    );
};

export default SocialLogin;