import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BooksList from "./components/BooksList";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import CheckOutBook from "./components/CheckOutBook";
import DeleteBook from "./components/DeleteBook";
import CheckInBook from "./components/CheckInBook";

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Books List</Link></li>
                        <li><Link to="/add">Add Book</Link></li>
                        <li><Link to="/edit">Edit Book</Link></li>
                        <li><Link to="/checkout">Check Out Book</Link></li>
                        <li><Link to="/delete">Delete Book</Link></li>
                        <li><Link to="/checkin">Check In Book</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<BooksList />} />
                    <Route path="/add" element={<AddBook />} />
                    <Route path="/edit" element={<EditBook />} />
                    <Route path="/checkout" element={<CheckOutBook />} />
                    <Route path="/delete" element={<DeleteBook />} />
                    <Route path="/checkin" element={<CheckInBook />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
