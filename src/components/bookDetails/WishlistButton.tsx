"use client"
import { booksContext } from '@/context/BooksContext';
import { iBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishlistButton = ({ book }: { book: iBook }) => {

    const { wishlistBooks, setWishlistBooks } = useContext(booksContext);

    const handleWishlist = () => {
        console.log("Wishlist button triggered");

        setWishlistBooks([...wishlistBooks, book]);

        toast.success(`${book.bookName} successfully added in wishlist`)

    }

    return (
        <button onClick={() => handleWishlist()} className="rounded-xl border border-gray-200 px-7 py-3.5 text-center font-semibold text-gray-700 transition hover:border-green-600 hover:text-green-600">Wishlist</button>
    );
};

export default WishlistButton;