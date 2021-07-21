import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json(extend: true));
app.use(express.urlencoded(extend: true));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is running!!');
})

const PORT = process.env.PORT || 5000;

mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/managementDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.logo(`🌎  ==> API Server now listening on PORT ${PORT}!`)))
  .catch((error)=>console.log(error));

