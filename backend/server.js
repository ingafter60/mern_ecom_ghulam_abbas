// BACKEND/server.js

// Import app.js
const app = require('./app')

// Import dotenv module
const dotenv = require('dotenv')

// Setting up cofig file and use dotenv
dotenv.config({ path: 'backend/config/config.env' })

// Server and port number
app.listen(process.env.PORT, () => {
  console.log(
    `server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  )
})
