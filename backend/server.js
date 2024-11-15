const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const incomeRoutes = require('./routes/income');
const budgetRoutes = require('./routes/budget');
const expenseRoutes = require('./routes/expense');
const reportsRoutes = require('./routes/reports');
const allowedOrigins = ['https://mypocketai.azurewebsites.com'];

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: allowedOrigins
}));

// Routes
app.use("/api/auth", authRoutes);
app.use('/api/income', incomeRoutes);
app.use('/api/budget', budgetRoutes);
app.use('/api/expense', expenseRoutes);
app.use('/api/reports', reportsRoutes);


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start the server
app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
  console.log('Server is running on https://mypocketai.azurewebsites.com');
});

