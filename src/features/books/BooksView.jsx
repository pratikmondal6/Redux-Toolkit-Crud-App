import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./BooksSlice";
import { Link } from "react-router-dom"; // Import Link

export default function BooksView() {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.booksReducer.books);

    const handleDelete = (id) => {
        dispatch(deleteBook(id)); // Dispatch deleteBook action with the book id
    };

    const handleEdit = (id) => {
        // Implement your edit functionality here
        console.log("Editing book with id:", id);
    };

    return (
        <div className="books-container">
            <h2>List of Books</h2>
            <table className="books-table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => {
                    const { id, title, author } = book; // Destructure book object
                    console.log("Title:", title);
                    return (
                        <tr key={id}>
                            <td>{title}</td>
                            <td>{author}</td>
                            <td>
                                <Link to="/edit-book"
                                    state={{ id, title, author }}>
                                    <button className="sky-blue-button">Edit</button>
                                </Link>
                                <button className="delete-button" onClick={() => handleDelete(id)}>Delete</button>
                            </td>

                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}
