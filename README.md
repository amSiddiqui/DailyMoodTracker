# Daily Mood Tracker

This is a beginner learning project built with Next.js and Firebase. The application allows users to track their daily mood.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a Firebase account and have access to your API credentials.

## Installing Daily Mood Tracker

To install Daily Mood Tracker, follow these steps:

1. Clone the repository:
```sh
git clone https://github.com/amSiddiqui/daily-mood-tracker.git
```

2. Navigate to the project directory:
```sh
cd daily-mood-tracker
```

3. Install the dependencies:
```sh
npm install
```

## Configuring Firebase
This project uses Firebase for data storage. To configure Firebase, follow these steps:

1. Create a new file named .env.local in the root of the project.
2. Add your Firebase API credentials to the .env.local file. It should look something like this:

```sh
APIKEY=your-api-key
AUTHDOMAIN=your-auth-domain
PROJECTID=your-project-id
STORAGEBUCKET=your-storage-bucket
MESSAGINGSENDERID=your-messaging-sender-id
APPID=your-app-id
```

Replace your-api-key, your-auth-domain, etc. with your actual Firebase API credentials.

## Running Daily Mood Tracker
To run Daily Mood Tracker, follow these steps:

1. Start the development server:
```sh
npm run dev
```
2. Open your browser and navigate to http://localhost:3000
