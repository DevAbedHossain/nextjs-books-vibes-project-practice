import Image from 'next/image';
import BannerImage from "@/assets/pngwing 1.png"
import Link from 'next/link';

const Banner = () => {
    return (
        <section className="container mx-auto py-5">
            <div className="relative overflow-hidden rounded-3xl bg-[#f3f7f1] px-6 py-10 md:px-12 lg:px-16 lg:py-14">

                {/* Hero Content */}
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

                    {/* Left Content */}
                    <div className="space-y-7">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                            <span>📖</span>
                            Better Books
                            <span>•</span>
                            Brighter Minds
                        </div>

                        {/* Heading */}
                        <h1 className="max-w-2xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Books to freshen up
                            <span className="block text-green-600">
                                your bookshelf
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="max-w-xl text-base leading-7 text-gray-600 md:text-lg">
                            Discover new worlds, fresh ideas and timeless stories.
                            Explore our curated collection and find your next
                            favorite book today.
                        </p>

                        {/* CTA */}
                        <Link
                            href="/books"
                            className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-green-600/20 transition duration-300 hover:bg-green-700 hover:shadow-xl"
                        >
                            View The List
                            <span className="text-xl">→</span>
                        </Link>

                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end">

                        {/* Background Shape */}
                        <div className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-green-100 md:h-96 md:w-96" />

                        <Image
                            src={BannerImage}
                            width={600}
                            height={600}
                            alt="Books"
                            priority
                            className="relative z-10 w-full max-w-md object-contain"
                        />

                    </div>

                </div>

                {/* Features */}
                <div className="mt-10 grid grid-cols-1 gap-5 border-t border-green-900/10 pt-8 sm:grid-cols-3">

                    {/* Feature 1 */}
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl">
                            📚
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900">
                                Wide Selection
                            </h3>
                            <p className="text-sm text-gray-500">
                                From bestsellers to hidden gems
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex items-center gap-4 sm:border-l sm:border-green-900/10 sm:pl-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl">
                            🚚
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900">
                                Fast Delivery
                            </h3>
                            <p className="text-sm text-gray-500">
                                Books delivered to your door
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex items-center gap-4 sm:border-l sm:border-green-900/10 sm:pl-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl">
                            🛡️
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900">
                                Secure Payment
                            </h3>
                            <p className="text-sm text-gray-500">
                                Shop with confidence
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Banner;