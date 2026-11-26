'use client'
import { FormLabel } from "@/form/FormLabel";
import { Input, SelectOption, SingleOption, TextEditor } from "@/form/Input";
import axiosSvc from "@/lib/services/AxiosService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";


export const ProductSchema = z.object({
  title: z.string().min(3).max(150),
  description: z.string().min(50).max(2500),
  price: z.string().regex(/[\d]/).nonoptional(),
  category: z.string().nonempty().nonoptional(),
  discountPercentage: z.string().regex(/[\d]/).optional(),
  brand: z.string().nonempty().nonoptional(),
  warrantyInformation: z.string().nonempty().nonoptional(),
  shippingInformation: z.string().nonempty().nonoptional(),
  stock: z.string().regex(/[\d]/).nonoptional(),
  sku: z.string().nonempty().nonoptional(),
});

export type ProductCreateType = z.infer<typeof ProductSchema>

export default function ProductCreateForm() {
  const {control, handleSubmit, formState: {errors}} = useForm<ProductCreateType>({
    defaultValues: {title: "", description: "", category: "", brand: "", warrantyInformation: "", shippingInformation: "", sku: ""},
    resolver: zodResolver(ProductSchema)
  })
  const [categories, setCategories] = useState<Array<SingleOption>>([])
  const router = useRouter()


  const getAllCategories = async () => {
    try {
      const { data } = await axiosSvc.get("/products/categories");
      const tempCat: Array<SingleOption> = []
      data.map((row: {name: string, slug: string}) => {
        tempCat.push({label: row.name, value: row.slug})
      })
      setCategories(tempCat)
    } catch {
      //
      toast.error("Error fetching all the categories")
    }
  }

  const submitProductForm = async (data: ProductCreateType) => {
    try {
      await axiosSvc.post("/products/add", data)
      toast.success("Product Created Successfully")
      router.push("/admin/products")
    } catch(exception) {
      console.error({exception})
      toast.error("Error while creating a product")
    }
  }

  useEffect(() => {
    return () => {
      getAllCategories()
    }
  },[])
  return (
    <form
      onSubmit={handleSubmit(submitProductForm)}
      className="flex flex-col w-full gap-3"
    >
      <div className="flex w-full items-center">
        <FormLabel htmlFor="title">Product Name: </FormLabel>
        <div className="w-2/3 flex flex-col">
          <Input
            name="title"
            control={control}
            errMsg={errors?.title?.message}
          />
        </div>
      </div>
      <div className="flex w-full items-center">
        <FormLabel htmlFor="description">Product Description: </FormLabel>
        <div className="w-2/3 flex flex-col">
          <TextEditor
            name="description"
            control={control}
            errMsg={errors?.description?.message}
          />
        </div>
      </div>
      <div className="flex w-full items-center">
        <FormLabel htmlFor="price">Product Price(in Npr.): </FormLabel>
        <div className="w-2/3 flex flex-col">
          <Input
            name="price"
            type="number"
            errMsg={errors?.price?.message}
            control={control}
          />
        </div>
      </div>
      <div className="flex w-full items-center">
        <FormLabel htmlFor="category">Category: </FormLabel>
        <div className="w-2/3 flex flex-col">
          <SelectOption
            name="category"
            control={control}
            errMsg={errors?.category?.message}
            options={categories}
          />
        </div>
      </div>
      <div className="flex w-full items-center">
        <FormLabel htmlFor="discountPercentage">
          Product Discount(in %):{" "}
        </FormLabel>
        <div className="w-2/3 flex flex-col">
          <Input
            name="discountPercentage"
            type="number"
            errMsg={errors?.discountPercentage?.message}
            control={control}
          />
        </div>
      </div>
      <div className="flex w-full items-center">
        <FormLabel htmlFor="brand">Brand: </FormLabel>
        <div className="w-2/3 flex flex-col">
          <Input
            name="brand"
            control={control}
            errMsg={errors?.brand?.message}
          />
        </div>
      </div>
      <div className="flex w-full items-center">
        <FormLabel htmlFor="warrantyInformation">
          Warrenty Information:{" "}
        </FormLabel>
        <div className="w-2/3 flex flex-col">
          <Input
            name="warrantyInformation"
            control={control}
            errMsg={errors?.warrantyInformation?.message}
          />
        </div>
      </div>
      <div className="flex w-full items-center">
        <FormLabel htmlFor="shippingInformation">
          Shopping Information:{" "}
        </FormLabel>
        <div className="w-2/3 flex flex-col">
          <Input
            name="shippingInformation"
            control={control}
            errMsg={errors?.shippingInformation?.message}
          />
        </div>
      </div>
      <div className="flex w-full items-center">
        <FormLabel htmlFor="stock">Available Stock: </FormLabel>
        <div className="w-2/3 flex flex-col">
          <Input
            name="stock"
            type="number"
            errMsg={errors?.stock?.message}
            control={control}
          />
        </div>
      </div>
      <div className="flex w-full items-center">
        <FormLabel htmlFor="sku">SKU: </FormLabel>
        <div className="w-2/3 flex flex-col">
          <Input name="sku" errMsg={errors?.sku?.message} control={control} />
        </div>
      </div>

      <div className="flex w-full items-center justify-end">
        <div className="w-2/3 flex gap-3 justify-end">
          <button
            className="w-full items-center justify-center flex cursor-pointer text-lg font-semibold hover:scale-103 transition duration-300 p-2 rounded-md bg-red-800 text-white"
            type="reset"
          >
            Reset
          </button>
          <button
            className="w-full items-center justify-center flex cursor-pointer text-lg font-semibold hover:scale-103 transition duration-300 p-2 rounded-md bg-teal-800 text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}