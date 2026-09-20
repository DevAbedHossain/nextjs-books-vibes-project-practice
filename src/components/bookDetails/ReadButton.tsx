"use client"
import { booksContext } from '@/context/BooksContext';
import { iBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({ book }: { book: iBook }) => {

    const { readBooks, setReadBooks } = useContext(booksContext)

    const handleReadBook = () => {
        console.log("Read book button triggered");

        setReadBooks([...readBooks, book]);

        toast.success(`${book.bookName} successfully added`);
    }

    return (
        <button onClick={() => handleReadBook()} className="rounded-xl bg-green-600 px-7 py-3.5 font-semibold text-white transition hover:bg-green-700 cursor-pointer">
            Read Book
        </button>
    );
};

export default ReadButton;