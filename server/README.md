# Roomzy

Roomzy is a platform designed to simplify the process of finding rooms and roommates, particularly for newcomers and those looking to share accommodation. The platform leverages Telegram and the TON blockchain for seamless communication and secure transactions, aiming to provide cost-effective and convenient solutions for housing needs during events and in new cities.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Built With](#built-with)
- [Authors](#authors)


## Features

- **Global Event Coverage:** Roomzy caters to events worldwide, including conferences, meetups, and hackathons, allowing users to find accommodation tailored to event locations.

- **User-Friendly Interface:** Offers a simple and intuitive interface for users to search for rooms, homestays, or roommates based on their preferences and requirements.

- **Telegram Integration:** Users can activate Roomzy bot in any relevant Telegram community group to start searching for rooms or roommates, utilizing Telegram's secure messaging and TON wallet for payments.

- **Cost-Effective Sharing:** Facilitates room-sharing arrangements to reduce rental costs, connecting users with potential roommates interested in splitting accommodation expenses.

- **Secure Transactions:** Utilizes the TON blockchain for secure and transparent transactions between users, ensuring that payments are processed efficiently and safely.

## Getting Started

To get a local copy of Roomzy up and running for development or testing purposes, follow these steps:

### Prerequisites

- Node.js
- Express.js
- React
- MongoDB
- Telegram account with TON wallet

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/roomzy.git
cd roomzy
```

Install the required dependencies:

```bash
npm install
```

Create a `.env` file in the root directory and add the following environment variables:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/roomzy
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TON_WALLET_ADDRESS=your_ton_wallet_address
```

## Usage

Roomzy offers several commands through its Telegram bot interface:

- **/start**: Initiates the bot and sends a greeting message.
- **/help**: Provides assistance and details about available bot commands.
- **/chat**: Enables users to communicate with potential roommates directly through the bot.
- **/register**: Registers the user on the Roomzy Web App.
- **/login**: Logs the user into the Roomzy Web App for access to additional features.
- **/payment**: Facilitates secure payments between room providers and seekers using their Telegram IDs.
- **/profile**: Displays user history and rewards earned through the platform.
- **/review @username Your review**: Allows users to add reviews for other users, enhancing community trust and transparency.


![alt text](<WhatsApp Image 2024-06-23 at 23.28.11_b40b7046.jpg>)

## Demo Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/TUvSg5e2S84" frameborder="0" allowfullscreen></iframe>


## Built With

- **Node.js**: Backend framework for handling server-side operations and bot logic.

- **Express.js**: Web application framework for Node.js, used for routing and middleware management.

- **MongoDB**: NoSQL database for storing user information, room listings, and transactional data.

- **React**: Frontend library for building user interfaces.

- **Tailwind CSS**: Utility-first CSS framework for designing responsive and customizable UI components.

- **Telegram Bot API**: Integration for direct communication and bot functionality within Telegram.

- **TON Blockchain**: Secure and efficient blockchain technology used for handling payments and transactions securely within Telegram.


## Authors

- Neeraj Choubisa - [LinkedIn](https://www.linkedin.com/in/neeraj-choubisa-a4952b202/)
- Sneha Gupta - [LinkedIn](https://www.linkedin.com/in/sneha-gupta-239aa1201/)
- Rakesh Roushan - [LinkedIn](https://www.linkedin.com/in/connect-roushan/)


## Copyright
© 2024 Roomzy. All rights reserved.
