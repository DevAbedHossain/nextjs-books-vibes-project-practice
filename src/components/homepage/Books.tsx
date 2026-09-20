import React from 'react';
import BooksCard from '../shared/BooksCard';
import { iBook } from '@/types/books.type';

const getBooks = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error("Failed to fetch book");
    }

    return res.json();
}

const Books = async () => {

    const books = await getBooks();
    console.log(books)

    return (
        <section className="container mx-auto">
            <h2 className="text-4xl font-semibold my-10">Books List</h2>
            <div className="grid grid-cols-4 gap-4">
                {
                    books.slice(0, 8).map((book: iBook) => <BooksCard key={book.bookId} book={book}></BooksCard>)
                }

            </div>
        </section>
    );
};

export default Books;