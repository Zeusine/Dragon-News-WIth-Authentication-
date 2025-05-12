import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Firebase/AuthProvider';

const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const [error, setError] = useState({})
    const location = useLocation()
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const password = form.password.value;
        const email = form.email.value;
        signInUser(email,password)
        .then((user) => {
            // console.log(user.user);
            navigate(location?.state? location.state: "/")

            
            
            
        })
        .catch((err) => {
            setError({...error, login: err.code})
            // console.log(err);
            
            
        })
        
    }
    // console.log(error);
    
    return (
        <div>
            <div className="hero  mt-30">
                <div className="hero-content flex-col ">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold">Login To Your Account</h1>
                            <form onSubmit={handleSubmit}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" 
                                    name='email'
                                    placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password"
                                    name='password'
                                    className="input" placeholder="Password" />
                                    
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    {
                                        error.login && <label className="label">{error.login}</label>
                                    }
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </form>
                            <h3>Don't Have An Account? <Link to="/auth/register" className='text-orange-400'>Register</Link></h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;