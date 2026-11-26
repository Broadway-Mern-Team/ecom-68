import { Metadata } from "next";
import {PageTitle} from "@/typography/Headings";
import ProductCreateForm from "@/products/ProductCreateForm";

export const metadata: Metadata = {
  title: "Product Create || Admin Ecommerce"
}
export default function ProductCreatePage() {
  return (
    <>
      <section className="w-full flex gap-5 bg-white p-5 rounded-lg shadow justify-between">
        <PageTitle>Product Create Form</PageTitle>
      </section>

      <section className="w-full flex gap-5 bg-white p-5 rounded-lg shadow justify-between">
        <ProductCreateForm />
      </section>
    </>
  );
}