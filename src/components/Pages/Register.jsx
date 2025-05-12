import React, { useContext } from 'react';
import { AuthContext } from '../../Firebase/AuthProvider';
import { useNavigate } from 'react-router';

const Register = () => {
    const { signUpUser, setUser, user, updateProfileUser } = useContext(AuthContext)
    const navigate =useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target);
        
        const name = form.get("name");
        const url = form.get("url");
        const email = form.get("email");
        const password = form.get("password");
        const check = form.get("check");

        signUpUser(email, password)
        .then((result) => {
            const user = result.user;
            setUser(user)
            updateProfileUser({displayName : name, photoURL : url})
            .then(() => {
                navigate("/")

            })
            .catch((error) => {
                // console.log(error);
                
            })


            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log((errorCode, errorMessage));
            


        })
        
        




    }
    // console.log(user);
    return (
        <div>
            <div className="hero  mt-30 ">
                <div className="hero-content flex-col ">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10 ">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold">Register Your Account</h1>
                            <form onSubmit={handleSubmit}>
                                <fieldset className="fieldset">
                                    <label className="label">Your Name</label>
                                    <input type="text" className="input"
                                        name='name'
                                        placeholder="Enter Your Name" />
                                    <label className="label">Photo URL</label>
                                    <input type="text" className="input"
                                        name='url' placeholder="Enter Photo URL" />
                                    <label className="label">Email</label>
                                    <input type="email"
                                        name='email' className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password"
                                        name="password"
                                        className="input" placeholder="Password" />
                                    <fieldset className="fieldset rounded-box w-64  ">

                                        <label className="label">
                                            <input type="checkbox" defaultChecked className="checkbox" name='check' />
                                            Accept <span className='font-semibold'>Terms & Conditions</span>
                                        </label>
                                    </fieldset>
                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;