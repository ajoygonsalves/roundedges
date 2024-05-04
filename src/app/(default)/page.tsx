import ContentContainer from "@/components/content-container";
import SideNavbar from "@/components/side-navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col-reverse md:flex-row m-4 gap-4">
      <SideNavbar />
      <ContentContainer />
    </main>
  );
}
