const axios = require('axios');
require('dotenv').config();

// Function to send a text prompt to the AI API
async function sendPromptToAI(prompt) {
    const apiKey = process.env.GEMINI_API_KEY; // Ensure your API key is stored in an environment variable
    const apiUrl = 'https://api.gemini.com/v1/ai'; // Replace with the actual API endpoint

    try {
        const response = await axios.post(apiUrl, {
            prompt: prompt
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error sending prompt to AI:', error);
        throw error;
    }
}

// Function to accept a text prompt from the user and get AI-generated content
async function getAIResponse(prompt) {
    try {
        const aiResponse = await sendPromptToAI(prompt);
        return aiResponse;
    } catch (error) {
        console.error('Error getting AI response:', error);
        throw error;
    }
}

module.exports = {
    getAIResponse
};