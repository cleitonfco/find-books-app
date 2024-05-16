# Find Books App (Book Recommender)

Welcome to the Find Books App repository! This application leverages the power of Artificial Intelligence to provide personalized book recommendations based on user searches. Built with a modern tech stack, including JavaScript, React, Node.js, and the OpenAI API, this project aims to deliver a seamless and intelligent user experience.

## Features

- **Personalized Book Recommendations**: Utilizes the OpenAI API to analyze user search queries and generate tailored book recommendations.
- **Responsive UI**: Built with React, ensuring a smooth and responsive user interface.
- **Search Functionality**: Users can search for books by title, author, or genre, and receive recommendations based on their input.
- **Scalable Architecture**: Designed with scalability in mind to handle a growing user base and large volumes of data.

## Technologies Used

- **JavaScript**: Core programming language for both frontend and backend development.
- **React**: Frontend library for building dynamic and interactive user interfaces.
- **OpenAI API**: Provides the AI capabilities to analyze search queries and generate recommendations.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/cleitonfco/find-books-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd find-books-app
   ```
3. Create the `.env` file and put your OPENAI API Key:
   ```
    PORT=5000
    BASE_URL=http://localhost:5000
    OPENAI_API_KEY=ss-proj-Ts5sxo8ZX5cBHsrAjmTkT3BluaFJX8xhh1FcjStiLUkYTPuv
   ```
4. Install the dependencies on root directory:
   ```bash
   npm install
   ```
5. Install the dependencies on frontend directory:
   ```bash
   cd frontend && npm install
   ```

### Running the Application

1. Start the backend server:
   ```bash
   cd backend && npm start
   ```
2. Start the frontend development server:
   ```bash
   cd frontend && npm start
   ```

The application should now be running on `http://localhost:3000`. Open this URL in your browser to start using the Find Books App.

## Usage

1. Enter a search query (prompt input) in the search bar.
2. The app will send the query to the OpenAI API, which processes the input and returns a list of recommended books.
3. Browse through the recommendations and click on any book to view more info.

## Contributing

We welcome contributions to improve the Book Recommender App! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the GNU GPLv3. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact the repository owner at [cleitonfco@gmail.com].

Happy Coding!
