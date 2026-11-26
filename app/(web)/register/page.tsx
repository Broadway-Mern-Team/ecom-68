// server side comopnent
import RegsiterForm from "@/components/auth/RegisterForm";
import { DividerWithText } from "@/components/ui/divider/Divider";
import { LinkButton } from "@/components/ui/link/Link";
import { PageTitle } from "@/components/ui/typography/Headings";

export default function RegsiterPage() {
  return (
    <>
      <section className="w-full m-5 flex items-center justify-center">
        <div className="w-5xl bg-white p-5 rounded-md shadow flex flex-col gap-5">
          
          <div className="border-b pb-3 border-gray-100">
            <PageTitle>Register from here!!!</PageTitle>
          </div>

          <RegsiterForm />

          <DividerWithText />

          <LinkButton url="/login">Login</LinkButton>


        </div>
      </section>
    </>
  );
}