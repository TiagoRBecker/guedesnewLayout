"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ChakraUI } from "./providers";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";



export default  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <SessionProvider>
    <html lang="pt-br">
    
      <body
        
      >
          <Header/>
        <ChakraUI>{children}</ChakraUI>
       <ToastContainer/>
       <Footer/>
      </body>
     
    </html>
    </SessionProvider>
  );
}
