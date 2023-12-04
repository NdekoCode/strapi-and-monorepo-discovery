import { fetcher, getStrapiUrl } from "@/utils/libs/api";
import { IFilm } from "@/utils/types";
import React from "react";

const fetSingleFilm = async (slug: string) => {
  const data = await fetcher(getStrapiUrl(`/films/${slug}`));
  return data?.data;
};
const SingleFilmPage = async ({ params }: { params: { slug: string } }) => {
  const film: IFilm = await fetSingleFilm(params.slug);
  console.log(film);
  return (
    <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
      <div className="max-w-2xl">
        {/* Content */}
        <div className="space-y-5 md:space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
              {film.attributes.title}
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              {film.attributes.plot}
            </p>
          </div>
        </div>
        {/* End Content */}
      </div>
    </div>
  );
};

export default SingleFilmPage;
