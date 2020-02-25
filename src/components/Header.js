import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        // <nav className="navbar navbar-expand-lg  navbar-light" style={{backgroundColor:"#e3f2fd"}}>
        //     <p className="navbar-brand">Toko Lukmans</p>
        //     <ul className="navbar-nav">
        //         <li className='nav-item'>
        //             <Link to="/dash" className="nav-link">Home</Link>
        //         </li>

        //         <li className='nav-item'>
        //             <Link to="/add" className="nav-link">Add</Link>
        //         </li>
        //         <li className='nav-item'>
        //             <Link to="/add" className="nav-link">Cart</Link>
        //         </li>

        //         <form class="form-inline my-2 my-lg-0">
        //             <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        //                 <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        //         </form>
        //     </ul>

        // </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" class="navbar-brand">Toko Lukmans</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/dash" class="nav-link">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/add" class="nav-link">Add</Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="/cart" tabindex="-1" aria-disabled="true">Cart</a>
                    </li>
                </ul>
            </div>
        </nav>
        
    )
}

export default Header