import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
            <div className="hero  mt-30">
                <div className="hero-content flex-col ">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold">Login To Your Account</h1>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                            <h3>Don't Have An Account? <Link to="/auth/register" className='text-orange-400'>Register</Link></h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;