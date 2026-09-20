import ReadButton from '@/components/bookDetails/ReadButton';
import WishlistButton from '@/components/bookDetails/WishlistButton';
import { iBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';

interface BookDetailsProms {
    params: Promise<{
        bookId: string
    }>
}

const getBooks = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
    if (!res.ok) {
        throw new Error("Failed to fetch book");
    }
    return res.json();

}

const BookDetailsPage = async ({ params }: BookDetailsProms) => {

    const { bookId } = await params;

    const booksData = await getBooks();

    const book = booksData.find((book: iBook) => String(book.bookId) === String(bookId))
    console.log(book)


    return (
        <main className="min-h-screen bg-[#f7f8f5]">

            {/* Book Hero */}
            <section className="container mx-auto px-4 py-10 md:py-16">

                {/* Breadcrumb */}
                <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
                    <Link
                        href={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`}
                        className="transition hover:text-green-600"
                    >
                        Home
                    </Link>

                    <span>/</span>

                    <Link
                        href={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/books`}
                        className="transition hover:text-green-600"
                    >
                        Books
                    </Link>

                    <span>/</span>

                    <span className="text-gray-800">
                        {book.bookName}
                    </span>
                </div>

                <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* ================= IMAGE ================= */}
                        <div className="flex min-h-125 items-center justify-center bg-[#eef3eb] p-8 md:p-14">

                            <div className="relative">

                                {/* Decorative Circle */}
                                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-100 md:h-96 md:w-96" />

                                <Image
                                    src={book.image}
                                    width={400}
                                    height={520}
                                    alt={book.bookName}
                                    priority
                                    className="relative z-10 max-h-125 w-auto rounded-lg object-contain shadow-2xl transition duration-500 hover:scale-105"
                                />

                            </div>

                        </div>

                        {/* ================= CONTENT ================= */}
                        <div className="flex flex-col justify-center p-7 md:p-12 lg:p-16">

                            {/* Category */}
                            <div className="mb-5 flex items-center gap-3">

                                <span className="rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
                                    {book.category}
                                </span>

                                <span className="text-sm text-gray-400">
                                    Published {book.yearOfPublishing}
                                </span>

                            </div>

                            {/* Title */}
                            <h1 className="max-w-xl text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                                {book.bookName}
                            </h1>

                            {/* Author */}
                            <p className="mt-4 text-lg text-gray-500">
                                Written by{" "}
                                <span className="font-semibold text-gray-800">
                                    {book.author}
                                </span>
                            </p>

                            {/* Rating */}
                            <div className="mt-6 flex items-center gap-4">

                                <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-4 py-2">
                                    <span className="text-xl text-yellow-500">
                                        ★
                                    </span>

                                    <span className="font-bold text-gray-900">
                                        {book.rating}
                                    </span>

                                    <span className="text-sm text-gray-500">
                                        / 5
                                    </span>
                                </div>

                                <span className="text-sm text-gray-500">
                                    Highly rated book
                                </span>

                            </div>

                            {/* Short Description */}
                            <p className="mt-7 leading-7 text-gray-600">
                                {book.review}
                            </p>

                            {/* Tags */}
                            <div className="mt-7 flex flex-wrap gap-2">

                                {book.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
                                    >
                                        #{tag}
                                    </span>
                                ))}

                            </div>

                            {/* Buttons */}
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                                <ReadButton book={book}></ReadButton>

                                <WishlistButton book={book}></WishlistButton>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ================= BOOK INFORMATION ================= */}
            <section className="container mx-auto px-4 pb-16">

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                    {/* Pages */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <p className="text-sm text-gray-400">
                            Total Pages
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-gray-900">
                            {book.totalPages}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                            Pages to explore
                        </p>
                    </div>

                    {/* Publisher */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <p className="text-sm text-gray-400">
                            Publisher
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-gray-900">
                            {book.publisher}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                            Original publisher
                        </p>
                    </div>

                    {/* Published */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <p className="text-sm text-gray-400">
                            Published
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-gray-900">
                            {book.yearOfPublishing}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                            Year of publication
                        </p>
                    </div>

                </div>

            </section>

            {/* ================= REVIEW ================= */}
            <section className="container mx-auto px-4 pb-20">

                <div className="rounded-3xl bg-[#10231b] p-7 text-white md:p-12">

                    <div className="max-w-4xl">

                        <span className="text-sm font-semibold uppercase tracking-widest text-green-400">
                            About this book
                        </span>

                        <h2 className="mt-3 text-3xl font-bold">
                            A story worth discovering
                        </h2>

                        <p className="mt-6 leading-8 text-gray-300">
                            {book.review}
                        </p>

                    </div>

                </div>

            </section>

        </main>
    );
};

export default BookDetailsPage;