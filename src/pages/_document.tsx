import Document, { Html, Head, Main, NextScript } from "next/document";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

class myDocument extends Document {
  render() {
    return (
      <Html data-theme="myTheme">
        <Head>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9a9a9a" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#000000" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          {/** 
           * Pass the SVG in this url:
           * https://yoksel.github.io/url-encoder/
           * 
           * Then put the encoded version after data:image/svg+xml, => this will make the favicon a crisp SVG
           */}
          <link
            rel="icon"
            type="image/svg+xml"
            href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 156 161.2'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:url(%23linear-gradient);%7D.cls-2%7Bfill:%23fff;%7D%3C/style%3E%3ClinearGradient id='linear-gradient' x1='-95.18' y1='205.45' x2='181.24' y2='6.17' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%233d2052'/%3E%3Cstop offset='1' stop-color='%233a2884'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ctitle%3Efavicon%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Crect class='cls-1' width='156' height='161.2' rx='32.78'/%3E%3Cpath class='cls-2' d='M98.3,138.82a135.6,135.6,0,0,1-14.45-10.27q-6.55-5.24-11.19-8.44a53,53,0,0,0-10.08-5.43,28.78,28.78,0,0,0-11-2.23,27.85,27.85,0,0,0-3,.13L68,21.91a28.5,28.5,0,0,0-13.54,10.8Q49.7,40,49.7,50.44c0,3.22.3,5.47.91,6.73a11.89,11.89,0,0,1,.92,2.16q-7.06,0-10.53-2.94t-3.47-9.75q0-8.37,6.87-16.29A50.94,50.94,0,0,1,62,17.53a51.2,51.2,0,0,1,21.45-4.91c1.22,0,3,.09,5.24.27L68.54,106.83a43.12,43.12,0,0,1,7.52,2.68q3.85,1.77,9.36,4.78a151.31,151.31,0,0,0,14.52,7,33.42,33.42,0,0,0,12.56,2.42,28.57,28.57,0,0,0,11-2.1q-1,9.56-4.64,15t-9,5.49A22.72,22.72,0,0,1,98.3,138.82Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default myDocument;
