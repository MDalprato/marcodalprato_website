// Next Link/router prefix routes automatically; use this for plain asset URLs.
export const withBasePath = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
