class MockLLM {
    constructor() {
        console.log("Hardcoded LLM initialized");
    }

    async invoke(prompt) {
        return "This is a hardcoded response to save costs during development. You can customize this response based on your needs.";
    }
}

let mockInstance = null;

export function initialize() {
    if (!mockInstance) {
        mockInstance = new MockLLM();
    }
    return mockInstance;
}

export async function extractLinksFromHomePage(input_prompt) {

    // let response = await getAIResponse(`Here are extracted links from the website: \n\n${validLinks.join(
    //   "\n"
    // )}\n\nIdentify and return the most relevant ones do not include social media, contact, payment & payment related links, same links and downloaded links return data of array of string in json 
    // formate only. please return array only without any string`)
    // return  response;

    try {
        return [
            "https://doubtbuddy.com"
        ];
    } catch (error) {
        console.error("Error with hardcoded response:", error);
        throw error;
    }
}

export async function getNatureResponse(html) {
    try {
        // Return array with nature and description for each service
        return [
            {
                nature: "Service 1",
                description: "Detailed description of Service 1 and its benefits"
            },
            {
                nature: "Service 2", 
                description: "Detailed description of Service 2 and its benefits"
            },
            {
                nature: "Service 3",
                description: "Detailed description of Service 3 and its benefits"
            }
        ];
    } catch (error) {
        console.error("Error with hardcoded response:", error);
        throw error;
    }
} 