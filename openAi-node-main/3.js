// import getLinks  from "./1.js";
import scrapeWebsite from "./2.js";

// let links = await getLinks("https://doubtbuddy.com/");
// links = JSON.parse(links);

// const allLink = links?.links;

// console.log(allLink);

const allLink = [
  { url: 'https://doubtbuddy.com/' },
  { url: 'https://doubtbuddy.com/#Features' },
  { url: 'https://doubtbuddy.com/question/' },
  { url: 'https://doubtbuddy.com/#Contact' },
  { url: 'https://doubtbuddy.com/privacy-policy' },
  { url: 'https://doubtbuddy.com/tnc' }
]

async function getAllhtml (){
  let allHtml = [];

  for(let i=0; i<allLink.length; i++){
    let html = await scrapeWebsite(allLink[i].url);
     allHtml.push(html);
  }
  
  allHtml = allHtml.join("/n");
  console.log("allHtml", allHtml);

  return allHtml;
}


export default getAllhtml;
 
