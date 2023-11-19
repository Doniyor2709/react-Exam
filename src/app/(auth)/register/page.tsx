import { Metadata } from "next";

import PublicRegisterForm from "@/components/form/NewRegisterForm";

export const metadata: Metadata = {
  title: "Vodiy perfume | Register",
  description:
    "Vodiy perfume",
};

const RegisterPage = () => {
  return <div>
    <PublicRegisterForm />
  </div>;
};

export default RegisterPage;
