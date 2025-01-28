const { getAllLinks } = require("./1"); 
const { crwaller } = require("./2");

async function main(){
    let links = await getAllLinks("https://doubtbuddy.com/");
    console.log("links", links);
    let data = await crwaller(links);
    console.log("data", data);
}

main();