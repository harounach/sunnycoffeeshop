import { SyntheticEvent, useState } from "react";
import Button from "@/components/Button/Button";
import TextField from "@/components/Form/TextField";
import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import { registerUser } from "@/lib/userUtils";
import { saveUser } from "@/state/userSlice";
import { useAppDispatch } from "@/state/hooks";

export default function Register() {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const canSubmit = Boolean(name) && Boolean(email) && Boolean(password);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (canSubmit) {
      try {
        const { error, message, data } = await registerUser(
          name,
          email,
          password
        );

        if (error) {
          setErrorMsg(error);
        }

        if (data) {
          setName("");
          setEmail("");
          setPassword("");
          // save user
          dispatch(saveUser(data));
        }
      } catch (err) {
        console.log("Error.................");
        console.log(err);
      }
    }
  };

  return (
    <Layout>
      <section className="container mx-auto mt-6 mb-6">
        <h1 className="mb-4 text-center text-2xl">Register</h1>
        <p className="mb-14 text-center text-base text-neutral-500">
          Create your account to customize your shopping experience
        </p>

        <div className="flex justify-center">
          <form
            className="inline-flex flex-col gap-4 border-2 border-gray-200 px-20 py-4"
            onSubmit={handleSubmit}
          >
            <div className="text-red-500">{errorMsg}</div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="name" className="text-base">
                Name
              </label>
              <TextField
                name="name"
                id="name"
                placeholder="Name"
                type="text"
                value={name}
                onChange={setName}
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label htmlFor="email" className="text-base">
                Email
              </label>
              <TextField
                name="email"
                id="email"
                placeholder="Email"
                type="text"
                value={email}
                onChange={setEmail}
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label htmlFor="password" className="text-base">
                Password
              </label>
              <TextField
                name="password"
                id="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={setPassword}
              />
            </div>

            <Button variant="primary" label="Create Account" type="submit" />
            <div className="flex justify-center gap-4">
              <span>Already have an account?</span>
              <Link href={"/login"} className="font-medium text-yellow-700">
                Login
              </Link>
              <Link
                href={"/login?nxt=/shop"}
                className="font-medium text-yellow-700"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
