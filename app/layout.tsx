import "./globals.css";
import Navigation from '@/app/Navigation'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Huerto en Casa",
  description: "Aplicación para gestionar tu huerto casero",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-bg-light-grey text-dark-grey font-poppins h-screen">
        <main className="min-h-screen flex flex-col items-center pb-20 md:w-[766px] mx-auto">
          {children}
          <footer className="w-full text-sm fixed bottom-0 bg-bg-light-grey shadow-2xl md:w-[766px]">
            <Navigation />
          </footer>
        </main>
      </body>
    </html>
  );
}
