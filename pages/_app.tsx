import type { AppProps } from 'next/app'
import 'lib/assets/css/Article.scss'
import 'lib/assets/css/Preloader.scss'
import { Provider } from 'react-redux'
import Layout from "../components/app/Layout";
import store from "../lib/store"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}

export default MyApp

//mongodb://YourUsername:YourPasswordHere@127.0.0.1:27017/your-database-name
//https://conduit.productionready.io/api