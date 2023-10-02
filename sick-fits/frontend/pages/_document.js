import React from "react";
import Document, { Html, Head, NextScript, Main } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    console.log(styleTags);

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en-CA">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// export const Document = () => {
//   Document.getInitialProps = ({ renderPage }) => {
//     const sheet = new ServerStyleSheet();
//     const page = renderPage(
//       (App) => (props) => sheet.collectStyles(<App {...props} />)
//     );

//     const styleTags = sheet.getStyleElement();

//     return { ...page, styleTags };
//   };

//   return (
//     <Document>
//       <Html lang="en-CA">
//         <Head></Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     </Document>
//   );
// };
