import localFont from "next/font/local";
import "./globals.css";
import store from "../../redux/store"
import {StoreProvider} from "../../redux/storeProvider"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-auto`}
      >
        <StoreProvider store = {store}>
        {children}
        </StoreProvider>
      </body>
    </html>
  );
}
