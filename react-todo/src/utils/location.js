export function getQueries() {
  let queryString = window.location.search;
  if (queryString) {
    queryString = queryString.substring(1);
    let queryParams = queryString.split("&");

    const queryObjs = {};
    for (const query of queryParams) {
      const keyValue = query.split("=");
      const key = keyValue[0];
      const value = keyValue[1];
      queryObjs[key] = value;
    }
    return queryObjs;
  }

  return {};
}
