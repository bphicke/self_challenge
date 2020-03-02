import App from "next/app";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      // @ts-ignore
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    // @ts-ignore
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta key="utf-8" charSet="utf-8" />
          <meta
            key="viewport"
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          <meta key="theme-color" name="theme-color" content={"#000000"} />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500,700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <title key="title">Self Frontend Challenge</title>
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
