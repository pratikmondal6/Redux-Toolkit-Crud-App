import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const navbarStyle = {
        backgroundColor: '#444',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const navLinkStyle = {
        color: '#fff',
        textDecoration: 'none',
        marginLeft: '2rem',
        fontSize: '1.2rem',
        transition: 'color 0.3s' // Transition for color change
    };

    const hoverStyle = {
        color: '#ffcc00' // Color on hover
    };

    return (
        <nav style={navbarStyle}>
            <Link to="/" style={navLinkStyle} onMouseEnter={(e) => e.target.style.color = '#ffcc00'} onMouseLeave={(e) => e.target.style.color = '#fff'}>
                Home
            </Link>
            <Link to="/show-books" style={navLinkStyle} onMouseEnter={(e) => e.target.style.color = '#ffcc00'} onMouseLeave={(e) => e.target.style.color = '#fff'}>
                Show Books
            </Link>
            <Link to="/add-book" style={navLinkStyle} onMouseEnter={(e) => e.target.style.color = '#ffcc00'} onMouseLeave={(e) => e.target.style.color = '#fff'}>
                Add Book
            </Link>
        </nav>
    );
}
