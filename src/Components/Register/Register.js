import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';
import "./Register.css"
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.init';
initializeAuthentication()
const auth = getAuth();
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/services'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    const handleName = e => {
        setName(e.target.value)
    }
    const handleEmailchange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password)
        if (password.length < 8) {
            setError('Password should be 8 character')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('');
                setUserName()
            })
            .catch(error => {
                setError(error.message)
            })
        const setUserName = () => {
            updateProfile(auth.currentUser, { displayName: name })
                .then(result => {

                })
        }
    }
    return (

        <div className="container register border border-1 border-success rounded px-4 col-lg-12 col-sm-12 col-md-12">
            <form className=" p-4" onSubmit={handleRegistration}>
                <div className="form-group row px-4">
                    <h2 className="text-center text-info">Register</h2>
                    <label htmlFor="inputText3" className="col-sm-2 col-form-label text-white">Name</label>
                    <div className="col-sm-10 px-4">
                        <input onBlur={handleName} type="text" name="name" className="form-control" id="inputText3" placeholder="name" required />
                    </div>
                </div>
                <br />
                <div className="form-group row px-4">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label text-white">Email</label>
                    <div className="col-sm-10 px-4">
                        <input onBlur={handleEmailchange} type="email" name="email" className="form-control" id="inputEmail3" placeholder="Email" required />
                    </div>
                </div>
                <br />
                <div className="form-group row px-4">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label text-white">Password</label>
                    <div className="col-sm-10 px-4">
                        <input onBlur={handlePasswordChange} type="password" name="password" className="form-control" id="inputPassword3" placeholder="Password" required />
                    </div>
                </div>
                <br />
                <div className=" row px-4 text-danger">{error}</div>
                <br />
                <div className="form-group row px-4 ">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary btn-lg">Register</button>
                    </div>
                </div>
            </form>
            <br />
            <h6 className="p-4 text-white text-center">Already have an account? <Link to="/login">Please Log-in</Link></h6>
            <div className="google-sign">
                <button className="btn btn-success btn-lg" onClick={handleGoogleLogin}>Google Sign-in</button>
            </div>
        </div>
    );
};

export default Register;