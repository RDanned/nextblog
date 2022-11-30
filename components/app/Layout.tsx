import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {useEffect} from "react";
import {loadUser} from "../../lib/store/modules/user";
import {useAppDispatch} from "../../lib/store/hooks";

function Layout({children}){
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [])

  return (
    <>
      <Head>
        <link href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css" />
        <link href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic"
              rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="//demo.productionready.io/main.css" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout