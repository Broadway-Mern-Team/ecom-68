'use client';

import Image from "next/image"
import Link from "next/link"
import {Icon} from "@iconify/react"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SingleProductType } from "./HomeProducts";
import axiosSvc from "@/lib/services/AxiosService"
import { ucFirst } from "@/lib/utilitites/helpers";

export default function ProductDetail() {
  const params = useParams()
  const [detail, setDetail] = useState<SingleProductType>()
  
  const getProductDetail = async() => {
    try {
      const { data } = (await axiosSvc.get("/products/" + params.productSlug)) as unknown as {
        data: SingleProductType;
      };
      setDetail(data);

    } catch(exception) {
      console.error(exception)
    }
  }
  
  useEffect(() => {
    return ()  => {
      getProductDetail()
    }
  }, [])
  
  let rating: number = 0
  if(detail) {
    rating = Math.round(detail.reviews.reduce((rate:number, row) => rate+row.rating, 0) / detail.reviews.length)
  }

  
  return detail ? (
    <>
      <section className="w-7xl mx-auto py-5 flex gap-5">
        <div className="w-full flex flex-col gap-3">
          <div className="w-full">
            <Image
              src={detail?.images[0]}
              className="w-full"
              alt="banner 1"
              width={800}
              height={400}
            />
          </div>

          <div className="w-full grid grid-cols-4 lg:grid-cols-6 gap-2">
            {detail.images &&
              detail.images.map((img: string, i: number) => (
                <div
                  className="hover:shadow hover:scale-103 transition duration-300 hover:cursor-pointer"
                  key={i}
                >
                  <Image
                    src={detail?.images[0]}
                    className="w-full rounded-xs"
                    alt="banner 1"
                    width={200}
                    height={100}
                  />
                </div>
              ))}
          </div>
        </div>

        <div className="w-full bg-white p-5 gap-5 flex flex-col">
          <h1 className="text-2xl font-semibold text-black text-shadow-lg">
            {detail.title}
          </h1>

          <div className="flex gap-3 items-center">
            {
              detail.category ? <Link
              className="p-2 px-5 text-xs bg-teal-100 rounded-full hover:cursor-pointer hover:font-semibold"
              href={"/category/" + detail.category}
            >
              {ucFirst(detail?.category)}
            </Link> : <></>
            }

            {
              detail.brand ? <Link
              className="p-2 px-5 text-xs bg-amber-100 rounded-full hover:cursor-pointer hover:font-semibold"
              href={"/brand/" + detail?.brand}
            >
              {ucFirst(detail.brand)}
            </Link> : <></>
            }

            <div className="flex gap-1 items-center">
              {[1, 2, 3, 4, 5].map((rate: number) => (
                <Icon
                  key={rate}
                  icon={"fa7-solid:star"}
                  className={`${rate > rating ? "text-gray-200" : "text-yellow-500"} size-6`}
                />
              ))}
              <span className="text-xl">({detail.reviews.length})</span>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <p className="text-3xl font-semibold">
              {new Intl.NumberFormat("en", {
                style: "currency",
                currency: "usd",
              }).format(
                detail.price - (detail.price * detail.discountPercentage) / 100,
              )}
            </p>
            <p className="text-2xl font-semibold text-red-800 line-through">
              {new Intl.NumberFormat("en", {
                style: "currency",
                currency: "usd",
              }).format(detail.price)}
            </p>
          </div>

          <div className="flex items-center flex-col gap-3 ">
            <p className="line-clamp-8">
              {detail.description}
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <div className="w-1/3">
              <input
                type="number"
                className="border w-full border-gray-200 bg-gray-50 shadow-lg p-2 px-5"
                placeholder="0"
              />
            </div>
            <div className="w-full grow">
              <button className="w-full bg-amber-800 flex items-center justify-center p-2 rounded-full text-white hover:scale-98 cursor-pointer transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-7xl mx-auto py-5 flex gap-5 bg-white">
        <div className="w-full p-5 gap-5 flex flex-col border-b border-b-gray-300">
          <h1 className="text-2xl font-semibold text-black text-shadow-lg">
            Reviews
          </h1>
        </div>
      </section>
    </>
  ) : (
    <></>
  );
}