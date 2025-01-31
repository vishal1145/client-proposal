import getLinks  from "./step_0.js";
import getHtmlFromUrl from "./step_1.js";

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


  var allHtml= [];
  for(var i = 0; i < (links || []).length; i++){
    let html= await getHtmlFromUrl(links[i].url);
    allHtml.push(html);
  }
   console.log(allHtml);

  // console.log("alhtml", allHtml);
  // var all_services = []
  // for(var hi = 0; hi < (allHtml || []).length; hi++){
  //   let services= await getNatureOfBusiness(allHtml[hi].html);
  //   all_services.push(...services);
  // }

  // finalize services to make proposal

  // let proposal = await writeBusinessProposal();

  // convert to pdf 

};


startProcess().then((rs) => {
    console.log(rs);
})