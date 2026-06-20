import type { Metadata } from "next";
import AdminForm from "./admin-form";

export const metadata: Metadata = {
  title: "Panel administracyjny",
  description: "Panel administracyjny MzdrowY",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminForm />;
}
