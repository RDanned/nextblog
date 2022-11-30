import type { AppProps } from 'next/app'
import Head from "next/head";
import Navbar from "../components/app/Navbar";
import Footer from "../components/app/Footer";
import 'lib/assets/css/Preloader.scss'
import { Provider } from 'react-redux'
import store from "../lib/store"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <link href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css" />
          <link href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic"
                rel="stylesheet" type="text/css" />
          <link rel="stylesheet" href="//demo.productionready.io/main.css" />
        </Head>
        <Navbar />
        <Component {...pageProps} />

        <Footer />
      </Provider>
    </>
  )
}

export default MyApp

//mongodb://YourUsername:YourPasswordHere@127.0.0.1:27017/your-database-name
//https://conduit.productionready.io/api