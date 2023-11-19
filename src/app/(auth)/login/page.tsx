import { Metadata } from "next";



import "./style.scss";
import PublicLoginForm from "@/components/form/NewLoginForm";

export const metadata: Metadata = {
  title: "Vodiy perfume | Login",
  description:
    "Vodiy perfume",
};

const LoginPage = () => {
  return <div>
    <PublicLoginForm />
  </div>;
};

export default LoginPage;
