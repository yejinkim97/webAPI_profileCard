const apiUrl = "https://reqres.in/api";

function load(pageNumber) {
  const url = `${apiUrl}/users?page=${pageNumber}`;
  var result = [];
  var result2 = [];
  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`API returned status code ${res.status}`);
      }

      return res.json();
    })
    .then((results) => {
      result = results.data;

      return fetch(`${apiUrl}/users?page=2`)
        .then((res) => {
          return res.json();
        })
        .then((results) => {
          result2 = results.data;
          return result.concat(result2);
        });
    })
    .catch((err) => {
      console.warn(err);

      // We have no users to process, return an empty array
      return [];
    });
}

module.exports.load = load;
