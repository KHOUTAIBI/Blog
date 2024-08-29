import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Providers from "@/components/Providers";
import Feed from "@/components/Feed";


export const metadata = {
  title: "Blog",
  description: "Blog app for Iliass",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-600" >
        <Providers>
          <div className="">
              <div className=""/>
          </div>
            <main className="">
                <Nav/>
                {children}
            </main>
          </Providers>
      </body>
    </html>
  );
}
