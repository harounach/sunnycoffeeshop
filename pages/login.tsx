import Button from "@/components/Button/Button";
import TextField from "@/components/Form/TextField";
import Layout from "@/components/Layout/Layout";
import Link from "next/link";

export default function Login() {
  return (
    <Layout>
      <section className="container mx-auto mt-6 mb-6">
        <h1 className="mb-4 text-center text-2xl">Login</h1>
        <p className="mb-14 text-center text-base text-neutral-500">
          Login to your Account
        </p>

        <div className="flex justify-center">
          <form className="inline-flex flex-col gap-4 border-2 border-gray-200 px-20 py-4">
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="email" className="text-base">
                Email
              </label>
              <TextField name="email" id="email" placeholder="Email" />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label htmlFor="password" className="text-base">
                Password
              </label>
              <TextField name="password" id="password" placeholder="Password" />
            </div>

            <Button variant="primary" label="Login" type="submit" />
            <div className="flex justify-center gap-4">
              <span>Don’t have an account?</span>
              <Link href={"/register"} className="font-medium text-yellow-700">
                Register
              </Link>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
