"use client"
import { iBook } from '@/types/books.type';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface BooksContext {
    readBooks: iBook[]
    setReadBooks: Dispatch<SetStateAction<iBook[]>>
    wishlistBooks: iBook[],
    setWishlistBooks: Dispatch<SetStateAction<iBook[]>>
}

export const booksContext = createContext<BooksContext>({
    readBooks: [],
    setReadBooks: () => { },
    wishlistBooks: [],
    setWishlistBooks: () => { },
});


const BooksProvider = ({ children }: { children: ReactNode }) => {


    const [readBooks, setReadBooks] = useState<iBook[]>([]);
    const [wishlistBooks, setWishlistBooks] = useState<iBook[]>([]);

    const sharedData = {
        readBooks, setReadBooks, wishlistBooks, setWishlistBooks
    }


    return <booksContext.Provider value={sharedData}> {children} </ booksContext.Provider>;
};

export default BooksProvider;