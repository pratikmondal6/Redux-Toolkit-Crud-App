import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addBook} from "./BooksSlice";
import {useNavigate} from "react-router-dom";
const {v4 : uuidv4} = require("uuid")


export default function AddBook() {
    const initState = {
        title: '',
        author: ''
    };

    const [formData, setFormData] = useState(initState);

    const numberOfBooks = useSelector((state) => state.booksReducer.books.length); // Corrected

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = {
            id: uuidv4(),
            title: formData.title,
            author: formData.author
        };
        dispatch(addBook(book));
        navigate("/show-books", {replace: true})
        setFormData(initState);
    };

    return (
        <div className="form-container">
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
                </div>
                <div className="form-field">
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} />
                </div>
                <button type="submit" className="add-book-button">Add Book</button>
            </form>
        </div>
    );
}
