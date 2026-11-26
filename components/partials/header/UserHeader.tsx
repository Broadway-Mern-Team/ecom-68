'use client'

import { useAuth } from "@/lib/hook/useAuth";
import {Icon} from "@iconify/react"
import Image from "next/image";

export default function UserHeader() {
  // hook 
  const {loggedInUser} = useAuth()

  return (
    <>
      <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b border-slate-200 bg-2hite/80 px-x backdrop-blur sm:px-6">
        {/* Search */}
        <div className="relative w-full max-w-md">
          <Icon
            icon={"fa7-solid:search"}
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
          />
          <input
            type="search"
            placeholder="Enter your search ....."
            className="w-full rounded-full border border-slate-200 bg-slate-100 py-2 pl-9 pr-3 text-sm outline-none transition foucs:border-indigo-400 focus:bg-white focus:ring-1 focus:ring-indigo-400"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="relative flex size-10 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <Icon icon={"fa7-solid:bell"} className="size-5" />
            <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
          </button>
          <div className="h-6 w-px bg-slate-200"></div>
          <button
            type="button"
            className="flex items-center gap-3 rounded-lg p-1 pr-2 transition hover:bg-slate-100"
          >
            <div className="size-8 shrink-0 rounded-full  flex items-center justify-center text-black font-semibold text-sm">
              {loggedInUser?.image ? (
                <Image
                  src={loggedInUser?.image}
                  className={`size-8`}
                  width={32}
                  height={32}
                  alt={loggedInUser.firstName}
                />
              ) : (
                <span className="bg-linear-to-br from-amber-400 to-rose-500 w-full rounded-full size-8 flex items-center justify-center">
                  {`${loggedInUser?.firstName[0]}${loggedInUser?.lastName[0]}`.toUpperCase()}
                </span>
              )}
            </div>
            <p className="truncate text-sm font-semibold ">
              {loggedInUser?.firstName + " " + loggedInUser?.lastName}
            </p>
          </button>
        </div>
      </header>
    </>
  );
}