const URL = 'https://randomuser.me/api/?results=20'

function* getData(URL) {
  const response = yield fetch(URL);
  const data = yield response.json();
  return data;
}

async function main() {
  const generator = getData(URL);

  let result = generator.next();
    let response = await result.value;
    result = generator.next(response);
    let data = await result.value;
    console.log(data);
 }

 main();