const aiIntegration = require('./aiIntegration');

async function main() {
    const userPrompt = 'Your text prompt here'; // Replace with the actual prompt you want to send
    try {
        const aiResponse = await aiIntegration.getAIResponse(userPrompt);
        console.log('AI Response:', aiResponse);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();