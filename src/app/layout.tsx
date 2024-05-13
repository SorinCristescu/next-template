import "../styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ApolloWrapper } from "@/providers/apollo-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedesk",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ApolloWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
