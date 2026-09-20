"use client"
import ReadBooksCard from '@/components/shared/ReadBooksCard';
import { booksContext } from '@/context/BooksContext';
import { iBook } from '@/types/books.type';
import { useContext, useState } from 'react';

const ListedBooksPage = () => {

    const { readBooks, wishlistBooks } = useContext(booksContext)
    console.log(readBooks);

    const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

    const [bookName, setBookName] = useState<string>("")


    const sortBooks = (books: iBook[]) => {

        const filterBooks = books.filter((book: iBook) => book.bookName.toLowerCase().includes(bookName.toLowerCase()))

        const sortedBooks = [...filterBooks]


        if (sortBy === "rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating)
        } else if (sortBy === "pages") {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages)
        } else if (sortBy === "year") {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
        }

        return sortedBooks;
    }

    const sortByReadBooks = sortBooks(readBooks);
    const sortByWishlistBooks = sortBooks(wishlistBooks);

    console.log(sortBy)

    return (
        <section className="container mx-auto">
            <div>
                <div className="bg-amber-100 rounded-3xl p-15 my-4">
                    <h2 className="text-5xl font-semibold text-center">Books</h2>
                </div>

                <div className="justify-center py-10 flex gap-5">
                    <input onChange={e => setBookName(e.target.value)} type="text" placeholder="Book Name" className="input" />

                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")} className="select select-success">
                        <option disabled={true}>Pick a Runtime</option>
                        <option value={"rating"}>Rating</option>
                        <option value={"pages"}>Pages</option>
                        <option value={"year"}>Year</option>
                    </select>
                </div>

                {/* name of each tab group should be unique */}
                <div className="tabs tabs-border">

                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Read Books" defaultChecked />
                    <div className="tab-content border-base-300 bg-base-100 p-4 space-y-5">
                        {sortByReadBooks.length > 0 ?
                            sortByReadBooks.map((book: iBook) => <ReadBooksCard key={book.bookId} book={book}></ReadBooksCard>)
                            : <div>
                                <p className="text-xl text-center p-4">No data found</p>
                            </div>
                        }
                    </div>

                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Wishlist Books" />
                    <div className="tab-content border-base-300 bg-base-100 p-4 space-y-5">
                        {sortByWishlistBooks.length > 0 ?
                            sortByWishlistBooks.map((book: iBook) => <ReadBooksCard key={book.bookId} book={book}></ReadBooksCard>)
                            : <div>
                                <p className="text-xl text-center p-4">No data found</p>
                            </div>
                        }
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ListedBooksPage;