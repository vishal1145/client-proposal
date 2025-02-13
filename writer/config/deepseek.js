export function initialize() {
    console.log("Deepseek API ready");
    return true;
}

export async function extractLinksFromHomePage(input_prompt) {
    try {   
        const response = await fetch('https://deepseek.algofolks.com/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: "deepseek-v2:16b",
                messages: [
                    {
                        role: "user",
                        content: input_prompt
                    }
                ],
                stream: false
            })
        });

        const data = await response.json();
        try {
            let contentStr = data.message.content;
            
            // Remove markdown code block markers
            contentStr = contentStr
                .replace(/```json\n?/g, '')
                .replace(/```$/gm, '')
                .trim();

            // Clean the content: remove non-ASCII characters and fix common issues
            contentStr = contentStr.replace(/[^\x00-\x7F]+/g, ''); // Remove non-ASCII chars
            
            // Fix any malformed URLs (remove quotes and commas at the end of URLs)
            contentStr = contentStr.replace(/",\s*([^\s"[])/g, '",\n"$1');
            
            const parsedLinks = JSON.parse(contentStr);
            
            if (Array.isArray(parsedLinks)) {
                // Filter out invalid URLs and normalize them
                return parsedLinks
                    .filter(url => {
                        try {
                            // Validate URL and ensure it's a string
                            return url && typeof url === 'string' && new URL(url);
                        } catch {
                            return false;
                        }
                    })
                    .map(url => url.trim());
            }       
            
            throw new Error('Response is not in expected array format');
            
        } catch (parseError) {
            console.error("Error parsing response:", parseError);
            return [];
        }
    } catch (error) {
        console.error("Error extracting links with Deepseek:", error);
        throw error;
    }
}

export async function getNatureResponse(input_data) {
    try {
        const systemPrompt = `You are a business analyst who extracts the nature of business and services from website content.`;
        
        const userPrompt = `Analyze the following content and extract the nature of business or services provided.
Return ONLY a JSON array of services.
Do NOT include any explanations, headers, or extra text.
If no services are found, return an empty JSON array [].
The response must be a valid JSON array of strings.

Content to analyze:
${input_data}`;

        const response = await fetch('https://deepseek.algofolks.com/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: "deepseek-v2:16b",
                messages: [
                    {
                        role: "system",
                        content: systemPrompt
                    },
                    {
                        role: "user",
                        content: userPrompt
                    }
                ],
                stream: false
            })
        });

        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error("Error invoking Deepseek:", error);
        return { content: "[]" };
    }
}
