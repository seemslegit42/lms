import { generateSlides } from '../ai-slidev-studio/src/aiIntegration.js';

document.getElementById('generate').addEventListener('click', async () => {
    const prompt = document.getElementById('prompt').value;
    try {
        const slides = await generateSlides(prompt);
        document.getElementById('preview').innerText = slides;
    } catch (error) {
        document.getElementById('preview').innerText = 'Error generating slides. Please try again.';
    }
});
