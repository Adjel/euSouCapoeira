import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";
import Reinsurance from "@/components/Reinsurance";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import MobileNav from "@/components/MobileNav";
const inter = Inter({ subsets: ["latin"] });
import "../styles/globals.css";

export const metadata = {
  title: "Eu sou capoeira",
  description: "Votre market place spécialisé capoeira",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        {children}
        <Reinsurance />
        <Footer />
        <LoginModal />
        <MobileNav />
        <Toaster />
      </body>
    </html>
  );
}
