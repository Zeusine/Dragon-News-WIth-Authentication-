import React from 'react';
import logo from "../assets/logo.png"
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 p-3'>
            <img src={logo} alt="logo" />
            <h3 className='text-gray-400 '>Journalism Without Fear or Favour</h3>
            <p>{moment().format('dddd, MMMM Do YYYY')}</p>
        </div>
    );
};

export default Header;