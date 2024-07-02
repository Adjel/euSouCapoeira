import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import Header from "@/components/header/Header";
import "../styles/globals.css";
import Reinsurance from "@/components/Reinsurance";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} />
      <Reinsurance />
      <Footer />
      <LoginModal />
    </QueryClientProvider>
  );
}

export default MyApp;
