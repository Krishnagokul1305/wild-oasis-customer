import Header from "./_components/Header";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

const Josefin = Josefin_Sans({
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: { template: "%s | Wild Oasis", default: "Welcome | Cabin Rentals" },
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen ${Josefin.className} bg-primary-950 text-primary-100`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 ">
          <main className="max-w-7xl mx-auto h-full">{children}</main>
        </div>
      </body>
    </html>
  );
}