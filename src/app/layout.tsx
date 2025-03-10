import DynamicTitle from "./_components/dynamicTitle";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>TLBG - </title>
      <body
        className={`antialiased flex flex-col min-h-screen`}
      > 
      <Header/>
      <DynamicTitle />
        <main className="flex-grow">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
