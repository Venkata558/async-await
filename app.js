//Async-await
function getData(dataId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("data", dataId);
      res("promise-fulfilled");
      //rej("error");
    }, 3000);
  });
}

(async function getAllData() {
  console.log("fetching data 1 ...");
  await getData(1);
  console.log("fetching data 2 ...");
  await getData(2);
  console.log("fetching data 3 ...");
  await getData(3).then((res) => {
    console.log(res);
  });
})();
