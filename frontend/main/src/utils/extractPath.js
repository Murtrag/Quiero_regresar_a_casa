const extractPath = (url) => {
  const parsedUrl = new URL(url);
  return parsedUrl.pathname;
};
const splitPathParams = (url) => {
  const trimmedUrl = url.replace(/^\/|\/$/g, '');
  const params = trimmedUrl.split('/');
  return params;
};

export {
	extractPath,
	splitPathParams
};
