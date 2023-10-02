import React from "react";
import Router from "next/router";
import nProgress from "nprogress";

// Todo: Swap with our own
import "nprogress/nprogress.css";
import Page from "../components/Page";
import { ApolloProvider } from "@apollo/client";
import withData from '../lib/withData'

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done)

const _app = ({ Component, pageProps, apollo }) => {
  console.log(apollo)
  return (
    <ApolloProvider client={apollo}>
    <Page>
      <Component {...pageProps} />
    </Page></ApolloProvider>
  );
};

_app.getInitialProps = async function({Component, ctx}) {
let pageProps = {};
if(Component.getInitialProps) {
  pageProps = await Component.getInitialProps(ctx)
}
pageProps.query = ctx.query;
return {pageProps};
}

export default withData(_app);
