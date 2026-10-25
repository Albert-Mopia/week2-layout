import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "Agave Shooters",
  description: "Week 2 Layout Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main className="min-h-screen flex items-center justify-center">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

import { Imperial_Script } from "next/font/google";

const imperialScript = Imperial_Script({
  weight: "400",
  subsets: ["latin"],
});