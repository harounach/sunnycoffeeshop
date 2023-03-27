import { useState, SyntheticEvent } from "react";
import AdminLayout from "@/components/Layout/AdminLayout";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import Button from "@/components/Button/Button";
import TextField from "@/components/Form/TextField";
import { useAppSelector, useAppDispatch } from "@/state/hooks";
import { selectUser } from "@/state/userSlice";
import { saveUser } from "@/state/userSlice";
import { useAuthNavigate } from "@/hooks/authHook";
import {
  updateUserName,
  updateUserEmail,
  updateUserPassword,
} from "@/lib/userUtils";
import User from "@/types/User";

export default function AdminSettings() {
  const user = useAppSelector(selectUser) as User;
  const dispatch = useAppDispatch();

  // Check if user is logged in
  useAuthNavigate();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmitName = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (name) {
      try {
        const { message, error, data } = await updateUserName(user, name);
        console.log(message);
        console.log(error);
        if (data) {
          // save user
          dispatch(saveUser(data));
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleSubmitEmail = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (email) {
      try {
        const { message, error, data } = await updateUserEmail(user, email);
        console.log(message);
        console.log(error);
        if (data) {
          // save user
          dispatch(saveUser(data));
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleSubmitPassword = async (e: SyntheticEvent) => {
    e.preventDefault();
    setPasswordError("");

    if (oldPassword && newPassword) {
      try {
        const { message, error, data } = await updateUserPassword(
          user,
          oldPassword,
          newPassword
        );
        console.log(message);
        console.log(error);
        if (error) {
          setPasswordError(error);
        }
        if (data) {
          // save user
          dispatch(saveUser(data));
          setOldPassword("");
          setNewPassword("");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <AdminLayout>
      <section className="container mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <AdminSidebar settings />
          {/* Main Content */}
          <div className="col-span-12 md:col-span-9">
            <h1 className="mb-4 text-center text-2xl">Manage Account</h1>
            <p className="mb-14 text-center text-base text-neutral-500">
              Customize and manage your account
            </p>

            <div className="mb-6 flex flex-col items-center gap-6">
              <form
                className="flex flex-col items-start gap-2"
                onSubmit={handleSubmitName}
              >
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
                <Button variant="primary" label="Change Name" type="submit" />
              </form>

              <form
                className="flex flex-col items-start gap-2"
                onSubmit={handleSubmitEmail}
              >
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
                <Button variant="primary" label="Change Email" type="submit" />
              </form>

              <form
                className="flex flex-col items-start gap-2"
                onSubmit={handleSubmitPassword}
              >
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="old_password" className="text-base">
                    Old password
                  </label>
                  <TextField
                    name="old_password"
                    id="old_password"
                    placeholder="Old password"
                    type="password"
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
                    type="password"
                    value={newPassword}
                    onChange={setNewPassword}
                  />
                </div>
                <p className="text-red-500">{passwordError}</p>
                <Button
                  variant="primary"
                  label="Change Password"
                  type="submit"
                />
              </form>
              <div>
                <Button variant="danger" label="Delete Account" type="button" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}
