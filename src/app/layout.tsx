import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "../../providers/ThemeProvider";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import NoteProvider from "../../providers/NoteProvider";

export const metadata: Metadata = {
  title: "NoteIn",
  description: "A simple note-taking app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body>
        <ThemeProvider 
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange

          >
            <NoteProvider>

            <SidebarProvider>
              
            <AppSidebar/>
            <div className="flex flex-col w-full min-h-screen ">
              
            <Header/>
            <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">

            {children}
            </main>
            </div>
            </SidebarProvider>
            <Toaster/>
            </NoteProvider>

          </ThemeProvider>
      </body>
    </html>
  );
}
