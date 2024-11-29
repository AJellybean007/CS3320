import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BooksList from "./components/BooksList";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import CheckOutBook from "./components/CheckOutBook";

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
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<BooksList />} />
                    <Route path="/add" element={<AddBook />} />
                    <Route path="/edit" element={<EditBook />} />
                    <Route path="/checkout" element={<CheckOutBook />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
