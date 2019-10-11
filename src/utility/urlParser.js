export const parseURL = url => {
  console.log('test before -> ', url);
  if (!url) return null;
  console.log('test -> ', url);
  let searchObject = {},
    queries,
    split,
    i;
  // Let the browser do the work
  // Convert query string to object
  queries = url.replace(/^\?/, '').split('&');
  for (i = 0; i < queries.length; i++) {
    split = queries[i].split('=');
    searchObject[split[0]] = split[1];
  }
  return searchObject;
};
