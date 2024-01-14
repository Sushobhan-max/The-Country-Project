import React, { useEffect } from 'react'
import {
    Link, useLocation
} from "react-router-dom";

const Navbar = () => {
    let location = useLocation();
    useEffect(() => {
    }, [location]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark " style={{ position: 'sticky', zIndex: '10' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">The Country Project</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
                            </li>

                        </ul>
                        <div className="d-flex">
                            <button type="button" className="btn btn-light btn-sm">Sign in</button>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar