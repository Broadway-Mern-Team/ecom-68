// css load 
import { Metadata } from "next";
import "../global.css"
// import Header from "@/components/partials/header/Header";
// import Header from "@/partials/header/Header";
import Header from "@/header/Header";
import Footer from "@/components/partials/footer/Footer";
import { Bricolage_Grotesque, Roboto_Mono } from "next/font/google";
import AuthProvider from "@/lib/providers/AuthProvider";
// import { ReactNode } from "react";


const BrioclageSans = Bricolage_Grotesque({
  variable: "--font-custom-sans",
  // weight: ["200","300","400", "500","600","700","800"],
  subsets: ['latin']
})

const RobotoMono = Roboto_Mono({
  variable: "--font-custom-mono",
  subsets: ["latin"]
})

// SEO 
export const metadata: Metadata = {
  title: "Home page || Ecommerce",
  description: "The E-commerce where you will find every product and services at one click from your mouse."
}

// react component
// export default function HomeLayout(props: Readonly<{ children: ReactNode }>) {
// export default function HomeLayout({children}: Readonly<{ children: ReactNode }>) {

export default function HomeLayout({children}: LayoutProps<'/'>) {
  return (
    <html
      className={`${BrioclageSans.variable} ${RobotoMono.variable} antialiased`}
    >
      <body className="w-full h-screen bg-radial-[at_bottom_right] from-blue-100 via-pink-100 to-violet-100 ">
        <AuthProvider>
          {/************* Header Start ************/}
          <Header></Header>
          {/************* Header Ends ************/}

          {/* <main className="w-full flex flex-col gap-10">{props.children}</main> */}
          <main className="w-full flex flex-col gap-5 pb-5">
            {children}
          </main>

          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

// export default HomeLayout
