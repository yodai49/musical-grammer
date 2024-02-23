import React from 'react';
import {HashLink} from 'react-router-hash-link';

import './../css/header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary header fixed-top" data-bs-theme="dark">
            <div className="container-fluid">
                <HashLink to="/" className="navbar-brand">楽典基礎</HashLink>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#Navber" aria-controls="Navber" aria-expanded="false" aria-label="ナビゲーションの切替">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="Navber" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                1. 音名
                            </a>
                            <ul className="dropdown-menu">
                                <li><HashLink to="/NaturalNote#title" className="dropdown-item">幹音</HashLink></li>
                                <li><HashLink to="/DerivedNote#title" className="dropdown-item">派生音</HashLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                2. 度数と和音
                            </a>
                            <ul className="dropdown-menu">
                                <li><HashLink to="/Interval1#title" className="dropdown-item">度数①</HashLink></li>
                                <li><HashLink to="/Interval2#title" className="dropdown-item">度数②</HashLink></li>
                                <li><HashLink to="/Harmony#title" className="dropdown-item">和音</HashLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                3. 階名
                            </a>
                            <ul className="dropdown-menu">
                                <li><HashLink to="/" className="dropdown-item">階名</HashLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                4. 音階
                            </a>
                            <ul className="dropdown-menu">
                                <li><HashLink to="/" className="dropdown-item">長音階</HashLink></li>
                                <li><HashLink to="/" className="dropdown-item">短音階</HashLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                5. 和声法入門
                            </a>
                            <ul className="dropdown-menu">
                                <li><HashLink to="/" className="dropdown-item">禁則</HashLink></li>
                                <li><HashLink to="/NaturalNote" className="dropdown-item">限定進行音</HashLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;