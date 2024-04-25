import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {

    const { loginUser } = useContext(AuthContext)


    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        loginUser(email, password)
        .then(res=>{
            console.log(res)
            alert(`login successful with user : ${res.user}`)
        })
        .catch(err=>console.log(err))

    }

    return (
        <div>
            <div className="hero  min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    {/* <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div> */}

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body lg:w-[400px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className=' text-center'>
                                <h1>or login with social</h1>
                                <div className='flex gap-3 justify-center'>
                                    <Link className=' font-semibold'>GOOGLE</Link>
                                    <Link className=' font-semibold'>GITHUB</Link>
                                </div>
                            </div>
                            <div>
                                <p className=' text-center'>Don't have an account? <Link className='text-blue-500' to={'/register'}>Register</Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;