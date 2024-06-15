import Page from "@/app/page";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps}>
      <Page />
    </Component>
  );
}

export default MyApp;
