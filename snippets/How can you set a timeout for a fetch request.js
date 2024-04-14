// Since the fetch API does not have a built-in timeout option, you can use the AbortController and Promise.race() to implement a timeout. Using Promise.race is a nice trick because it allows you to abort a single request or multiple requests at the same time.

const abortController = new AbortController();
const signal = abortController.signal;

const fetch1 = fetch("https://randomuser.me/api/?results=500", { signal });
const fetch2 = fetch("https://randomuser.me/api/?results=499", { signal });

const timeout = new Promise((_, reject) => {
  const timeoutId = setTimeout(() => {
    reject(new Error("Request timed out"));
    abortController.abort(); // Abort the fetch request
    clearTimeout(timeoutId); // clear the timeout
  }, 5000);
});

Promise.race([fetch1, fetch2, timeout])
  .then((response) => console.log("response race",response))
  .catch((error) => console.error("error race", error));

Promise.any([fetch1, fetch2, timeout])
  .then((response) => console.log("response any",response))
  .catch((error) => console.error("error any",error));

Promise.all([fetch1, fetch2, timeout])
  .then((response) => console.log("response all",response))
  .catch((error) => console.error("error all",error));

Promise.allSettled([fetch1, fetch2, timeout])
  .then((response) => console.log("response allSettled",response))
  .catch((error) => console.error("error allSettled",error));