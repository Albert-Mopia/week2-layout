import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";

export const metadata = {
  title: "Agave Shooters",
  description: "Week 3 Layout Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
          <div className="flex">
            <Sidebar />

            <main className="flex-1 p-8">
            {children}
            </main>
          </div>
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

import { Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

