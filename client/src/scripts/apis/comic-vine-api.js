import $ from "jquery";

const BASE_URL = "http://comicvine.gamespot.com/api";

export default {
  //Get categories from Spotify API
  getSeries: function () {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `/series?api_key=${process.env.COMIC_VINE_API_KEY}`,
        method: "GET",
        success: (data, status) => {
          console.log("getSeries: ", data);
          resolve(data);
        },
        error: (err) => {
          if (err.status === 401) {
            alert("Comic Vine Key Invalid");
          } else {
            reject(err);
          }
        },
      });
    });
  },
};
