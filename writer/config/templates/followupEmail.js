// const followupEmailTemplate = `
//   <html>
//   <head>
//     <title>Follow-up on Your Inquiry</title>
//   </head>
//   <body>
//     <p>Dear Customer,</p>
//     <p>We are following up regarding your recent inquiry.</p>
//     <p>Please let us know if you need any further information.</p>
//     <p>Best regards,</p>
//     <p>Algofolks</p>
//   </body>
//   </html>
// `;

// export default followupEmailTemplate;

const generateFollowupEmailTemplate = (inquiryDetails) => {
  return `
    <html>
    <head>
      <title>Follow-up on Your Inquiry</title>
    </head>
    <body>  
      ${inquiryDetails}
    </body>
    </html>
  `;
};

export default generateFollowupEmailTemplate;
