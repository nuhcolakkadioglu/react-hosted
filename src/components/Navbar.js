import React from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Navbar() {
    const state = useSelector(state =>state);
  
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4" to="/">E-Ticaret</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Anasayfa</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Ürünler</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/hakkimizda">Hakkımızda</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/iletisim">İletişim</NavLink>
                        </li>

                    </ul>
                    <div className='buttons'>
                        <NavLink className='btn btn-outline-dark' to="/login">
                            <i className='fa fa-sign-in me-1'></i> Giriş</NavLink>

                        <NavLink className='btn btn-outline-dark ms-2' to="/register">
                            <i className='fa fa-user-plus me-1'></i> Kayıt Ol</NavLink>

                        <NavLink className='btn btn-outline-dark ms-2' to="/cart">
                            <i className='fa fa-shopping-cart'></i>Sepet ({state.handleCart.length})</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
