import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import Button from "@/components/Button/Button";
import TextField from "@/components/Form/TextField";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async () => {};

  return (
    <Layout>
      <section className="container mx-auto mt-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <Sidebar profile />
          {/* Main Content */}
          <div className="col-span-9">
            <h1 className="mb-4 text-center text-2xl">Manage Account</h1>
            <p className="mb-14 text-center text-base text-neutral-500">
              Customize and manage your account
            </p>

            <div className="mb-6 flex justify-center">
              <form
                className="inline-flex flex-col gap-4 border-2 border-gray-200 px-20 py-4"
                onSubmit={handleSubmit}
              >
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
                  <label htmlFor="old_password" className="text-base">
                    Old password
                  </label>
                  <TextField
                    name="old_password"
                    id="old_password"
                    placeholder="Old password"
                    type="text"
                    value={oldPassword}
                    onChange={setOldPassword}
                  />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="new_password" className="text-base">
                    New Password
                  </label>
                  <TextField
                    name="new_password"
                    id="new_password"
                    placeholder="New Password"
                    type="text"
                    value={newPassword}
                    onChange={setNewPassword}
                  />
                </div>

                <Button
                  variant="primary"
                  label="Update Profile"
                  type="submit"
                />
                <Button variant="danger" label="Delete Account" type="button" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
