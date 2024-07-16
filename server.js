const express = require('express');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
const studentRouter = require('./routers/studentsRouter');
const universityRouter = require('./routers/universityRouter');
const authRouter = require("./routers/auth.js");
const courseRouter = require("./routers/coursesRouter");
const degreeRouter = require("./routers/degreeRouter");
const programRouter = require("./routers/programRouter");
const programDegreeRouter = require("./routers/programDegreeRouter");
const courseProgramRouter = require("./routers/courseProgramRouter");


const sequelize = require('./db');



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bonjour le monde...');
});

app.use("/api", authRouter);
app.use('/api', studentRouter);
app.use('/api', universityRouter);
app.use('/api', courseRouter);
app.use('/api', degreeRouter);
app.use('/api', programRouter);
app.use('/api', programDegreeRouter);
app.use('/api', courseProgramRouter);



// app.listen(PORT, () => {
//   console.log(`App started successfully on http://localhost:${PORT}`);
// });
sequelize.sync({ force: false })
  .then(() => {
    console.log('Base de données synchronisée');
    
    app.listen(8000, () => {
      console.log(`App started successfully on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });