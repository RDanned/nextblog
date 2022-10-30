import React, {useEffect, useState} from "react";
import Link from "next/link";
import Router, {useRouter} from "next/router";
import {clearStorage} from "../../lib/helpers/psStorage";
import {hasToken} from "../../lib/helpers/user";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../../lib/store/modules/user";
import { v4 as uid } from 'uuid';


const Navbar = () => {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const isLogged = useSelector(selectIsLoggedIn)

  const linkItems = [
    {
      path: '/',
      label: 'Home',
      meta: {
        authRequired: false,
        authShow: true,
      }
    },
    {
      path: '/articles/create',
      label: 'New Article',
      meta: {
        authRequired: true,
        authShow: true,
      }
    },
    {
      path: '/user/settings',
      label: 'Settings',
      meta: {
        authRequired: true,
        authShow: true,
      }
    },
    {
      path: '/user/login',
      label: 'Sign in',
      meta: {
        authRequired: false,
        authFalse: false,
      }
    },
    {
      path: '/user/register',
      label: 'Sign up',
      meta: {
        authRequired: false,
        authFalse: false,
      }
    }
  ]

  useEffect(() => {
    setIsLoggedIn(hasToken)
  }, [isLogged])

  function logout(){
    clearStorage();
    setIsLoggedIn(false)
    Router.push("/");
  }

  const linkElements = linkItems
    .filter(item => {
      if(item.meta.authRequired && !isLoggedIn) return false
      if(!item.meta.authShow && isLoggedIn) return false
      return true
    })
    .map(
    item =>
    <li className="nav-item" key={uid()}>
      <Link href={item.path}>
        <a className={classNames('nav-link', item.path === router.pathname ? 'active' : '')}>
          {item.label}
        </a>
      </Link>
    </li>
  )

  if(isLoggedIn){
    linkElements.push(<li className="nav-item" key={uid()}>
      <a className="nav-link" onClick={logout}>Logout</a>
    </li>)
  }

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand" href="/">conduit</a>
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          {linkElements}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar