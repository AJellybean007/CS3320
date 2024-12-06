import React, { useState, useEffect } from "react";

const BooksList = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch books from the API
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch("http://localhost:5000/"); 
                if (!response.ok) {
                    throw new Error("Failed to fetch books.");
                }
                const data = await response.json();
                setBooks(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const availableBooks = books.filter(book => book.status === "Available");
    const checkedOutBooks = books.filter(book => book.status === "Checked Out");

    return (
        <div>
            <h1>Books List</h1>
            <h2>Available Books</h2>
            {availableBooks.length > 0 ? (
                <ul>
                    {availableBooks.map((book) => (
                        <li key={book._id}>
                            {book.title} by {book.author}, ISBN: {book.isbn}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No available books.</p>
            )}

            <h2>Checked-Out Books</h2>
            {checkedOutBooks.length > 0 ? (
                <ul>
                    {checkedOutBooks.map((book) => (
                        <li key={book._id}>
                            {book.title} - Checked out by {book.checkedOutBy} (Due: {book.dueDate.toString().substring(0, 10)})
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No books are currently checked out.</p>
            )}
        </div>
    );
};

export default BooksList;
