import { GeistSans } from "geist/font/sans";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-light-grey text-dark-grey">
        <main className="min-h-screen flex flex-col items-center">
          {children}
          <footer className="flex justify-evenly w-full text-xl py-5">
            <a href="#">
              <span className="icon-[tabler--book] text-2xl"></span>
              <p>Diario</p>
            </a>

            <a href="#">
              <span className="icon-[tabler--book] text-2xl"></span>
              <p>Control</p>
            </a>

          </footer>
        </main>

      </body>
    </html>
  );
}
