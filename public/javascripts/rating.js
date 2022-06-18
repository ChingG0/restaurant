function getRatings() {
  const data_id = document.querySelectorAll(".col-sm-4");

  const starTotal = 5;

  const resdata = [];

  let starper = [];

  axios
    .get("https://api.jsonbin.io/b/62ad4f04402a5b38022cf772")
    .then((res) => {
      resdata.push(...res.data.results);

      for (let f = 0; f < resdata.length; f++) {
        star = [];

        const starPercentage = (`${resdata[f].rating}` / starTotal) * 100;
        // Set width of stars-inner to percentage
        const starPercentageRounded = `${
          Math.round(starPercentage / 10) * 10
        }%`;
        star += starPercentageRounded;
        starper.push(star);
      }
      for (let i = 0; i < data_id.length; i++) {
        document.querySelector(`.${data_id[i].dataset.target} .stars-inner`).style.width =
          starper[i];
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

document.addEventListener("DOMContentLoaded", getRatings);
