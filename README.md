# Full-Stack Banquee Application

Welcome to the Full-Stack Banquee Application repository! This project is designed to showcase a comprehensive web application for banking, featuring both a server and a client application. The server is built using Node.js and Express, while the client is developed with Vue version 3 and styled with Tailwind CSS.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Server](#server)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [API Endpoints](#api-endpoints)
- [Client](#client)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Contributing](#contributing)
- [License](#license)

## Overview

This Full-Stack Banquee Application provides a simple yet functional online banking system. It allows users to manage their accounts, perform transactions, and view their account balances. The project is divided into two main parts:

1. **Server (Node.js + Express)**: The server handles business logic, database operations, and exposes RESTful API endpoints for the client application.

2. **Client (Vue 3 + Tailwind CSS)**: The client provides a user-friendly interface for customers to access their bank accounts, make transactions, and view their transaction history.

## Features

- **User Authentication**: Secure user registration and login.
- **Account Management**: Create, view, and edit bank accounts.
- **Transaction Handling**: Transfer funds, deposit, and withdraw.
- **Transaction History**: Access a log of all account transactions.
- **Balance Inquiry**: Check account balances.
- **User-Friendly Interface**: Designed with Vue 3 and styled using Tailwind CSS.

## Server

### Prerequisites

Before setting up the server, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB (or a database of your choice)

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/gift56/banquee
   cd repo/server

   ```

2. Install dependencies:
   npm install

3. Configure the server:

PORT=8080
MONGODB_URI=mongodb://localhost/bank
JWT_SECRET=your-secret-key

4. Start the server:
   npm run dev

### API Endpoints

- POST /api/auth/register: Register a new user.
- POST /api/auth/login: Log in a user.
- GET /api/accounts: Get a list of user accounts.
- POST /api/accounts: Create a new account.
- GET /api/accounts/:id: Get details of a specific account.
- PUT /api/accounts/:id: Update an account.
- DELETE /api/accounts/:id: Delete an account.
- GET /api/transactions: Get all transactions for a user.
- POST /api/transactions: Perform a transaction (transfer, deposit, withdraw).

## Client

Prerequisites
Before setting up the client, make sure you have Node.js and npm installed.

### Setup

1. Navigate to the client folder:
   cd ../client

2. Install dependencies:
   npm install

3. Start the client:
    npm run dev


