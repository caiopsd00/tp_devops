const express = require('express');
const app = express();
const taskRoutes = require('./routes');
const { connectDB } = require('./database');

connectDB();

app.use(express.json());
app.use('/api/tasks', taskRoutes);

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
