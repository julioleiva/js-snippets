// How does it work?

// / url https://qianlongo.github.io/vue-demos/dist/index.html?name=fatfish&age=100#/home
// // 1. First get the search parameter
// const search = window.location.search; // ?name=fatfish&age=100
// // 2. Remove the beginning "?" or ending "&".
// search.replace(/(^\?)|(&$)/g, "");
// // ?name=fatfish&age=100 => name=fatfish&age=100
// // 3. Use reduce to collect parameters
// // ...


const parseQuery = () => {
  const search = window.location.search;
  return search
    .replace(/(^\?)|(&$)/g, "")
    .split("&")
    .reduce((query, it) => {
      const [key, value] = it.split("=");
      query[key] = decodeURIComponent(value);
      return query;
    }, {});
};

parseQuery()