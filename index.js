let grid = document.querySelector(".gridContainer");
let countries = fetch("https://restcountries.eu/rest/v2/all")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
