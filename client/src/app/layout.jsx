import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from 'react-hot-toast'
import "../styles/globals.css";
import { TransactionProvider } from "@/components/TransactionContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FinSight",
  description: "Your personal finance tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gray-200`}>
        <Toaster position="top-center" reverseOrder={false} />
         <TransactionProvider>
           {children}
        </TransactionProvider> 
      </body>
    </html>
  );
}
