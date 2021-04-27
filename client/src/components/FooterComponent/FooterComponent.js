import React from 'react';
import { Link } from 'react-router-dom';
const Footer = props => (
    <div className="footer mt-5">
        <div className="container">

            <div className="row justify-content-center align-items-baseline">
                <div className="col-md-3 col-12 text-center">
                    <Link to="/" className="footer-logo"><h4><span className="fa fa-home fa-lg"> Home-Hunt</span></h4></Link>
                </div>
                <div className="col-md-9 col-12 text-center">
                    © Home-Hunt 2021
                </div>
            </div>
        </div>
    </div>
);

export default Footer;