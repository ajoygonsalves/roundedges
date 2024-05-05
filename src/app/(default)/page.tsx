import ContentContainer from "@/components/content-container";
import SideNavbar from "@/components/side-navbar";
import Image from "next/image";
import RootLayout from "../layout";

export default function Home() {
  return (
    <main className="flex flex-col-reverse gap-4 m-4 md:flex-row">
      <SideNavbar />
      <ContentContainer />
    </main>
  );
}
