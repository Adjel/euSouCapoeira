import Page from "@/app/page";
import styles from "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps}>
      <Page />
    </Component>
  );
}

export default MyApp;
