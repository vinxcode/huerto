import Link from "next/link";
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

  const nav = [
    { 
      icon: "icon-[tabler--book]",
      linkName: "Diario",
      route: "./diario"
    },
    { 
      icon: "icon-[tabler--notes]",
      linkName: "Control",
      route: "./control"
    }
  ]

  return (
    <html lang="en">
      <body className="bg-bg-light-grey text-dark-grey font-poppins h-screen">
        <main className="min-h-screen flex flex-col items-center">
          {children}
          <footer className="flex justify-evenly w-full text-sm py-5 fixed bottom-0">
            {
              nav.map(link => (
                <Link href={link.route} className="flex flex-col justify-center items-center gap-2">
                  <span className={`${link.icon} text-2xl`}></span>
                  <p>{link.linkName}</p>
                </Link>
              ))
            }
          </footer>
        </main>

      </body>
    </html>
  );
}
