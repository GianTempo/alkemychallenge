## Alkemy's challenge server
This is the server that communicates the frontend with the database.

## What will you find 
Inside 'src' folder, you can find all the files that are necessary to create the server.</br>
Inside 'build' folder are the compiled typescript files, ready to be runned.

### src
There you can find two folders: controllers and routes, wich will be described later.</br>
Also, you will find three files:</br>
-database.ts, wich contains the connection strings to the database.</br>
-index.ts, wich contains the main Express server.</br>
-keys.ts, wich contains the required fields to connect to a mysql server.

#### controllers
There you can find two files: indexController.ts and balancesController.ts.</br>
The firt only has a default response for when the user visits the main route, although it's not very usefull to be honest.</br>
balancesController.ts contains all the methods that are necessary to retrieve and send data to the database.

#### routes
Here you can find the indexRoutes and balancesRoutes files. The first one contains the route for the main route. Nothing too fancy.</br>
The second one contains all the routes of balances, where it redirects all the HTTP methods such as get, post or put to their respective methods in the
balance controller. It also defines wich parameters each route will need.

## How to run it
If you have a console window open in this folder, you just need to run the next script:
```bash
npm run dev
```
