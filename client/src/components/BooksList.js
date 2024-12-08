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
        <div className = "Book-div">
            <h1 className = "App-book-header">Books List</h1>
            <h2 className = "App-mini-header">Available Books</h2>
            {availableBooks.length > 0 ? (
                <table cellspacing="0">
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publisher</th>
                        <th>ISBN</th>
                    </tr>
                    {availableBooks.map((book) => (
                        <tr key={book._id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.publisher}</td>
                            <td>{book.isbn}</td>
                        </tr>
                    ))}
                </table>
            ) : (
                <p>No available books.</p>
            )}

            <h2 className = "App-mini-header">Checked-Out Books</h2>
            {checkedOutBooks.length > 0 ? (
                <table cellspacing="0">
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>ISBN</th>
                    <th>Due Date</th>
                    <th>Checked Out By</th>
                </tr>
                {checkedOutBooks.map((book) => (
                    <tr key={book._id}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.publisher}</td>
                        <td>{book.isbn}</td>
                        <td>{book.dueDate.substring(0, 10)}</td>
                        <td>{book.checkedOutBy}</td>
                    </tr>
                ))}
            </table>
            ) : (
                <p>No books are currently checked out.</p>
            )}
        </div>
    );
};

export default BooksList;
