const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());  // Allows cross-origin requests from the frontend
app.use(bodyParser.json());

// Mock data (example books)
const mockBooks = [
  {
    _id: "1",
    title: "Book 1",
    author: "Author 1",
    status: "Available"
  },
  {
    _id: "2",
    title: "Book 2",
    author: "Author 2",
    status: "Checked Out",
    checkedOutBy: "User A",
    dueDate: "2024-12-01"
  }
];

// Simple route
app.get('/', (req, res) => {
  res.send('Hello World from server.js!');
});

// Route to get all books (mock data)
app.get('/api/books', (req, res) => {
  res.json(mockBooks);  // Send the mock data
});

// CORS Configuration (Optional)
const corsOptions = {
  origin: 'http://localhost:3000',  // Adjust if your frontend is on a different URL/port
  methods: 'GET',  // Allow only GET method from frontend (or modify if needed)
};

app.use(cors(corsOptions));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
