import Link from "next/link";
import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-20 bg-[#10231b] text-white">

            {/* Main Footer */}
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="lg:col-span-1">

                        <Link
                            href={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`}
                            className="text-2xl font-bold tracking-tight"
                        >
                            Book<span className="text-green-400">Nest</span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
                            Discover stories that inspire, ideas that matter,
                            and books that stay with you. Find your next
                            favorite book with us.
                        </p>

                        {/* Social */}
                        <div className="mt-6 flex gap-3">

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-green-500"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-green-500"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-green-500"
                            >
                                <FaTwitter />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-green-500"
                            >
                                <FaGithub />
                            </a>

                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold">
                            Explore
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-400">

                            <li>
                                <Link
                                    href="#"
                                    className="transition hover:text-green-400"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#"
                                    className="transition hover:text-green-400"
                                >
                                    All Books
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#"
                                    className="transition hover:text-green-400"
                                >
                                    Categories
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#"
                                    className="transition hover:text-green-400"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#"
                                    className="transition hover:text-green-400"
                                >
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold">
                            Categories
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-400">

                            <li>
                                <Link
                                    href="/books?category=fiction"
                                    className="transition hover:text-green-400"
                                >
                                    Fiction
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/books?category=romance"
                                    className="transition hover:text-green-400"
                                >
                                    Romance
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/books?category=classic"
                                    className="transition hover:text-green-400"
                                >
                                    Classic
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/books?category=mystery"
                                    className="transition hover:text-green-400"
                                >
                                    Mystery
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/books?category=science"
                                    className="transition hover:text-green-400"
                                >
                                    Science
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold">
                            Stay Updated
                        </h3>

                        <p className="mb-5 text-sm leading-6 text-gray-400">
                            Get book recommendations, new arrivals and
                            special offers directly in your inbox.
                        </p>

                        <form className="space-y-3">

                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-green-500"
                            />

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-green-500 px-4 py-3 font-semibold text-white transition hover:bg-green-600"
                            >
                                Subscribe
                            </button>

                        </form>
                    </div>

                </div>

                {/* Bottom */}
                <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

                    <p>
                        © {new Date().getFullYear()} BookNest. All rights reserved.
                    </p>

                    <div className="flex gap-6">

                        <Link
                            href="/privacy"
                            className="transition hover:text-green-400"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="transition hover:text-green-400"
                        >
                            Terms & Conditions
                        </Link>

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;