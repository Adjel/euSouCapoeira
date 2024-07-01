import Home from "@/pages/Home";
import Header from "@/components/header";
import Reinsurance from "@/components/Reinsurance";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";

export default function Page() {
  return (
    <>
      <Header />
      <Home />
      <Reinsurance />
      <Footer />
      <LoginModal />
    </>
  );
}
