import Image from 'next/image';
import Logo from "@/assets/Book Vibe.png"
import Link from 'next/link';

const Navbar = () => {

    const links = <>
        <li><Link href={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`}>Home</Link></li>
        <li><Link href={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/books`}>Books</Link></li>
        <li><Link href={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/listed-books`}>Listed Books</Link></li>
        <li><Link href={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/page-to-read`}>Pages to Read</Link></li>
    </>

    return (
        <nav className=" bg-base-100 shadow-sm">
            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link href="/"><Image src={Logo} alt="Book Vibe" width={500} height={500} className="w-30" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <Link href="" className="btn btn-success">Sing Up</Link>
                    <Link href="" className="btn btn-info">Sing In</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;