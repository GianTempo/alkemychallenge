# alkemychallenge
This repo contains all what's neccesary to run a personal finances web app made as a challenge for Alkemy.

## But, what is this challenge?
Alkemy's challenge consists of an web app where the user can add transactions such as incomes and spendings.</br>
User can also see his current balance (calculated by substracting his incomes and spendings) and his last 10 transactions.</br>
The user can also edit or delete any transaction.</br>
Transactions must be listed grouped by incomes and spendings.

## What tecnologies I used
For the backend, I used nodeJs and Express, nothing very fancy but, hey, it makes the work!</br>
As for the frontend, I have choosed Angular, as it's my favourite framework, and Bootstrap 5 as css library.</br>
The database should be a SQL one. I use a mySql database.

## What will you find
This repo has 3 main folders: server, client and database.

-In server: you can find all the files to make a basic nodeJs and Express server.
Further information about server's files can be found in server's readme file.</br>
-In client: same as server, but containing all the files to make an Angular app.</br>
-In database: an sql file with the basic syntax to create the required database and it's tables.

## How to run it
Firt of all, clone this repo:
```bash
git clone https://github.com/GianTempo/alkemychallenge.git
```

Then, navigate to the projet's folder
```bash
cd /alkemychallenge
```

Now you have to start the server. To do so:
Navigate to server's folder and run npm run dev to start the server. Typescript files are already compiled.
```bash
cd /server
npm run dev
```

Now, open another console window in project's 'root' folder, and navigate to the client folder:
```bash
cd /client
```

Here, you will need to serve the Angular project with a ng serve, like:
```bash
ng serve
```

Open a tab in your browser and navigate to localhost:4200. The app should be running.
