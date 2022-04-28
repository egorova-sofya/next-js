import Layout from "../components/Layout/Layout";
import "../styles/globals.scss";
import Image from "next/dist/client/image";
import cake from "./../public/cake.jpg";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Water+Brush&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <Image src={cake} width={500} height={500} placeholder="blur"></Image>
    </Layout>
  );
};

export default MyApp;
