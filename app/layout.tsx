import type { Metadata } from "next";
import { Inter } from "next/font/google"; // built-in Google font

const inter = Inter({ subsets: ["latin"] }); // safe font

export const metadata: Metadata = {
  title: "Open Lovable",
  description: "Frontend app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
