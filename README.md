# NASA's Astronomy Picture of the Day
This full-stack web application uses NASA's public API to fetch the "Astronomy Picture of the Day" (APOD) for every day since 16 June 1995. Users can view the picture or video of the day and filter the data by selecting a specific date or a date range. The project consists of a React-based front-end and a Node.js Express back-end.

## Project Structure
```
│━━client     - React front-end (hosted on port 3000)
╵━━server     - Node.js Express back-end (hosted on port 5000)
```

## Features
- Fetches daily astronomy pictures or videos from NASA’s API.
- Allows users to filter and select a specific date or a date range.
- Displays detailed information about each day's picture or video.

## Prerequisites
Ensure you have the following installed on your system:

- **Node.js**: Download and install from [Node.js official website](https://nodejs.org/en).
- **React**: React will be installed as part of the `npm install` process in the `client` folder. You don't need to install React globally, but ensure your system supports it by having a compatible version of Node.js and npm.

## Getting a NASA API Key
To use this project, you need a NASA API key:

- Visit [NASA's API portal](https://api.nasa.gov/).
- Sign up for a free API key.
- Create a file named `apiKey.txt` in the server folder and paste the API key inside this file.

## Getting Started
Follow these steps to set up and run the project:

### 1. Install Dependencies
Both the `client` and `server` folders have their own dependencies. You must install them separately.

**Client (React App)**

- Navigate to the `client` folder and Install dependencies:
```
cd client
npm install
```
**Server (Node.js Express)**

- Navigate to the `server` folder and Install dependencies:
```
cd server
npm install
```

### 2. Run the Application

**Running the Server (Node.js)**

In the `server` folder, run the following command to start the back-end server (hosted on port 5000):
```
node server
```
**Running the Client (React)**

In the `client` folder, run the following command to start the front-end React app (hosted on port 3000):

```
npm start
```
### 3. Access the Application
- **Front-end**: Open [http://localhost:3000](http://localhost:3000) in your web browser to view the React app.
- **Back-end**: The back-end API is accessible on [http://localhost:5000](http://localhost:5000).

## Project Notes

- Ensure the `apiKey.txt` file is placed in the server folder before starting the server.
- Both the front-end and back-end must be running simultaneously for the application to function correctly.