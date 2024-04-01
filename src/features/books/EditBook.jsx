import React, { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {updateBook} from "./BooksSlice";

export default function EditBook() {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id: initialId, title: initialTitle, author: initialAuthor } = location.state;

    const [id, setId] = useState(initialId);
    const [title, setTitle] = useState(initialTitle);
    const [author, setAuthor] = useState(initialAuthor);


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'title') setTitle(value);
        if (name === 'author') setAuthor(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBook({id, title , author}))
        navigate("/show-books", {replace: true})
    };

    return (
        <div className="form-container">
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={title} onChange={handleChange} />
                </div>
                <div className="form-field">
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" name="author" value={author} onChange={handleChange} />
                </div>
                <button type="submit" className="edit-book-button">Save Changes</button>
            </form>
        </div>
    );
}
