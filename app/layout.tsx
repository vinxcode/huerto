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
      <body className="bg-bg-light-grey text-dark-grey font-poppins h-screen">
        <main className="min-h-screen flex flex-col items-center pb-20 md:w-[766px] mx-auto">
          {children}
          <footer className="flex justify-evenly w-full text-sm py-5 fixed bottom-0 bg-bg-light-grey shadow-2xl md:w-[766px]">
            <Navigation />
          </footer>
        </main>
      </body>
    </html>
  );
}
