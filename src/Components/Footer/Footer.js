import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
    return (
        <div className=" footer">
            <div className="container footer-text text-center">
                <div className="text-white">
                    <h2 className="text-primary">Languages</h2>
                    <p>English</p>
                    <p>Hindi</p>
                    <p>Bangla</p>
                    <p>ESP</p>
                </div>

                <div className="text-white ">
                    <h2 className="text-primary">Under Service</h2>
                    <p>Bd</p>
                    <p>Usa</p>
                    <p>Uk</p>
                </div>
                <div className="text-white">
                    <h2 className="text-primary">Reports</h2>
                    <p>Corona reports</p>
                    <p>Backpain reports</p>
                    <p>Cancer reports</p>
                </div>
                <div className="text-white mt-4 font-awsome">
                    <p><Link to="/" className="fa fa-facebook"></Link></p>
                    <p><Link to="/" className="fa fa-twitter"></Link></p>
                    <p><Link to="/" className="fa fa-linkedin"></Link></p>
                    <p><Link to="/" className="fa fa-youtube"></Link></p>
                    <p><Link to="/" className="fa fa-printerest"></Link></p>
                </div>
            </div>
            <h6 className="text-white text-center p-4">© Copyright 1999-2021 by Refsnes Data. All Rights Reserved.</h6>
        </div>
    );
};

export default Footer;