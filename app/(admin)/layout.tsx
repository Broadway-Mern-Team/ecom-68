import { Metadata } from "next";
import "../global.css"
import { Montserrat, Nunito } from "next/font/google";
import {Toaster} from "sonner"

import AdminSidebar from "@/sidebar/AdminSidebar"
import UserHeader from "@/header/UserHeader";
import UserFooter from "@/footer/UserFooter";
import AuthProvider from "@/lib/providers/AuthProvider";

const MonserratSans = Montserrat({
  variable: "--font-custom-mono",
  subsets: ["latin"]
})

const NunitoSans = Nunito({
  variable: "--font-custom-sans",
  subsets: ['latin']
})

export const metadata:Metadata = {
  title: "Admin Dashboard || Ecommerce Application",
  description: "This is an admin cms Dashboard for ecommerce"
}

export default function AdminLayout({children}: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${MonserratSans.variable} ${NunitoSans.variable} antialiased`}
    >
      <body className="bg-slate-100 font-sans text-slate-900">
        <Toaster richColors closeButton />
        <AuthProvider>
          
          <section className="flex w-full h-screen overflow-hidden">
            <AdminSidebar />

            <main className="flex min-w-0 flex-1 flex-col">
              <UserHeader />

              <section className="flex-1 overflow-y-auto">
                <div className="mx-auto flex flex-col gap-5 w-full p-5 ">
                  {children}
                </div>
              </section>

              <UserFooter />
            </main>
          </section>
        </AuthProvider>
      </body>
    </html>
  );
}