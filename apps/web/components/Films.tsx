'use client';
import { fetcher, getStrapiUrl } from "@/utils/libs/api";
import { IFilm } from "@/utils/types";
import { useState } from "react";
import useSWR from "swr";
import LoadingSpinner from "./LoadingSpinner";
import FilmsList from "./FilmsList";
import NoData from "./NoData";

const Films = () => {
  const filmsData: IFilm[] = [];
  const [pageIndex, setPageIndex] = useState(1);
  const { data, error, isLoading } = useSWR(
    getStrapiUrl(`/films?pagination[page]=${pageIndex}&pagination[pageSize]=3`),
    fetcher,
    {
      fallbackData: filmsData,
    }
  );
  const nextPage = () => {
    setPageIndex((d) => d + 1);
  };
  const previousPage = () => {
    setPageIndex((d) => d - 1);
  };

  let content: React.JSX.Element;
  if (isLoading) {
    content = <LoadingSpinner />;
  } else if (data) {
    content = (
      <>
        <div className="flex flex-wrap gap-3 mt-20 container mx-auto">
          <FilmsList filmsData={data.data} />
        </div>

        <nav className="flex items-center gap-x-1 container mt-5 mx-auto">
          <button
            type="button"
            disabled={pageIndex === 1}
            className="min-h-[38px] disabled:cursor-not-allowed min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            onClick={previousPage}
          >
            <svg
              className="flex-shrink-0 w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span>Previous</span>
          </button>
          <span>
            {pageIndex} of {data.meta.pagination.pageCount}
          </span>
          <button
            disabled={pageIndex === data.meta.pagination.pageCount}
            onClick={nextPage}
            type="button"
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            <span>Next</span>
            <svg
              className="flex-shrink-0 w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </nav>
      </>
    );
  } else {
    content = <NoData />;
  }

  return <>{content}</>;
};

export default Films;