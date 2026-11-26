import { Icon } from "@iconify/react";

export default function AdminDashboard() {
  return (
    <>
      <section className="w-full flex flex-col gap-5 bg-white p-5 rounded-lg shadow">
        <div className="w-full grid grid-cols-4 gap-4">
          <div className="w-full border border-slate-100 p-5 rounded-lg bg-red-800/50 text-red-900 text-lg font-semibold">
            <div className="flex items-center gap-5">
              <Icon icon={"fa7-solid:users"} className="size-30" />
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-semibold text-red-900">
                  Users
                </span>
                <span className="text-4xl font-semibold text-red-900">
                  1,00,000
                </span>
              </div>
            </div>
          </div>

          <div className="w-full border border-slate-100 p-5 rounded-lg bg-green-800/50 text-green-900 text-lg font-semibold">
            <div className="flex items-center gap-5">
              <Icon icon={"fa7-solid:usd"} className="size-30" />
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-semibold text-green-900">
                  Sales
                </span>
                <span className="text-4xl font-semibold text-green-900">
                  Npr. 50,000
                </span>
              </div>
            </div>
          </div>
          <div className="w-full border border-slate-100 p-5 rounded-lg bg-blue-800/50 text-blue-900 text-lg font-semibold">
            <div className="flex items-center gap-5">
              <Icon icon={"fa7-solid:shopping-cart"} className="size-30" />
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-semibold text-blue-900">
                  Orders
                </span>
                <span className="text-4xl font-semibold text-blue-900">
                  100
                </span>
              </div>
            </div>
          </div>
          <div className="w-full border border-slate-100 p-5 rounded-lg bg-amber-800/50 text-amber-900 text-lg font-semibold">
            <div className="flex items-center gap-5">
              <Icon icon={"fa7-solid:sitemap"} className="size-30" />
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-semibold text-amber-900">
                  Categories
                </span>
                <span className="text-4xl font-semibold text-amber-900">
                  50
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col gap-5 bg-white p-5 rounded-lg shadow">
        {/* Latest order in a table form */}
      </section>
    </>
  );
}