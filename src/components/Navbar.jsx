import React, { useContext } from 'react';
import { Link } from 'react-router';
import loginLogo from "../assets/user.png"
import { AuthContext } from '../Firebase/AuthProvider';
const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    

    return (
        <div className='flex justify-between mt-3 items-center'>
            <div>{user?.email}</div>
            <div className='space-x-3 ml-30 font-black'>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="career">Career</Link>
            </div>
            <div className='flex gap-2'>
                <img src={loginLogo} alt="" />
                {
                    user? <button  onClick={signOutUser}className='btn-neutral btn'><Link to="/auth/login">Log Out</Link></button> : <button className='btn-neutral btn'><Link to="/auth/login">Login</Link></button>
                }
            </div>

        </div>
    );
};

export default Navbar;