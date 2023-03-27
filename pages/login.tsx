import { SyntheticEvent, useState, useEffect } from "react";
import Button from "@/components/Button/Button";
import TextField from "@/components/Form/TextField";
import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import { loginUser } from "@/lib/userUtils";
import { saveUser } from "@/state/userSlice";
import { useAppDispatch } from "@/state/hooks";
import { useAuthStatus } from "@/hooks/authHook";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAuthStatus();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const canSubmit = Boolean(email) && Boolean(password);

  // Prefetch pages after login
  useEffect(() => {
    const { nxt } = router.query;
    if (nxt) {
      router.prefetch(nxt as string);
    } else {
      router.prefetch("/");
    }
  }, [router]);

  useEffect(() => {
    const { nxt } = router.query;
    if (isLoggedIn) {
      console.log("User is Logged in");
      // Navigate to other pages
      if (nxt) {
        router.replace(nxt as string);
      } else {
        router.replace("/");
      }
    }
  }, [isLoggedIn, router]);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (canSubmit) {
      try {
        const { error, message, data } = await loginUser(email, password);

        if (error) {
          setErrorMsg(error);
        }

        if (data) {
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
      <section className="container mx-auto">
        <h1 className="mb-4 text-center text-2xl">Login</h1>
        <p className="mb-14 text-center text-base text-neutral-500">
          Login to your Account
        </p>

        <div className="flex justify-center">
          <form
            className="inline-flex flex-col gap-4 border-2 border-gray-200 px-20 py-4"
            onSubmit={handleSubmit}
          >
            <div className="text-red-500">{errorMsg}</div>
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
