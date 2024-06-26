import { createSlice } from "@reduxjs/toolkit";

const {v4 : uuidv4} = require("uuid")



const initialBooks = {
    books: [
        {
            id: uuidv4(),
            title: "The 5 AM Club",
            author: "Robin Sharma"
        },
        {
            id: uuidv4(),
            title: "The Power of Now",
            author: "Eckhart Tolle"
        }
    ]
}

export const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
            showBooks: (state) => state,
            addBook: (state, action) => {
                   state.books.push(action.payload)
            },
           deleteBook: (state, action) => {
             const id = action.payload
             state.books =  state.books.filter(book => book.id !== id)
            },
            updateBook: (state, action) => {
                const {id, title, author} = action.payload
                const isBookExist = state.books.filter((book) => book.id=== id)
                if(isBookExist){
                    isBookExist[0].title = title;
                    isBookExist[0].author = title;
                }
            },

        },

});

export const { showBooks, addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;


