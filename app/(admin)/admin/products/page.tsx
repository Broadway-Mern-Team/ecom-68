import axiosSvc from "@/lib/services/AxiosService";
import { ucFirst } from "@/lib/utilitites/helpers";
import { PageTitle } from "@/typography/Headings";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const LIMIT = 10;

// nextjs, searchParams fixed props for server side component 
// searchParams is a Promise based props 
type Props = {
  searchParams: Promise<{q?: string, page?: string}>
}

export default async function ProductListing({searchParams}: Props) {
  const {q = "", page = "1"} = await searchParams

  // pagination 
  const currentPage = Math.max(1, Number(page) || 1)
  const skip = (currentPage - 1) * LIMIT

  // url setup 
  const endpoint = q ? "/products/search" : "/products";
  const {data: {products, total}} = await axiosSvc.get(endpoint, {
    params: {
      q: q || undefined, 
      limit: LIMIT, 
      skip: skip
    }
  })

  const totalPages = Math.ceil(total/LIMIT)

  const buildUrl = (p: number) => {
    const param = new URLSearchParams()
    if(q) {
      param.set("q", q)
    }
    param.set("page", String(p))
    return `/admin/products?${param.toString()}`
  }

  return (
    <>
      <section className="w-full flex gap-5 bg-white p-5 rounded-lg shadow justify-between">
        <PageTitle>All Product Listing</PageTitle>
        <div className="w-3/5 flex gap-5 items-center justify-end">
          <div className="relative w-full max-w-md">
            <form action={"/admin/products"} method="GET">
              <Icon
                icon={"fa7-solid:search"}
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                name="q"
                defaultValue={q}
                placeholder="Enter your search ....."
                className="w-full rounded-full border border-slate-200 bg-slate-100 py-2 pl-9 pr-3 text-sm outline-none transition foucs:border-indigo-400 focus:bg-white focus:ring-1 focus:ring-indigo-400"
              />
            </form>
          </div>
          <Link
            href={"/admin/products/create"}
            className="w-1/3 flex gap-3 px-5 items-center justify-center py-2 bg-teal-800 rounded-full text-white font-semibold text-lg hover:bg-teal-900 hover:scale-103 transition duration-300"
          >
            <Icon icon={"fa7-solid:plus"} />
            Create Product
          </Link>
        </div>
      </section>

      <section className="w-full flex flex-col gap-5 bg-white p-5 rounded-lg shadow justify-between">
        <table className="w-full ">
          <thead>
            <tr>
              <th className="bg-black text-white p-3 border border-gray-800">
                Title
              </th>
              <th className="bg-black text-white p-3 border border-gray-800">
                Category
              </th>
              <th className="bg-black text-white p-3 border border-gray-800">
                Brand
              </th>
              <th className="bg-black text-white p-3 border border-gray-800">
                Price
              </th>

              <th className="bg-black text-white p-3 border border-gray-800">
                Seller
              </th>
              <th className="bg-black text-white p-3 border border-gray-800">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products && products.length > 0 ? (
              products.map((prod: {thumbnail:string, title: string, category?:string, brand: string, price:number, seller: string}, index: number) => {
                return (
                  <tr key={index}>
                    <td className="bg-white p-3 border border-gray-200">
                      <div className="w-full flex gap-2 items-center">
                        <Image
                          src={prod.thumbnail}
                          width={50}
                          height={40}
                          className="w-13 h-10"
                          alt={prod.title}
                        />
                        {prod.title}
                      </div>
                    </td>
                    <td className="bg-white p-3 border border-gray-200">
                      {prod.category ? ucFirst(prod?.category) : ""}
                    </td>
                    <td className="bg-white p-3 border border-gray-200">
                      {prod.brand ? ucFirst(prod?.brand) : ""}
                    </td>
                    <td className="bg-white p-3 border border-gray-200">
                      {new Intl.NumberFormat("en", {
                        style: "currency",
                        currency: "usd",
                      }).format(prod.price)}
                    </td>
                    <td className="bg-white p-3 border border-gray-200">
                      {prod.seller}
                    </td>
                    <td className="bg-white p-3 border border-gray-200">
                      Edit / Delete
                    </td>
                  </tr>
                );
              })
            ) : (
              <>
                <tr>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                </tr>
                <tr>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                </tr>
                <tr>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                </tr>
                <tr>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                </tr>
                <tr>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                </tr>
                <tr>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                </tr>
                <tr>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                </tr>
                <tr>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                </tr>
                <tr>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                </tr>
                <tr>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                  <td className="bg-white p-3 border border-gray-200">
                    <p className="w-full h-2 rounded-full bg-gray-300 animate-pulse"></p>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>

        {totalPages > 1 && (
          <div className="w-full flex justify-end">
            <ul className="flex gap-3 w-full justify-end items-center">
              <li className="size-5 bg-gray-200 rounded-full flex items-center justify-center shadow hover:cursor-pointer hover:bg-gray-100 hover:scale-103 transition duration-300">
                <Link
                  href={buildUrl(Math.max(1, currentPage - 1))}
                  className="text-xs font-semibold text-gray-500"
                >
                  <Icon icon={"fa7-solid:chevron-left"} />
                </Link>
              </li>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (p: number) => (
                  <li
                    key={p}
                    className={`size-5 rounded-full flex items-center justify-center shadow hover:cursor-pointer hover:scale-103 transition duration-300 
                      ${
                        p === currentPage
                          ? " bg-teal-700 text-white hover:bg-teal-600 "
                          : "bg-gray-200 text-gray-400 hover:bg-gray-100"
                      }
                      `}
                  >
                    <Link href={buildUrl(p)} className="text-xs font-semibold">
                      <span>{p}</span>
                    </Link>
                  </li>
                ),
              )}

              <li className="size-5 bg-gray-200 rounded-full flex items-center justify-center shadow hover:cursor-pointer hover:bg-gray-100 hover:scale-103 transition duration-300">
                <Link
                  href={buildUrl(Math.min(totalPages, currentPage + 1))}
                  className="text-xs font-semibold text-gray-500"
                >
                  <Icon icon={"fa7-solid:chevron-right"} />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </section>
    </>
  );
}
