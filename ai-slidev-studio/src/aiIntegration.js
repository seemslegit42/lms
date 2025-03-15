import axios from 'axios';

const API_URL = 'https://api.gemini.com/v1/ai';
const API_KEY = process.env.GEMINI_API_KEY;

export async function generateSlides(prompt) {
    try {
        const response = await axios.post(API_URL, {
            prompt: prompt,
            apiKey: API_KEY
        });
        return response.data;
    } catch (error) {
        console.error('Error generating slides:', error);
        throw new Error('Failed to generate slides. Please try again.');
    }
}
