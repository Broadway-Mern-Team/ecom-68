import axiosSvc from "@/lib/services/AxiosService";
import { PageTitle } from "@/typography/Headings";

export default async function CategoryListing() {

  // url setup
  const {data}= await axiosSvc.get("/products/categories");
  return (
    <>
      <section className="w-full flex gap-5 bg-white p-5 rounded-lg shadow justify-between">
        <PageTitle>All Categories Listing</PageTitle>
        <div className="w-3/5 flex gap-5 items-center justify-end">
          <div className="relative w-full max-w-md">
            {/* <form action={"/admin/categories"} method="GET">
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
            </form> */}
          </div>
          {/* <Link
            href={"/admin/categories/create"}
            className="w-1/3 flex gap-3 px-5 items-center justify-center py-2 bg-teal-800 rounded-full text-white font-semibold text-lg hover:bg-teal-900 hover:scale-103 transition duration-300"
          >
            <Icon icon={"fa7-solid:plus"} />
            Create Product
          </Link> */}
        </div>
      </section>

      <section className="w-full flex flex-col gap-5 bg-white p-5 rounded-lg shadow justify-between">
        <table className="w-full ">
          <thead>
            <tr>
              <th className="bg-black text-white p-3 border border-gray-800">
                Name
              </th>
              <th className="bg-black text-white p-3 border border-gray-800">
                Slug
              </th>
              <th className="bg-black text-white p-3 border border-gray-800">
                URL
              </th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((cat: {name: string, slug:string, url: string}, index: number) => {
                return (
                  <tr key={index}>
                    <td className="bg-white p-3 border border-gray-200">
                      {cat.name}
                    </td>
                    <td className="bg-white p-3 border border-gray-200">
                      {cat.slug}
                    </td>
                    <td className="bg-white p-3 border border-gray-200">
                      {cat.url}
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
                </tr>
              </>
            )}
          </tbody>
        </table>

      </section>
    </>
  );
}
