import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { BsCart } from "react-icons/bs";
import { BiHeart, BiPhoneCall } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai'

export default function Navtop(props) {
    return (
        <header className="bg-primary">
            <div className="flex items-center h-11 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8" >
                <div className="flex items-center justify-end flex-1 md:justify-between">
                    <nav
                        className="hidden md:block"
                        aria-labelledby="header-navigation"
                    >
                        <h2 className="sr-only" id="header-navigation">
                            Header navigation
                        </h2>
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75 font16-16 flex"
                                    href="/"
                                >
                                    <HiOutlineMail/>
                                    mhhasanul@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75 font16-16 flex"
                                    href="/"
                                >
                                    <BiPhoneCall/>
                                    (12345)67890
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-4">
                        <div className="sm:gap-4 sm:flex items-center">
                            <select
                                name="languagea"
                                id="languagea"
                                className="border-0 p-1 w-32 bg-primary font16-16"
                            >
                                <option value="volvo">English</option>
                                <option value="saab">Vietnamess</option>
                            </select>
                            <select
                                name="moeny"
                                id="moeny"
                                className="border-0 p-1 w-20 bg-primary font16-16"
                            >
                                <option value="volvo">USD</option>
                                <option value="saab">VND</option>
                            </select>
                            <Link
                                href={route("login")}
                                className="text-sm text-gray-700 dark:text-gray-500 no-underline font16-16"
                            >
                                Login
                            </Link>
                            <div className="flex items-center font16-16">
                                Wishlist
                                <AiOutlineHeart/>
                                </div>
                            <div className="cart font16-16 font-bold">
                                <BsCart />
                            </div>

                            {/* {props.auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="text-sm text-gray-700 dark:text-gray-500 underline"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="text-sm text-gray-700 dark:text-gray-500 underline"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        href={route("register")}
                                        className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                                    >
                                        Register
                                    </Link>
                                </>
                            )} */}
                        </div>
                        <button className="block p-2.5 text-gray-600 transition bg-gray-100 rounded md:hidden hover:text-gray-600/75">
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
