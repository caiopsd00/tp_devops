const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const taskRoutes = require('./routes');
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
