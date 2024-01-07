import { Metadata, NextPage } from "next";

import { FilmsData } from "@/components/pages/films";

export const metadata: Metadata = {
  title: "My next films playlist",
};
const FilmsPage: NextPage = () => {
  return <FilmsData />;
};

export default FilmsPage;
