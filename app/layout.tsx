import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mae Sam Corage | Personal Site",
  description: "A personal site built with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <nav className="bg-white border-b border-gray-200 p-4">
          <Link href="/" className="mr-6 font-medium text-gray-900 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="mr-6 font-medium text-gray-900 hover:text-blue-600">
            About
          </Link>
          <Link href="/projects" className="font-medium text-gray-900 hover:text-blue-600">
            Projects
          </Link>
        </nav>
        {children}
        <footer className="mt-auto border-t border-gray-200 p-4 text-center text-gray-500 text-sm">
          &copy; 2026 Mae Sam Corage. Built with Next.js.
        </footer>
      </body>
    </html>
  );
}
