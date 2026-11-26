import { SingleProductType } from "@/components/products/HomeProducts";
import ProductDetail from "@/components/products/ProductDetail";
import axiosSvc from "@/lib/services/AxiosService";
import { Icon } from "@iconify/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type ProductDetailProps = {
  params: Promise<{
    productSlug: string
  }>
}

// Public access SEO 
export async function generateMetadata({params}: ProductDetailProps): Promise<Metadata | undefined>{
  try {
    const slug = (await params).productSlug
    const {data} = await axiosSvc.get("/products/"+slug) as unknown as {data: SingleProductType};
    return {
      title: data.title,
      description: data.description,
      images: [data.images[0]],
      openGraph: {
        title: data.title,
        description: data.description,
        images: [data.images[0]],
        type: "article",
      },
      twitter: {
        title: data.title,
        description: data.description,
        images: [data.images[0]],
        card: "summary_large_image"
      },
    } as Metadata;
  } catch(exception) {
    // 
    console.error(exception)
  }
}




export default function ProductDetailPage() {
  return (
     <ProductDetail />
  );
}