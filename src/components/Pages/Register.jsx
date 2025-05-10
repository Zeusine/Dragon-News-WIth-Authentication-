import React from 'react';

const Register = () => {
    return (
        <div>
            <div className="hero  mt-30 ">
                <div className="hero-content flex-col ">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10 ">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold">Register Your Account</h1>
                            <fieldset className="fieldset">
                                <label className="label">Your Name</label>
                                <input type="text" className="input" placeholder="Enter Your Name" />
                                <label className="label">Photo URL</label>
                                <input type="email" className="input" placeholder="Enter Photo URL" />
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <fieldset className="fieldset rounded-box w-64  ">
                                    
                                    <label className="label">
                                        <input type="checkbox" defaultChecked className="checkbox" />
                                        Accept <span className='font-semibold'>Terms & Conditions</span>
                                    </label>
                                </fieldset>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;