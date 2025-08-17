import PageNotFound from "@/components/PageNotFound";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

const NotFound = () => {
  return <PageNotFound className="h-screen" />;
};

export default NotFound;
