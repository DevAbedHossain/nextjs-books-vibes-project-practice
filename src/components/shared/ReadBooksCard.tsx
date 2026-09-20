import { iBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import { FiFileText, FiMapPin, FiUsers } from 'react-icons/fi';

interface ReadBooksCardProms {
    book: iBook
}

const ReadBooksCard = ({ book }: ReadBooksCardProms) => {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="flex flex-col gap-5 sm:flex-row">

                {/* Book Image */}
                <div className="flex h-45 w-full shrink-0 items-center justify-center rounded-xl bg-[#f5f5f5] sm:w-46.25">
                    <Image
                        src={book.image}
                        width={130}
                        height={160}
                        alt={book.bookName}
                        className="h-37.5 w-auto object-contain"
                    />
                </div>

                {/* Book Information */}
                <div className="flex flex-1 flex-col">

                    {/* Title */}
                    <h2 className="font-serif text-2xl font-bold text-gray-900">
                        {book.bookName}
                    </h2>

                    {/* Author */}
                    <p className="mt-2 text-sm text-gray-700">
                        By : <span className="font-medium">{book.author}</span>
                    </p>

                    {/* Tags + Year */}
                    <div className="mt-4 flex flex-wrap items-center gap-3">

                        <span className="font-semibold text-gray-800">
                            Tag
                        </span>

                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-green-50 px-4 py-1 text-sm font-medium text-green-600"
                            >
                                #{tag}
                            </span>
                        ))}

                        <span className="flex items-center gap-2 text-sm text-gray-500">
                            <FiMapPin className="text-lg" />
                            Year of Publishing: {book.yearOfPublishing}
                        </span>
                    </div>

                    {/* Publisher + Pages */}
                    <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-gray-500">

                        <span className="flex items-center gap-2">
                            <FiUsers className="text-lg" />
                            Publisher: {book.publisher}
                        </span>

                        <span className="flex items-center gap-2">
                            <FiFileText className="text-lg" />
                            Page {book.totalPages}
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="my-4 border-t border-gray-200" />

                    {/* Bottom Buttons */}
                    <div className="flex flex-wrap items-center gap-3">

                        {/* Category */}
                        <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-500">
                            Category: {book.category}
                        </span>

                        {/* Rating */}
                        <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-500">
                            Rating: {book.rating}
                        </span>

                        {/* Details Button */}
                        <Link
                            href={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/books/${book.bookId}`}
                            className="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBooksCard;