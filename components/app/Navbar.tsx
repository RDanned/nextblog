import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand" href="/">conduit</a>
                </Link>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <a className="nav-link active" href="">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">
                            <i className="ion-compose"></i>&nbsp;New Article
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">
                            <i className="ion-gear-a"></i>&nbsp;Settings
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Sign in</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Sign up</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar