import express from 'express';
import cors from 'cors';
//pnconst userRoutes = require('./routes/userRoutes');

const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());

//app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
