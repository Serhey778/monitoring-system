# User-interfase

Welcome to the Monitoring-system!
This project developed with the help of java script, type script, frameworks: React, Next.js, TailwindCSS, postgresSQL and Neon database. The moniring-system allows you to track IP sensor values in real time and graphically display their values in the form of diagrams for a certain period of time.

## Running the App in Development Mode.

1. Navigate to the root directory of the project.
2. Open new terminal window.
3. Install User-interfase dependencies by running the following command:
   > npm install
4. Run App in the development mode with hot reload feature:
   > npm run dev
   > npm start (running the App in Production Mode)
5. Server will be running at the 'http:/127.0.0.1:3000/'('http:/localhost:3000/').
6. Open your browser and enter the above URL.
7. The application is ready to work.

## Documentation

### The model in the Neon database contains:

type Data = {
id: string;
temp: number;
humid: number;
created_at: string;
};

### App endpoints:

1. $/ - Home page.
2. $/monitoring - online sensors readings.
3. $/momitoring/graph - diagrams with sensor readings for different periods of time.
