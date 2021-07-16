export const toDictionary = (
    urlSearchParams: URLSearchParams,
  ) =>
    Object.fromEntries(urlSearchParams.entries());