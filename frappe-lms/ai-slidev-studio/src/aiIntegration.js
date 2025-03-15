export function acceptPrompt(prompt) {
    if (typeof prompt !== 'string' || prompt.trim() === '') {
        throw new Error('Invalid prompt: Prompt must be a non-empty string.');
    }
    return prompt.trim();
}

export async function sendToAI(prompt) {
    const apiKey = process.env.AI_API_KEY; // Ensure to set this in your environment
    const response = await fetch('https://api.example.com/generate', { // Replace with actual API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ prompt })
    });

    if (!response.ok) {
        throw new Error(`AI API error: ${response.statusText}`);
    }

    return await response.json();
}

export function parseAIResponse(response) {
    if (!response || !response.content) {
        throw new Error('Invalid response: No content found.');
    }
    return response.content; // Adjust based on the actual structure of the AI response
}