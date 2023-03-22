import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link to='/' className="navbar-brand" href="#">Dortor House</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link fw-bold" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/appointment' className="nav-link fw-bold" aria-current="page" href="#">Appoinment</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link fw-bold" aria-current="page" href="#">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/review' className="nav-link fw-bold" aria-current="page" href="#">Review</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' className="nav-link fw-bold" aria-current="page" href="#">Login</Link>
                            </li>

                        </ul>
                        <div>
                            <button className="btn btn-primari" >Login</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;