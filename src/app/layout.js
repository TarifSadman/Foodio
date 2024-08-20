import { Inter } from "next/font/google";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientComponent from "./client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Foodio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ClientComponent />
      </body>
    </html>
  );
}
