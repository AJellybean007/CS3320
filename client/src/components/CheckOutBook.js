import React, { useState } from "react";

const CheckOutBook = () => {
    const [bookId, setBookId] = useState("");
    const [checkedOutBy, setCheckedOutBy] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate an API call
        console.log({ bookId, checkedOutBy, dueDate });
        alert("Book checked out successfully!");
        setBookId("");
        setCheckedOutBy("");
        setDueDate("");
    };

    return (
        <div>
            <h1>Check Out a Book</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Book ID:</label>
                    <input
                        type="text"
                        value={bookId}
                        onChange={(e) => setBookId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Checked Out By:</label>
                    <input
                        type="text"
                        value={checkedOutBy}
                        onChange={(e) => setCheckedOutBy(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Due Date:</label>
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Check Out</button>
            </form>
        </div>
    );
};

export default CheckOutBook;
