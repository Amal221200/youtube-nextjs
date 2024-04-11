import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/providers/AuthProvider";
import cn from "@/lib/cn";
import ProgressBarProvider from "@/components/providers/ProgressBarProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Youtube NextJS",
  description: "Just a simple app implementing the youtube data api",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={cn(inter.className, "overflow-hidden")}>
        <AuthProvider>
          <ProgressBarProvider>
            {children}
          </ProgressBarProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
