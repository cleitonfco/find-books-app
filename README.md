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

## Preparing the Database

This application will use an SQLite3 database to store a cache of embeddings data obtained from OpenAI. To populate the database, we will use a CSV file containing data on thousands of books sourced from Kaggle.com: [Amazon Books Reviews](https://www.kaggle.com/datasets/mohamedbakhet/amazon-books-reviews).

### Steps to Prepare the Database

1. **Download the CSV File**

   Download the dataset from Kaggle.com and unzip the `books_data.csv` file to the `backend/data` directory.

2. **Convert data file to JSON**

   Run the code below to create a JSON file:
   ```bash
   cd backend/data
   node extract_from_csv.js
   ```

3. **Create and populate the database**

   By running the following code, you create the database, its structure and populate it with AI _embeddings_.
   ```bash
   cd backend/data
   node createEmbeddings.js
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

1. Enter a search input (prompt) in the search bar.
2. The application will send a query to the OpenAI API, which will find a set of books related to what was searched.
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

This project is licensed under the GNU GPLv3 license. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact the repository owner at [cleitonfco@gmail.com].

Happy Coding!
