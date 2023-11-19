import type { Metadata } from "next";
import {ToastContainer} from "react-toastify";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { ChildrenType } from "@/types/children";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "../../globals.scss";

const inter = Inter({ subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vodiy perfume",
  description:
    "Vodiy perfume",
};


export default function RootLayout({ children }: ChildrenType) {
  return (
    <html lang="en">
      <body className={jakarta.className} suppressHydrationWarning={true}>
        <ToastContainer autoClose={1000} />
        {children}
        </body>
    </html>
  );
}
