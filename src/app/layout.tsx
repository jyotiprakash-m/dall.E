import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/custom/Sidebar";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import PromptInput from "@/components/custom/PromptInput";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DALL·E App",
  description: "Generate AI images with DALL·E",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { userId } = await auth();

  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col md:flex-row h-screen`}
        >
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1 flex flex-col max-w-full md:max-w-3xl mx-auto overflow-auto p-4">
            {/* Header */}
            <header className="flex justify-between items-center p-4 h-16 border-b border-gray-300 w-full relative">
              <div className="absolute right-4 top-4 flex gap-2">
                <SignedOut>
                  <SignInButton>
                    <Button>Sign In</Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button>Sign Up</Button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </header>

            {/* Content */}
            <div className="flex-1 p-6 overflow-auto w-full">{children}</div>
            {/* Prompt Input */}
            <PromptInput />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
