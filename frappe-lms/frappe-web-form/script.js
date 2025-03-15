// This file handles user interactions for the Frappe LMS Slidev AI creation studio.

document.addEventListener('DOMContentLoaded', function() {
    const promptInput = document.getElementById('prompt-input');
    const generateButton = document.getElementById('generate-button');
    const outputArea = document.getElementById('output-area');

    generateButton.addEventListener('click', async function() {
        const prompt = promptInput.value;
        if (!prompt) {
            outputArea.innerHTML = '<p>Please enter a prompt.</p>';
            return;
        }

        try {
            const response = await sendToAI(prompt);
            const slidesContent = parseAIResponse(response);
            outputArea.innerHTML = `<pre>${slidesContent}</pre>`;
        } catch (error) {
            outputArea.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    });
});

// Function to send prompt to AI integration module
async function sendToAI(prompt) {
    const response = await fetch('/path/to/aiIntegration.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
    });
    if (!response.ok) {
        throw new Error('Failed to generate slides');
    }
    return response.json();
}

// Function to parse AI response
function parseAIResponse(response) {
    // Assuming response contains a 'content' field with the generated slides
    return response.content;
}