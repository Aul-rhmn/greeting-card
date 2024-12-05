# Gift Card Generator

A web application that allows users to create personalized gift cards with a custom message and image upload functionality. The app uses React to build a dynamic user interface, allowing users to design a personalized greeting card by filling out a form and uploading an image. Once the card is generated, users can download it.

## Features
- Create custom gift cards with a personalized message and image.
- Drag-and-drop image upload support.
- Preview the generated card before downloading.
- Validation for empty fields in the form.
- Download the generated gift card as an image.

## Technologies Used
- **React**: JavaScript library for building the user interface.
- **React Hook Form**: Used for form handling and validation.
- **html2canvas**: Library to capture the content of the card as an image for download.
- **React Dropzone**: Provides drag-and-drop file upload functionality.
- **React Awesome Reveal**: Adds fade-in animations for transitions.
- **Bootstrap**: For basic styling and layout.
- **Jest**: JavaScript testing framework for unit testing.
- **@testing-library/react**: For testing React components.

## Prerequisites

To run this application locally, you need the following:

- **Node.js**: Ensure that you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

- **npm**: Node Package Manager (npm) comes bundled with Node.js.

## Installation

1. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/your-username/gift-card-generator.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd gift-card-generator
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the Application

1. **Start the development server**:
   ```bash
   npm start
   ```

   This will start the app at `http://localhost:3000` in your web browser.

2. **Try the live version**:  
   If you want to try the web app without running it locally, you can visit the live version hosted on Vercel:  
   [https://greeting-gift-card.vercel.app/](https://greeting-gift-card.vercel.app/)

## Running Tests

To run the tests for the project, you can use the following command:

```bash
npm test
```

This will run all the test cases defined in the project using Jest and `@testing-library/react`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.