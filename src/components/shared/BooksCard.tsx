import { iBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';


interface BooksCardProps {
    book: iBook
}

const BooksCard = ({ book }: BooksCardProps) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Book Image */}
            <div className="relative flex h-80 items-center justify-center overflow-hidden bg-[#f5f7f2] p-8">

                {/* Category Badge */}
                <span className="absolute left-4 top-4 z-10 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                    {book.category}
                </span>

                {/* Rating */}
                <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm font-semibold shadow-sm">
                    <span className="text-yellow-500">★</span>
                    {book.rating}
                </div>

                <Image
                    src={book.image}
                    width={200}
                    height={150}
                    alt={book.bookName}
                    className="h-full w-auto object-contain transition duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="space-y-4 p-5">

                {/* Book Name */}
                <div>
                    <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
                        {book.bookName}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        by {book.author}
                    </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Book Information */}
                <div className="grid grid-cols-2 gap-3 border-y border-gray-100 py-4">

                    <div>
                        <p className="text-xs text-gray-400">
                            Pages
                        </p>
                        <p className="font-semibold text-gray-800">
                            {book.totalPages}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">
                            Published
                        </p>
                        <p className="font-semibold text-gray-800">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                </div>

                {/* Publisher */}
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                        Publisher
                    </span>

                    <span className="font-medium text-gray-700">
                        {book.publisher}
                    </span>
                </div>

                {/* Button */}
                <Link
                    href={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/books/${book.bookId}`}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                    View Details
                    <span className="text-lg transition-transform group-hover:translate-x-1">
                        →
                    </span>
                </Link>

            </div>
        </div>
    );
};

export default BooksCard;