
import Films from "@/components/Films";
import {type Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title:'My next films playlist'
}
const FilmsPage: NextPage = () => {

  return <Films/>;
};

export default FilmsPage;