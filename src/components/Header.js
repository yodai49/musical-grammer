import React from 'react';
import {Link} from 'react-router-dom';

import './../css/header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary header fixed-top" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">楽典基礎</Link>
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
                                <li><Link to="/NaturalNote" className="dropdown-item">幹音</Link></li>
                                <li><Link to="/DerivedNote" className="dropdown-item">派生音</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                2. 度数と調
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to="/" className="dropdown-item">度数</Link></li>
                                <li><Link to="/NaturalNote" className="dropdown-item">調</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                3. 階名と音階
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to="/" className="dropdown-item">階名</Link></li>
                                <li><Link to="/NaturalNote" className="dropdown-item">長音階</Link></li>
                                <li><Link to="/NaturalNote" className="dropdown-item">短音階</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                4. 和音
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to="/" className="dropdown-item">和音</Link></li>
                                <li><Link to="/NaturalNote" className="dropdown-item">長音階</Link></li>
                                <li><Link to="/NaturalNote" className="dropdown-item">短音階</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                5. 和声法入門
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to="/" className="dropdown-item">禁則</Link></li>
                                <li><Link to="/NaturalNote" className="dropdown-item">限定進行音</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;