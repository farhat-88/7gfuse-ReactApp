import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="main-header navbar navbar-expand navbar-dark ml-0">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src="http://172.16.1.250/assets/img/7g-fuse.svg" className="logo" alt="7gfuse" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Form</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Table</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/item">Item</Link>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    )
}

