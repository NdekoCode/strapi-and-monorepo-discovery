export const fetchApi = async (url: string | RequestInfo, options?: RequestInit) => {
  let response;
  options = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };
  try {
      response = await fetch(getStrapiUrl(url), options);
      return response;
  } catch (error) {
    console.error((error as Error).message);
  }
};

export const getStrapiUrl = (url: string | RequestInfo = "") =>
  `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;

export const fetcher = async(
  url: string | RequestInfo,
  options?:RequestInit
) => {
  let response;
  if (!options) {
    response = await fetch(url);
  } else {
    response = await fetch(url, options);
  }
  const data = await response.json();
  return data;
};