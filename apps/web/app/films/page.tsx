import { Metadata, NextPage } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "My next films playlist",
};
const DymanicFIlmsData = dynamic(
  () => import("@/components/FilmsData").then((mod) => mod),
  {}
);
const FilmsPage: NextPage = () => {
  return <DymanicFIlmsData />;
};

export default FilmsPage;
