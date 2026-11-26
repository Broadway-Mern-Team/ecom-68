'use client'

import Image from "next/image"
import Link from "next/link"
import {Icon} from "@iconify/react"
import {useAuth} from "@/lib/hook/useAuth"

export default function AdminSidebar() {
  const {loggedInUser} = useAuth();
  return (
    <>
      <aside className="hidden lg:flex w-72 shrink-0 bg-gray-900 flex-col border-r text-gray-300 border-white/5 ">
        {/* Branding */}
        <div className="flex h-16 items-center gap-3 border-b border-white/5 px-6">
          {/* <div className="size-9 rounded-xl bg-linear-to-br from-indigo-500 to-violet-500"></div> */}
          <Image
            crossOrigin="anonymous"
            src={"/images/logo-small.png"}
            width={40}
            height={40}
            className={
              "w-9 rounded-xl bg-linear-to-br from-gray-50 to-slate-50"
            }
            alt="logo"
          />
          <span className="font-dispaly text-lg font-semibold tracking-tight text-white">
            Admin CMS
          </span>
        </div>
        {/* Navigation Menu */}
        <nav className="flex-1 space-y-8 overflow-y-scroll px-4 py-6">
          <div>
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Main
            </p>
            <ul className="space-y-1">
              <li>
                <Link
                  href={"/admin"}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors 
                      bg-indigo-500/10 text-white ring-1 ring-inset ring-indigo-500/50
                      hover:bg-indigo-500/5
                    `}
                >
                  <Icon icon={"fa7-solid:home"} className="size-5" />
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href={"/admin/banners"}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors 
                      hover:bg-white/5
                    `}
                >
                  <Icon icon={"fa7-solid:images"} className="size-5" />
                  Banners
                </Link>
              </li>

              <li>
                <Link
                  href={"/admin/categories"}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors 
                      hover:bg-white/5
                    `}
                >
                  <Icon icon={"fa7-solid:sitemap"} className="size-5" />
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  href={"/admin/users"}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors 
                      hover:bg-white/5
                    `}
                >
                  <Icon icon={"fa7-solid:users"} className="size-5" />
                  Users
                </Link>
              </li>

              <li>
                <Link
                  href={"/admin/products"}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors 
                      hover:bg-white/5
                    `}
                >
                  <Icon icon={"fa7-solid:shopping-basket"} className="size-5" />
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href={"/admin/orders"}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors 
                      hover:bg-white/5
                    `}
                >
                  <Icon icon={"fa7-solid:shopping-cart"} className="size-5" />
                  Orders
                </Link>
              </li>

              <li>
                <Link
                  href={"/admin/transactions"}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors 
                      hover:bg-white/5
                    `}
                >
                  <Icon icon={"fa7-solid:usd"} className="size-5" />
                  Billings
                </Link>
              </li>

              <li>
                <Link
                  href={"/admin/content-settings"}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors 
                      hover:bg-white/5
                    `}
                >
                  <Icon icon={"fa7-solid:cogs"} className="size-5" />
                  Content Settings
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* User Card */}
        <div className="border-t border-white/5 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
            {loggedInUser?.image ? (
              <Image
                src={loggedInUser?.image}
                className={`size-8`}
                width={32}
                height={32}
                alt={loggedInUser.firstName}
              />
            ) : (
              <div className="size-10 shrink-0 rounded-full bg-linear-to-br from-amber-400 to-rose-500 flex items-center justify-center text-black font-semibold text-lg">
                {`${loggedInUser?.firstName[0]}${loggedInUser?.lastName[0]}`.toUpperCase()}
              </div>
            )}

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white">
                {`${loggedInUser?.firstName} ${loggedInUser?.lastName}`}
              </p>
              <p className="text-pretty w-full text-xs text-gray-400 line-clamp-2">
                {loggedInUser?.email}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}