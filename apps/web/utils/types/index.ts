export interface IFilm {
  id: number | string;
  attributes: {
    title: string;
    director: string;
    plot: string;
    slug?: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    publishedAt: Date | string;
    locale: string;
    released: Date | string;
  };
}