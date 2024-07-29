const express = require('express');
const dotenv = require('dotenv');
const router = require('./router');


const sequelize = require('../utils/db');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api", router);


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bonjour le monde...');
});




sequelize.sync({ force: false }).then(() => {
  console.log("Database & tables created!");

  app.listen(PORT, () => {
        console.log(`App started successfully on http://localhost:${PORT}`);
      });
  // const startServer = (port) => {
  //   const server = app.listen(port, () => {
  //     console.log(`App started successfully on http://localhost:${port}`);
  //   });

  //   server.on("error", (error) => {
  //     console.log(error);
  //     if (error.code === "EADDRINUSE"){
  //       console.log(port);
  //       server.listen(port);
  //     }
  //  
  //   });
  // }
  
  // startServer(+PORT);

}).catch(err => {
  console.error('Unable to create tables, shutting down...', err);
  process.exit(1);
});
