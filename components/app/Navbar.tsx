import React, {useEffect} from "react";
import Link from "next/link";
import {hasToken} from "../../lib/helpers/user";
import {clearStorage} from "../../lib/helpers/psStorage";
import Router from "next/router";
import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../../lib/store/modules/user";
import {useAppDispatch} from "../../lib/store/hooks";
import {setIsLoggedIn} from "../../lib/store/modules/user";

const Navbar = () => {
  const isLoggedIn: boolean = useSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(setIsLoggedIn(hasToken()))
  }, [])

  function logout(){
    clearStorage();
    dispatch(setIsLoggedIn(false))
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
            isLoggedIn
            &&
            <>
              <li className="nav-item">
                <Link href="/articles/create">
                  <a className="nav-link">
                    <i className="ion-compose"></i>&nbsp;New Article
                  </a>
                </Link>
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
            !isLoggedIn
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
            isLoggedIn
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