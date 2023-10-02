import React from "react";
import Router from "next/router";
import nProgress from "nprogress";

// Todo: Swap with our own
import "nprogress/nprogress.css";
import Page from "../components/Page";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());

const _app = ({ Component, pageProps }) => {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
};

export default _app;
