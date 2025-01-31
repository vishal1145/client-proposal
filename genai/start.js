import getLinks  from "./step_0.js";
import getHtmlFromUrl from "./step_1.js";
import {getNatureOfBusiness} from "./step_2.js";

const startProcess = async () => {
  // let links = await getLinks("https://doubtbuddy.com/");
    
  const links = [
    { url: 'https://doubtbuddy.com/', description: 'Home Page' },
    {
      url: 'https://doubtbuddy.com/#Features',
      description: 'Features Page'
    },
    {
      url: 'https://doubtbuddy.com/question/',
      description: 'Question Page'
    },
    {
      url: 'https://doubtbuddy.com/#Contact',
      description: 'Contact Page'
    },
    {
      url: 'https://doubtbuddy.com/privacy-policy',
      description: 'Privacy Policy Page'
    },
    {
      url: 'https://doubtbuddy.com/tnc',
      description: 'Terms and Conditions Page'
    }
  ]

  for(var i = 0; i < (links || []).length; i++){
    let html = await getHtmlFromUrl(links[i].url);
    links[i].html = html;
  }

  for(var i = 0; i < (links || []).length; i++){
    let services= await getNatureOfBusiness(links[i].html);
    links[i].services = services;
  }

  // finalize services to make proposal

  // let proposal = await writeBusinessProposal();

  // convert to pdf 

};


startProcess().then((rs) => {
    console.log(rs);
})