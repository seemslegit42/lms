# ai-slidev-studio README

# ai-slidev-studio

Welcome to the **ai-slidev-studio** project! This project is designed to enable users of the Frappe LMS to create engaging Slidev presentations using AI-generated content. Below you will find setup instructions, usage guidelines, and information about the AI integration.

## Project Structure

The project is organized as follows:

```
ai-slidev-studio/
├── slides/                # Contains the Markdown files for Slidev presentations
│   └── index.md          # Main Markdown file for the presentation
├── src/                   # Source files for the project
│   ├── aiIntegration.js   # JavaScript module for AI integration
│   └── theme.css          # CSS styles for the Slidev presentation
├── package.json           # NPM configuration file
├── slidev.config.js       # Slidev configuration settings
└── README.md              # Project documentation
```

## Setup Instructions

1. **Clone the Repository**: Start by cloning the Frappe LMS repository to your local machine.

2. **Navigate to the Project Directory**: Change into the `ai-slidev-studio` directory.

   ```bash
   cd frappe-lms/ai-slidev-studio
   ```

3. **Install Dependencies**: Run the following command to install the necessary dependencies for the Slidev project.

   ```bash
   npm install
   ```

4. **Run the Project**: You can start the Slidev presentation by running:

   ```bash
   npx slidev
   ```

## Usage Guidelines

- Use the provided web form in the Frappe LMS to enter your text prompt.
- Click the "Generate Slides" button to create your Slidev presentation.
- The generated slides will be displayed in the preview area.

## AI Integration

The project includes an AI integration module located in `src/aiIntegration.js`. This module provides functions to:

- Accept a text prompt from the user.
- Send the prompt to the AI API and receive a response.
- Parse the AI-generated content for use in the Slidev presentation.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

Thank you for using **ai-slidev-studio**! We hope you enjoy creating presentations with AI assistance.