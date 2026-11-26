import Link from "next/link"
import Image from "next/image"
import { SingleProductType } from "./HomeProducts";


const formatPrice  = (price: number, disInPercent: number) => {
  const discountAmt = price * disInPercent/100

  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "Usd",
  }).format(price - discountAmt);
}

export default function SingleProductGridItem({product}: Readonly<{product: SingleProductType}>) {
  return (
    <>
      <div className="w-full bg-white flex flex-col gap-3 hover:scale-102 transition duration-300 hover:shadow-lg border border-gray-100">
        <Link
          href={"/product/"+product.id}
        >
          <Image
            src={product.thumbnail}
            className="w-full"
            alt="banner 1"
            width={400}
            height={400}
          />
          <div className="px-3 flex flex-col gap-2 py-2">
            <h3 className="font-semibold line-clamp-2 ">
              {product.title}
            </h3>
            <p className="flex items-center justify-between">
              <strong className="text-2xl">{
                new Intl.NumberFormat("en", {style:"currency", currency: "usd"}).format(product.price - product.price * product.discountPercentage / 100)
              }</strong>
              
              <strong className="line-through text-xl text-red-800 font-semibold">
                {formatPrice(product.price, 0)}
              </strong>

            </p>
            <button className="w-full bg-amber-800 text-white p-2 flex items-center justify-center font-semibold rounded-full">
              View Detail
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}