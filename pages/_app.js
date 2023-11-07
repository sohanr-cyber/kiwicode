import "../styles/globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import ProgressBar from "react-scroll-progress-bar"; //Add this line
import NextNProgress from "nextjs-progressbar";
import ReactGA from "react-ga";
import { useEffect } from "react";
import Layout from "../components/Layout";
ReactGA.initialize("347755089");

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <NextNProgress height={2} />
      <Provider store={store}>
        <ProgressBar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
