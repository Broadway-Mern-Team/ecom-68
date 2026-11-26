import axiosSvc from "@/lib/services/AxiosService";
import {PageSectionTitle} from "@/typography/Headings"
import Link from "next/link";

export type CategoryType = {
  _id?: string, 
  name: string, 
  slug: string
}
export const getAllCategories = async () => {
  try {
    const {data} = await axiosSvc.get("/products/categories");
    return data
  } catch(exception) {
    // 
    console.log({exception})
  }
}

export default async function CategoryBanner() {
  let data;
  try {
    data = await getAllCategories()
  } catch {
    // toast
  }

  return (
    <>
      <div className="w-1/4 p-3 flex flex-col gap-5">
        <div className="w-full border-b border-b-gray-300">
          <PageSectionTitle>All Categories</PageSectionTitle>
        </div>
        <nav className="h-60 overflow-y-scroll overflow-x-hidden">
          <ul className="w-full flex flex-col gap-2 font-mono">
            {data &&
              data.map((row: CategoryType, i: number) => (
                <li key={i} className="px-2 bg-gray-50 shadow font-semibold text-gray-800 text-shadow-lg hover:underline hover:scale-102 transition duration-300 hover:cursor-pointer tracking-tighter">
                  <Link href={'/category/'+row.slug} className="w-full flex justify-between items-center">
                    {row.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </>
  );
}