import { Metadata } from "next";
// import SingleProductGridItem from "@/products/SingleProductGridItem"
// dynamic SEO
// export const generateMetadata = (): Metadata => {
//   // api call for meta data
//   return {
//     title: "All Products || Ecom App"
//   }
// }

export const metadata:Metadata = {
  title: "All Product List || Ecom App",
  description: "A listing page for all products from the application with trending and latest in the categories."
}

export default function ProductListingPage() {
  return (
    <>
      <section className="w-7xl mx-auto py-5 flex flex-col gap-5">
        <div className="flex w-full pb-3 border-b border-b-gray-300">
          <h1 className="text-4xl font-semibold text-shadow-lg">
            All Products
          </h1>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          Feature Comming Soon...........
        </div>
      </section>
    </>
  );
}