const extractPath = (url) => {
  const parsedUrl = new URL(url);
  return parsedUrl.pathname;
};

export { extractPath };
