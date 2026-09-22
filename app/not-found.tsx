import type { Metadata } from "next";
import { NotFoundContent } from "@/components/common/NotFoundContent";

export const metadata: Metadata = {
  title: "Not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundContent />;
}
