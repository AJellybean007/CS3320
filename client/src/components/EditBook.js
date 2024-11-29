import React, { useState } from "react";

const EditBook = () => {
    const [book, setBook] = useState({
        title: "Sample Book",
        author: "Sample Author",
        publisher: "Sample Publisher",
        isbn: "123456789",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate an API call
        console.log("Updated Book Details:", book);
        alert("Book updated successfully!");
    };

    return (
        <div>
            <h1>Edit Book</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={book.title}
                        onChange={(e) => setBook({ ...book, title: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <input
                        type="text"
                        value={book.author}
                        onChange={(e) => setBook({ ...book, author: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>Publisher:</label>
                    <input
                        type="text"
                        value={book.publisher}
                        onChange={(e) => setBook({ ...book, publisher: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>ISBN:</label>
                    <input
                        type="text"
                        value={book.isbn}
                        onChange={(e) => setBook({ ...book, isbn: e.target.value })}
                        required
                    />
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditBook;
