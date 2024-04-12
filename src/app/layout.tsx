import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/providers/AuthProvider";
import cn from "@/lib/cn";
import ProgressBarProvider from "@/components/providers/ProgressBarProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "overflow-hidden")}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem
            disableTransitionOnChange>
            <ProgressBarProvider>
              {children}
            </ProgressBarProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
