import React from 'react';
import { Link } from 'react-router';
import loginLogo from "../assets/user.png"
const Navbar = () => {
    return (
        <div className='flex justify-between mt-3 items-center'>
            <div></div>
            <div className='space-x-3 ml-30 font-black'>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="career">Career</Link>
            </div>
            <div className='flex gap-2'>
                <img src={loginLogo} alt="" />
                <button className='btn-neutral btn'><Link to="/auth">Login</Link></button>
            </div>
            
        </div>
    );
};

export default Navbar;