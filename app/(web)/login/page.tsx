import { PageTitle } from "@/components/ui/typography/Headings";
import LoginForm from "@/components/auth/LoginForm"
import { DividerWithText } from "@/components/ui/divider/Divider";
import { LinkButton } from "@/components/ui/link/Link";

export default function LoginPage() {
  return (
    <>
      <section className="w-full m-5 flex items-center justify-center">
        <div className="w-4xl bg-white p-5 rounded-md shadow flex flex-col gap-5">
          <div className="border-b pb-3 border-gray-100">
            <PageTitle>Sign in from here</PageTitle>
          </div>

          <LoginForm />

          <DividerWithText></DividerWithText>

          <LinkButton url="/register">Register</LinkButton>
        </div>
      </section>
    </>
  );
}