'use client';
import { useAuth } from "@/lib/hook/useAuth";
import { log } from "next/dist/server/typescript/utils";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const {loggedInUser} = useAuth()

  return (
    <header className="w-full bg-white shadow">
      <section className="w-full flex justify-between mx-auto items-center lg:px-5 xl:px-20">
        {/* Logo Here */}
        <div className="size-20 lg:size-25">
          <Link href="/">
            <Image
              src={"/images/logo-small.svg"}
              width={100}
              height={100}
              alt="logo"
              className="w-full"
            />
          </Link>
        </div>
        {/* Logo Here ends*/}

        <div className="hidden lg:block lg:w-1/2">
          <form>
            <input
              type="search"
              name="search"
              className="w-full px-5 shadow-lg shadow-gray-300 bg-gray-200 rounded-full p-3 border-gray-400"
              placeholder="Search by product name..."
            />
          </form>
        </div>

        <div className="hidden lg:block ">
          <nav>
            <ul className="flex gap-8">
              <li className="text-xl font-semibold text-teal-800 hover:underline hover:cursor-pointer hover:scale-105 transition duration-300">
                <Link href="/cart">Cart</Link>
              </li>

              {loggedInUser ? (
                <>
                  <li className="text-xl font-semibold text-teal-800 hover:underline hover:cursor-pointer hover:scale-105 transition duration-300">
                    <Link href={`/${loggedInUser?.role}`}>
                    {
                      `${loggedInUser.firstName} ${loggedInUser.maidenName} ${loggedInUser.lastName}`.trim()
                    }</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="text-xl font-semibold text-teal-800 hover:underline hover:cursor-pointer hover:scale-105 transition duration-300">
                    <Link href="/register">Register</Link>
                  </li>
                  <li className="text-xl font-semibold text-teal-800 hover:underline hover:cursor-pointer hover:scale-105 transition duration-300">
                    <Link href="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
}