import { auth } from "@/auth";

export default async function Manager() {
  const user = await auth();

  return (
    <div>
      <h1>Manager page</h1>
      <p>Name: {user?.user.createdAt}</p>
      <p>Role: {user?.user.role}</p>
      <p>ID: {user?.user._id}</p>
    </div>
  );
}
