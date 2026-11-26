import {PageSectionTitle} from "@/components/ui/typography/Headings"
import SingleProductGridItem from "./SingleProductGridItem";
import axiosSvc from "@/lib/services/AxiosService";


export type SingleProductType ={
  availabilityStatus: string
  brand: string,
  category: string,
  description: string, 
  dimensions: {
    depth: number,
    height: number, 
    width: number
  },
  discountPercentage: number,
  id: number
  images: Array<string>,
  minimumOrderQuantity: number,
  price: number,
  rating: number,
  returnPolicy: string,
  reviews: Array<{
    rating: number, 
    comment: string, 
    date: Date, 
    reviewerName:string, 
    reviewerEmail: string
  }>,
  shippingInformation: string,
  sku: string
  stock: number
  tags: Array<string>,
  thumbnail: string
  title: string
  warrantyInformation: string,
  weight: number
}




export default async function HomeProducts() {
  const {data} = await axiosSvc.get("/products", {
    params: {
      limit: 32, skip: 0
    }
  }); 

  console.log(data.products)

  return (
    <>
      <section className="bg-gray-50 py-5 flex flex-col gap-5">
        <div className="w-7xl mx-auto border-b border-b-gray-100 pb-2">
          <PageSectionTitle>Picked For You</PageSectionTitle>
        </div>

        <div className="w-7xl mx-auto ">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {

              data && data.products && data.products.map((row: SingleProductType, i: number) => (
                <SingleProductGridItem key={i} product={row}/>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
}