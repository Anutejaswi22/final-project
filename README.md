# final-project
Full-Stack MERN Application - Final Project
This project is my final coursework submission, demonstrating the skills and concepts learned
throughout the course. It is a full-stack application built using the MERN (MongoDB, Express, React,
Node.js) stack. The project showcases the integration of previous assignments into one
comprehensive application that allows users to interact with the database through a user-friendly
front-end interface.
Overview
--------
This project integrates two previous assignments - Node-API and Assignment4 - into one cohesive
full-stack web application. It allows users to perform basic CRUD (Create, Read, Update, Delete)
operations and interact with an external API.
Development Process
-------------------
1. Planning and Setup: Set up the GitHub repository and installed required dependencies.
2. Backend Development: Built a REST API using Express.js and connected it to MongoDB.
3. Frontend Development: Created a responsive UI using React and integrated it with the backend.
4. Database Integration: Designed and integrated MongoDB schema for CRUD operations.
5. External API Integration: Integrated external API (PokAPI) for demonstration purposes.
6. Testing: Used Postman for API testing and browser for frontend testing.
7. Final Integration and Deployment: Combined all features into the final project repository.
Features
--------
- MongoDB for persistent data storage.
- CRUD Operations: Users can create, read, update, and delete items.
- External API Integration: Data from PokAPI displayed in the application.
- Responsive UI: Built with React.
Technologies Used
-----------------
- MongoDB
- Express.js
- React.js
- Node.js
- Postman
- GitHub
- PokAPI
Installation
------------
1. Clone the repository: git clone https://github.com/Anutejaswi22/final-project.git
2. Setup backend: cd Backend && npm install
3. Setup frontend: cd Frontend && npm install
4. Run backend: npm start
5. Run frontend: npm start
Usage
-----
Access the app at http://localhost:3000, perform CRUD operations and interact with the PokAPI.
Project Structure
-----------------
final-project/
Backend/
Frontend/
README.md
API Endpoints
-------------
- GET /api/items
- POST /api/items
- PATCH /api/items/:id
- DELETE /api/items/:id
Challenges Faced
----------------
- Database Design: Designing MongoDB schema for flexibility.
- State Management: Managing React state between components.
- External API: Handling asynchronous data from third-party APIs.