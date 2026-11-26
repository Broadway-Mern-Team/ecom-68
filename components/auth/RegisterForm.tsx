'use client';   
// client side component

import {FormLabel} from "@/components/ui/form/FormLabel"
import {FileUpload, Input} from "@/components/ui/form/Input"
import { BaseSyntheticEvent, useState } from "react";
import {Select} from "../ui/form/Select";
import { useForm } from "react-hook-form";

interface IRegisterData {
  fullName: string, 
  username: string, 
  password: string,
  confirmPassword: string, 
  phone: string,
  role: string,
  image?: null | File
}

export default function RegsiterForm() {
  const {handleSubmit, control} = useForm<IRegisterData>({
    defaultValues: {}
  })
  
  // const [registerData, setRegisterData] = useState<IRegisterData>({
  //   fullName: "", username: "", password: "", confirmPassword: "", phone: "", role: "", image: null
  // })

  // const handleInputChange = (e: BaseSyntheticEvent) => {
  //   const {name, value} = e.target 
  //   setRegisterData({
  //     ...registerData,    // fullName
  //     [name]: value     // fullName: "sandesh"
  //   })
  // };

  // const handleFileChange = (e: BaseSyntheticEvent) => {
  //   const {files, name} = e.target;
  //   const fileList = Object.values(files);      //  {{}} => [{}]
  //   setRegisterData({
  //     ...registerData, 
  //     [name]: fileList[0]
  //   }) 
  // }

  const handleRegisterSubmit =(data: IRegisterData) => {
    console.log(data)
  }


  return (
    <form
      onSubmit={handleSubmit(handleRegisterSubmit)}
      className="flex flex-col gap-5 w-full"
    >
      <div className="flex items-center w-full">
        <FormLabel htmlFor="fullName">Full Name: </FormLabel>
        <div className="w-2/3 flex flex-col">
          <Input
            control={control}
            name="fullName"
            placeholder="Enter your Full Name"
          />
        </div>
      </div>

      <div className="flex items-center w-full">
        <FormLabel htmlFor="username">Username(Email):</FormLabel>
        <div className="w-2/3 flex flex-col">
          <Input
            control={control}
            type="email"
            name="username"
            placeholder="Enter your username."
          />
        </div>
      </div>

      <div className="flex items-center w-full">
        <FormLabel htmlFor="password">Password:</FormLabel>
        <div className="w-2/3 flex flex-col">
          <Input
            control={control}
            type="password"
            name="password"
            placeholder="Enter your password."
          />
        </div>
      </div>

      <div className="flex items-center w-full">
        <FormLabel htmlFor="confirmPassword">Re-Password:</FormLabel>
        <div className="w-2/3 flex flex-col">
          <Input
            control={control}
            type="password"
            name="confirmPassword"
            placeholder="Re-Enter your Password."
          />
        </div>
      </div>

      <div className="flex items-center w-full">
        <FormLabel htmlFor="phone">Mobile Number: </FormLabel>
        <div className="w-2/3 flex flex-col">
          <Input
            control={control}
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      <div className="flex items-center w-full">
        <FormLabel htmlFor="role">User Type: </FormLabel>
        <div className="w-2/3 flex flex-col">
          <Select
            name="role"
            control={control}
            options={[
              { label: "Customer/Buyer", value: "customer" },
              { label: "Seller", value: "seller" },
            ]}
          />
        </div>
      </div>

      <div className="flex items-center w-full">
        <FormLabel htmlFor="image">Image: </FormLabel>
        <div className="w-2/3 flex flex-col">
          <FileUpload name="image" control={control} />
        </div>
      </div>

      <div className="flex items-center w-full justify-end text-sm gap-1">
        By registering, you agree with our{" "}
        <a
          className="italic text-blue-700 hover:underline"
          href="/terms-and-conditions"
        >
          {" "}
          Terms & Conditions{" "}
        </a>{" "}
        &{" "}
        <a
          className="italic text-blue-700 hover:underline"
          href="/privacy-policy"
        >
          {" "}
          Privacy Policy
        </a>
        .
      </div>

      <div className="flex w-full justify-between gap-3">
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
          Register
        </button>
      </div>
    </form>
  );
}
