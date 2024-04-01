import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Error from "../pages/Error";
import Navbar from "../layouts/Navbar";
import BooksView from "../features/books/BooksView";
import AddBook from "../features/books/AddBook";
import EditBook from "../features/books/EditBook";
import style from "../App.css";

export default function Index() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<div className="container"><BooksView />/></div>} />
                <Route path="/show-books" element={<div className="container"><BooksView /></div>} />
                <Route path="/add-book" element={<div className="container"><AddBook /></div>} />
                <Route path="/edit-book" element={<div className="container"><EditBook /></div>} />
                <Route path="*" element={<div className="container"><Error /></div>} />
            </Routes>
        </BrowserRouter>
    );
}
