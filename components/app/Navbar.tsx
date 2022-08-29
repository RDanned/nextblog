import React, {useEffect, useState} from "react";
import Link from "next/link";
import {isLoggedIn} from "../../lib/helpers/user";
import {clearStorage} from "../../lib/helpers/psStorage";
import Router from "next/router";

const Navbar = () => {
  const [logged, setLogged] = useState<boolean>();

  useEffect(() => {
    setLogged(isLoggedIn())
  }, [])

  function logout(){
    clearStorage();
    Router.push("/");
  }

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
          {
            logged
            &&
            <>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <i className="ion-compose"></i>&nbsp;New Article
                </a>
              </li>
              <li className="nav-item">
                <Link href="/user/settings">
                  <a className="nav-link">
                    <i className="ion-gear-a"></i>&nbsp;Settings
                  </a>
                </Link>
              </li>
            </>
          }
          {
            !logged
            &&
            <>
              <li className="nav-item">
                <Link href="/user/login">
                  <a className="nav-link">Sign in</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/user/register">
                  <a className="nav-link">Sign up</a>
                </Link>
              </li>
            </>
          }
          {
            logged
            &&
            <li className="nav-item">
              <a className="nav-link" onClick={logout}>Logout</a>
            </li>
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar