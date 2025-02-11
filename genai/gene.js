// const PDFDocument = require('pdfkit');
// const fs = require('fs');
// const markdownIt = require('markdown-it')();

// function generateProposalPDF(website, analysis) {
//     return new Promise((resolve, reject) => {
//         const doc = new PDFDocument();
//         const filename = `Business_Proposal_${website.replace(/https?:\/\//, '')}.pdf`;

//         doc.pipe(fs.createWriteStream(filename));

//         const content = `
//         # Business Proposal for ${website}
        
//         ## **1. Business Overview**
//         ${analysis.split("\n")[0]}
        
//         ## **2. Growth Opportunities**
//         ${analysis.split("\n")[1]}
        
//         ## **3. Digital Transformation Suggestions**
//         ${analysis.split("\n")[2]}
        
//         ## **4. Recommended Technologies**
//         ${analysis.split("\n")[3]}
        
//         ---

//         **Next Steps:**  
//         - Schedule a discovery call.  
//         - Prioritize improvements based on business goals.  
//         - Implement key strategies for growth.  

//         **Best Regards,**  
//         AI-Generated Proposal
//         `;

//         // Convert Markdown to HTML and add to PDF
//         doc.text(markdownIt.render(content), { align: 'left' });

//         doc.end();
//         resolve(filename);
//     });
// }

// module.exports = { generateProposalPDF };
