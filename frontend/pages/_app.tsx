import Layout from "../Components/Layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
