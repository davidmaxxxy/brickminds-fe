# Lego Gift Finder - Frontend

Welcome to the Lego Gift Finder tool, a project built to help parents find the perfect Lego gifts for their children or for children of relatives/friends. This tool asks a few simple questions about the child's preferences and returns a list of the best matching Lego products from an external database.

## Problem Statement
Parents often struggle to find the right gifts for children, especially when it comes to toys like Lego sets. The Lego Gift Finder helps simplify this process by using a questionnaire to filter the best Lego products based on the child's age, interests, and other preferences.

## Features
- A simple, interactive survey asks users a series of questions.
- Based on the answers, the backend fetches a list of Lego products from an external database.
- The front-end displays the recommended Lego sets that best match the criteria specified by the user.

## Demo
The frontend of the project is fully functional and can be accessed by running the project locally by following the instructuons below.
<img width="1717" alt="Screenshot 2025-01-12 at 15 05 20" src="https://github.com/user-attachments/assets/d575dae3-0d0e-4bef-899d-95e16de41eb7" />

## How to Run the Frontend Locally
If you'd like to run the frontend locally, follow the instructions below:

### Prerequisites
- Node.js (v12 or higher) installed on your machine.
- NPM (Node Package Manager).

### Steps to Run Locally:
1. Clone the repository:
   [git clone https://github.com/your-username/lego-gift-finder-frontend.git](https://github.com/davidmaxxxy/brickminds-fe)
2. Navigate to the project directory:
   - cd lego-gift-finder-frontend

3. Install the required dependencies:
   - npm install

4. Start the development server:
   - npm start

The application should now be running at http://localhost:3000. You can interact with the survey and explore the user interface.

### NOTE
Backend Instructions (Important!)
This project requires a backend to process the user's responses and fetch the matching Lego products from an external database. The backend is not included in this part of the project as it runs separately.

To fully experience the end-to-end (E2E) functionality:
1. Please follow the instructions provided in the backend README to set up the backend locally. You will need to run the backend server separately and ensure it's connected to the external Lego products database.
2. Once the backend is running, the frontend will interact with it by sending survey responses and receiving the appropriate Lego product recommendations.
3. For backend setup instructions, please refer to the Backend README.
