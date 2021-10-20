import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Navbar.css"
const Navbar = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="nav-bar  col-md-12 col-sm-12 col-lg-12">
            <h1 className="title">Combined Health Care</h1>
            <div className="nav container">
                <Link to="/home">Home</Link>
                <Link to="/services">Conditions and Diseases</Link>
                <Link to="/treatment">Treatments, Tests and Therapies</Link>
                <Link to="/about">About</Link>
                <span className="text-white mx-2"> {user.displayName} </span>
                {user.email ?
                    <button onClick={logOut} className="btn btn-danger">Logout</button>
                    :
                    <Link to="/login">Log-In</Link>}

            </div>
        </div>
    );
};

export default Navbar;