export function getQueries() {
  // http://localhost:3000?jwt=aslkjsdlkfjaslfasfjaslalkfdaslfkasdfkasjdfk
  let queryString = window.location.search;
  // ?jwt=aslkjsdlkfjaslfasfjaslalkfdaslfkasdfkasjdfk
  if (queryString) {
    // jwt=aslkjsdlkfjaslfasfjaslalkfdaslfkasdfkasjdfk
    queryString = queryString.substring(1);
    // [jwt=aslkjsdlkfjaslfasfjaslalkfdaslfkasdfkasjdfk]
    let queryParams = queryString.split("&");

    const queryObjs = {};
    for (const query of queryParams) {
      // [jwt,aslkjsdlkfjaslfasfjaslalkfdaslfkasdfkasjdfk]
      const keyValue = query.split("=");
      // jwt
      const key = keyValue[0];
      // aslkjsdlkfjaslfasfjaslalkfdaslfkasdfkasjdfk
      const value = keyValue[1];
      // {jwt: aslkjsdlkfjaslfasfjaslalkfdaslfkasdfkasjdfk}
      queryObjs[key] = value;
    }
    return queryObjs;
  }

  return {};
}
