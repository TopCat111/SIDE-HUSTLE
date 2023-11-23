

const cheerio = require("cheerio");
const axios = require("axios");

async function getHeadlines() {
  const response = await axios.get("https://www.bbc.com/news");
  const $ = cheerio.load(response.data);

  const headlines = [];
  $(".media-list__item").each((index, element) => {
    const headline = $(element).find(".media-list__title").text();
    headlines.push(headline);
  });

  return headlines;
}

(async () => {
  const headlines = await getHeadlines();
  console.log(headlines);
})();
