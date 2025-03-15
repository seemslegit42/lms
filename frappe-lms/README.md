# Frappe LMS

Frappe LMS is an educational platform that integrates with Slidev to allow users to create interactive presentations using AI. This project provides a seamless experience for users to generate slide content based on their prompts and customize their presentations with a basic theme suitable for educational content.

## Project Structure

The project consists of the following main components:

- **ai-slidev-studio**: This directory contains the Slidev project where users can create and manage their presentations.
  - **slides**: Contains the main Markdown file for the Slidev presentation.
  - **src**: Contains the source files for AI integration and styling.
  - **package.json**: Configuration file for npm dependencies.
  - **slidev.config.js**: Configuration settings for the Slidev project.
  - **README.md**: Documentation specific to the Slidev project.

- **frappe-web-form**: This directory contains the user interface for the Frappe LMS integration.
  - **index.html**: The main HTML file for the user interface.
  - **style.css**: CSS styles for the web form interface.
  - **script.js**: JavaScript code for handling user interactions.

## Features

- **AI Integration**: Users can input prompts to generate slide content using AI.
- **Slidev Presentations**: Create and manage presentations with a user-friendly interface.
- **Customizable Themes**: Basic themes are provided for educational content.
- **Error Handling**: The application includes error handling for API requests and content generation.

## Getting Started

To get started with the Frappe LMS project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the `ai-slidev-studio` directory and install the necessary dependencies:
   ```
   cd ai-slidev-studio
   npm install
   ```
3. Configure the AI integration by setting up your API keys securely.
4. Launch the Frappe LMS application and access the web form to start creating presentations.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.