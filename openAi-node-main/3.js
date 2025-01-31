import { ChatGroq } from "@langchain/groq";

const model = new ChatGroq({
  model: "mixtral-8x7b-32768",
  temperature: 0,
});

const links = [
  "https://doubtbuddy.com/",
  "https://doubtbuddy.com/#Features",
  "https://doubtbuddy.com/question/",
  "https://blog.doubtbuddy.com/",
  "https://doubtbuddy.com/#Contact",
  "https://play.google.com/store/apps/details?id=com.doubtbuddy.student&pli=1",
  "https://doubtbuddy.com/privacy-policy",
  "https://doubtbuddy.com/tnc",
  "https://twitter.com/doubtbuddy",
  "https://m.facebook.com/doubtbuddy",
  "https://www.instagram.com/doubtbuddyapp/",
];

const getImportantLinks = async () => {
  const structuredLlm = model.withStructuredOutput({
    schema: {
      type: "array",
      items: { type: "string" },
    },
    method: "json_mode",
    name: "important_links",
  });

  const data = await structuredLlm.invoke(
    `Given the following links: ${JSON.stringify(links)}, return only the most important links for reading website content. Respond in JSON array format.`
  );

  console.log("Filtered Important Links:", data);
};

getImportantLinks();
