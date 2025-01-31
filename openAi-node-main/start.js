import getLinks  from "./step_0.js";
import scrapeWebsite  from "./step_1.js";

const startProcess = async () => {
  //let links = await getLinks("https://doubtbuddy.com/");
  
  const links = [
    { url: 'https://doubtbuddy.com/' },
    { url: 'https://doubtbuddy.com/#Features' },
    { url: 'https://doubtbuddy.com/question/' },
    { url: 'https://doubtbuddy.com/#Contact' },
    { url: 'https://doubtbuddy.com/privacy-policy' },
    { url: 'https://doubtbuddy.com/tnc' }
  ]
  
  var allHtml= [];
  for(var i = 0; i < (links || []).length; i++){
    let html= await scrapeWebsite(links[i].url);
    allHtml.push(html);
  }
   
  var all_services = []
  for(var hi = 0; hi < (allHtml || []).length; hi++){
    let services= await getNatureOfBusiness(allHtml[hi].html);
    all_services.push(...services);
  }

  // finalize services to make proposal

  let proposal = await writeBusinessProposal();

  // convert to pdf 

};


startProcess().then((rs) => {
    console.log(rs);
})