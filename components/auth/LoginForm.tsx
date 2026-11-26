'use client';

import { useForm} from "react-hook-form"
import { FormLabel } from "../ui/form/FormLabel";
import { Input } from "../ui/form/Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/lib/hook/useAuth";
import { useRouter } from "next/navigation";
import { IUserDetail } from "@/lib/context/AuthContext";


const LoginRule= z.object({
  username: z.string().nonempty("Username is required").nonoptional(),
  password: z.string().nonempty("Password is compulsory").nonoptional()
})

export type Credentials = z.infer<typeof LoginRule>


export default function LoginForm() {

  const {control, handleSubmit, formState: {errors}} = useForm<Credentials>({
    defaultValues: {username: "", password: ""},
    resolver: zodResolver(LoginRule)
  })
  const {login} = useAuth()
  const router = useRouter()


  const loginSubmit = async (data: Credentials) => {
    try {
      const response = await login(data) as unknown as IUserDetail
      router.push("/"+response.role)
    } catch(exception) {
      console.log({exception})
    }
  }

  return (
    <form
      onSubmit={handleSubmit(loginSubmit)}
      className="flex flex-col gap-5 w-full"
    >
      <div className="flex items-center w-full">
        <FormLabel htmlFor="username">Username: </FormLabel>
        <div className="w-2/3 flex flex-col">
          <Input name="username" type="text" control={control} errMsg={errors?.username?.message} />
        </div>
      </div>

      <div className="flex items-center w-full">
        <FormLabel htmlFor="password">Password: </FormLabel>
        <div className="w-2/3 flex flex-col">
          <Input name="password" type="password" control={control} errMsg={errors?.password?.message} />
        </div>
      </div>

      <div className="flex items-center w-full justify-end text-sm gap-1">
        By signing in, you agree with our{" "}
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
          Login
        </button>
      </div>
    </form>
  );
}