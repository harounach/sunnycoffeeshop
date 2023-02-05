import Button from "@/components/Button/Button";
import TextField from "@/components/Form/TextField";
import Layout from "@/components/Layout/Layout";
import Link from "next/link";

export default function Register() {
  return (
    <Layout>
      <section className="container mx-auto mt-6 mb-6">
        <h1 className="mb-4 text-center text-2xl">Register</h1>
        <p className="mb-14 text-center text-base text-neutral-500">
          Create your account to customize your shopping experience
        </p>

        <div className="flex justify-center">
          <form className="inline-flex flex-col gap-4 border-2 border-gray-200 px-20 py-4">
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="username" className="text-base">
                Username
              </label>
              <TextField name="username" id="username" placeholder="Username" />
            </div>

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

            <div className="flex flex-col items-start gap-2">
              <label htmlFor="confirm_password" className="text-base">
                Confirm password
              </label>
              <TextField
                name="confirm_password"
                id="confirm_password"
                placeholder="Confirm password"
              />
            </div>

            <Button variant="primary" label="Create Account" type="submit" />
            <div className="flex justify-center gap-4">
              <span>Already have an account?</span>
              <Link href={"/login"} className="font-medium text-yellow-700">
                Login
              </Link>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
