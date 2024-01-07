import React from "react";

import { PageContent } from "@/components/layouts";
import { fetcher, getStrapiUrl } from "@/utils/libs/api";
import { IFilm } from "@/utils/types";

const fetSingleFilm = async (slug: string) => {
  const data = await fetcher(getStrapiUrl(`/films/${slug}`));
  return data?.data;
};
const SingleFilmPage = async ({ params }: { params: { slug: string } }) => {
  const film: IFilm = await fetSingleFilm(params.slug);
  console.log(film);
  return (
    <PageContent className="mt-10 py-10">
      <div className="max-w-2xl">
        {/* Content */}
        <div className="space-y-5 md:space-y-8">
          <div className="space-y-6">
            <h1 className="text-3xl  text-transparent bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text font-bold md:text-5xl dark:text-white">
              {film.attributes.title}
            </h1>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              {film.attributes.plot}
            </p>
          </div>
        </div>
        {/* End Content */}
      </div>
    </PageContent>
  );
};

export default SingleFilmPage;
