# Node.js Application Documentation

Welcome to the documentation for the Node.js application that powers the website running on `localhost:3000`. This application provides functionality for file uploads through a REST API and retrieves file metadata. This guide will walk you through setup, usage, and API endpoints.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Running the Application](#running-the-application)
  - [File Upload API](#file-upload-api)

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

## Installation

1. **Clone the Repository from GitHub:**

   ```sh
   git clone https://github.com/abhiseksr/fileinfo
   
2. **Navigate to the Project Directory:**

   ```sh
   cd fileinfo
   
3. **Install Dependencies:**

   ```sh
   npm install

## Usage

### Running the Application

1. **Start the Node.js Server:**
   npm start

2. **Access the Website:**
   Open your web browser and navigate to http://localhost:3000.
   
## File Upload API

Upload files to the server using the following API endpoint:

- **Endpoint:** `POST /`
- **Parameters:**
  - `file`: The file to be uploaded.
- **Response:**
  - **Successful upload (Browser):** Returns an HTML response.
  - **Successful upload (Postman):** Returns a JSON object with the uploaded file details.
  - **Error:** Returns an error message.

## Get File Metadata API

Retrieve file metadata using the following API endpoint:

- **Endpoint:** `GET /`
- **Parameters:**
  - `filename`: The name of the uploaded file.
- **Response:**
  - **Successful request:** Returns a JSON object containing file metadata.
  - **Error:** Returns an error message.

## Examples

### Uploading a File

#### Using Web Browser

Visit [http://localhost:3000](http://localhost:3000) in your web browser to upload a file. You'll receive an HTML response.

#### Using Postman

Send a POST request to `http://localhost:3000/` with the `file` parameter. Set the `Accept` header to `application/json` to receive a JSON response.


