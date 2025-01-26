# npm init -y 
Gives package.json file

# npm install
Express-        For webframework
jsonwebtoken-   Authentication purpose
mongoose-       To interact with MongoDB
cookie-parser-   package to parse incoming cookie. used in protectRoute
dotenv-         To handle environment variable
axios-           HttpClient
bcryptjs-       Hashpasswords

# npm install nodemon -D

--

## Web
Doing authentication at frontend or backend? Which is better option?
----
JWT: JSON Web Token
- User provides credentials (e.g., email and password).
- Backend verifies the credentials.
- If valid, the backend generates a JWT and sends it to the client.
- Client stores the JWT in a secure location(eg: in cookie)

- A cookie is a small piece of data stored in the browser and sent along with every HTTP request to the server.
- Cookies are a storage mechanism, while JWTs are data tokens.

----
(utils/generateTokens.js)
res.cookie with the option httpOnly: true is a way to set a secure cookie in an HTTP response in Express.js. The httpOnly flag is a security feature that prevents the cookie from being accessed by JavaScript in the browser, helping to protect against cross-site scripting (XSS) attacks.
---
CSRF (Cross-Site Request Forgery)
--- 
CORS( Cross Orign Resource Sharing)
-----------
randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];
The syntax data.results?.length is using optional chaining (?.) to safely access the length property of data.results, even if data or results is undefined or null. This prevents runtime errors like "Cannot read properties of undefined".
-----------
Protecting Routes- Middleware- If user is not authenticated it should be able to fetch API's then use "protectRoute"




# mongo DB
Projectname: lastminute-netflix
username: inboxofsabaruhee
Password: T3FsdMI4tQDgeJ1X
Connection string: mongodb+srv://inboxofsabaruhee:T3FsdMI4tQDgeJ1X@cluster0.7j3ef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

## HTTP statuses
- 400: The status code indicating a bad request from server
backend/controllers/authcontroller.js

- 201: Resources created at Server
Indicates the server successfully created a resource (e.g., a new user) as a result of the request.


### Learnings
- app.use: Middleware that runs for all HTTP methods (GET, POST, etc.) and for paths matching the base route (or all routes if no path is specified).
Example: app.use('/api', middlewareFunction)

- app.get: Defines a route handler for HTTP GET requests to a specific path.
Example: app.get('/api', (req, res) => res.send('GET response'))

## API TMDB
const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTFmNWQ4MWNkYzU0ODE5YTQ2MjliNWQyNjM1OGVmNyIsIm5iZiI6MTczNjk4NTU3Ni40NDYsInN1YiI6IjY3ODg0YmU4OWRlOGEyZDgzNDk3NmU3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J7AwytAp_a28AT7qzF-sBvpc5-Qhvy4fNvkeN7mILaU'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));