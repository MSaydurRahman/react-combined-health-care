import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firebase.init';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../hooks/useAuth';
import "./Login.css"

initializeAuthentication();
const auth = getAuth();
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const { user, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const handleEmailLogIn = e => {
        e.preventDefault();
        setEmail(e.target.value)
    }

    const handlePasswordLogIn = e => {
        e.preventDefault();
        setPassword(e.target.value)
    }

    const handleLogIn = e => {
        e.preventDefault();
        if (password.length < 8) {
            setError('Password should be 8 character')
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div>
            <div className="container login border border-1 border-success rounded px-4 col-lg-12 col-sm-12 col-md-12">
                <form className=" p-4" onSubmit={handleLogIn}>
                    <div className="form-group row px-4">
                        <h2 className="text-center text-info">Log-In</h2>
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label text-white">Email</label>
                        <div className="col-sm-10 px-4">
                            <input onBlur={handleEmailLogIn} type="email" className="form-control" id="inputEmail3" placeholder="Email" required />
                        </div>
                    </div>
                    <br />
                    <div className="form-group row px-4">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label text-white">Password</label>
                        <div className="col-sm-10 px-4">
                            <input onBlur={handlePasswordLogIn} type="password" className="form-control" id="inputPassword3" placeholder="Password" required />
                        </div>
                    </div>
                    <br />
                    <div className=" row px-4 text-danger">{error}</div>
                    <br />
                    <div className="form-group row px-4 ">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary btn-lg">Sign in</button>
                        </div>
                    </div>
                </form>
                <br />
                <h6 className="p-4 text-white text-center">New to Combined Health Care? <Link to="/register">Please Register</Link></h6>
                <div className="google-sign">
                    <button className="btn btn-success btn-lg"
                        onClick={handleGoogleLogin}
                    >Google Sign-in</button>
                </div>
            </div>
        </div>
    );
};

export default Login;