import WithAuth from "@/components/app/WithAuth";
import { PageContent } from "@/components/layouts";

const Home = () => {
  return (
    <WithAuth>
      <PageContent>
        <h1 className="text-3xl font-bold text-gray-800 my-2">Hello</h1>
      </PageContent>
    </WithAuth>
  );
};

export default Home;
